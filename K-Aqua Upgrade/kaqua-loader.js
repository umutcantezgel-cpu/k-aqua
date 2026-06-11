/* K-Aqua Loading Indicator — spinning globe with real country outlines.
   Monochrome (brand purple) on off-white, 200×200, with whirl trails.
   Plain JS, no dependencies. Country borders: world-atlas 110m (fetched,
   minimal inline TopoJSON decoder). Falls back to a graticule globe until
   data arrives. Animation is rAF-driven; in non-painting iframes it simply
   renders one static frame. Overlay auto-dismisses via KAquaLoader.hideOverlay()
   (min display time) plus a hard 8s fallback. */
(function () {
  var COLOR = '#5B2D8C';
  var BG = '#FAF9F7';
  var SIZE = 200;
  var R = 62;                 // globe radius in px
  var DATA_URL = 'https://unpkg.com/world-atlas@2.0.2/countries-110m.json';

  var worldLines = null;      // array of [lon,lat][] polylines (shared borders + coasts)
  var redrawHooks = [];

  /* ---- minimal TopoJSON arc decoder: every arc once = clean border mesh ---- */
  function decodeTopo(topo) {
    var tr = topo.transform;
    var sx = tr.scale[0], sy = tr.scale[1], tx = tr.translate[0], ty = tr.translate[1];
    var lines = [];
    for (var i = 0; i < topo.arcs.length; i++) {
      var arc = topo.arcs[i];
      var x = 0, y = 0, line = [];
      for (var j = 0; j < arc.length; j++) {
        x += arc[j][0]; y += arc[j][1];
        line.push([x * sx + tx, y * sy + ty]);
      }
      if (line.length > 1) lines.push(line);
    }
    return lines;
  }

  fetch(DATA_URL).then(function (r) { return r.json(); }).then(function (topo) {
    worldLines = decodeTopo(topo);
    redrawHooks.forEach(function (fn) { fn(); });
  }).catch(function () { /* graticule fallback stays */ });

  /* ---- graticule fallback (meridians + parallels) ---- */
  function graticuleLines() {
    var lines = [], lon, lat, line;
    for (lon = -180; lon < 180; lon += 30) {
      line = [];
      for (lat = -80; lat <= 80; lat += 5) line.push([lon, lat]);
      lines.push(line);
    }
    for (lat = -60; lat <= 60; lat += 30) {
      line = [];
      for (lon = -180; lon <= 180; lon += 5) line.push([lon, lat]);
      lines.push(line);
    }
    return lines;
  }
  var fallbackLines = graticuleLines();

  /* ---- orthographic projection ---- */
  var TILT = -0.32;
  var cosT = Math.cos(TILT), sinT = Math.sin(TILT);
  function project(lon, lat, rotDeg) {
    var lam = (lon + rotDeg) * Math.PI / 180;
    var phi = lat * Math.PI / 180;
    var cp = Math.cos(phi);
    var x = cp * Math.sin(lam);
    var y = Math.sin(phi);
    var z = cp * Math.cos(lam);
    return { x: x, y: y * cosT - z * sinT, z: y * sinT + z * cosT };
  }

  function createGlobe(canvas, opts) {
    opts = opts || {};
    var size = opts.size || SIZE;
    var R = opts.radius || Math.round(size * 0.31);
    var color = opts.color || COLOR;
    var showWhirl = opts.whirl !== false;
    var speed = opts.speed != null ? opts.speed : 0.028;
    var markers = opts.markers || [];
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    var cx = size / 2, cy = size / 2;
    var dragOffset = 0, dragging = false, dragStartX = 0, dragStartOffset = 0;
    var lastT = 0, activeMarker = null;

    function drawWhirl(t) {
      // three comet trails orbiting the globe
      var trails = [
        { r: R + R * 0.21, speed: 0.0016, span: 1.9, width: 2.0, phase: 0 },
        { r: R + R * 0.34, speed: -0.0011, span: 1.4, width: 1.5, phase: 2.4 },
        { r: R + R * 0.47, speed: 0.0007, span: 2.3, width: 1.0, phase: 4.2 },
      ];
      trails.forEach(function (tr) {
        var head = tr.phase + t * tr.speed;
        var steps = 26;
        for (var i = 0; i < steps; i++) {
          var a0 = head - (i / steps) * tr.span;
          var a1 = head - ((i + 1) / steps) * tr.span;
          ctx.beginPath();
          ctx.arc(cx, cy, tr.r, a1, a0);
          ctx.strokeStyle = color;
          ctx.globalAlpha = 0.55 * (1 - i / steps);
          ctx.lineWidth = tr.width * (1 - 0.6 * i / steps);
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      });
      ctx.globalAlpha = 1;
    }

    function drawGlobe(t) {
      var rot = t * speed + dragOffset;
      // sphere fill + rim
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(91, 45, 140, 0.05)';
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.9;
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.globalAlpha = 1;

      var lines = worldLines || fallbackLines;
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(0.65, R / 95 * 0.65);
      ctx.globalAlpha = 0.85;
      ctx.lineJoin = 'round';
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var started = false;
        ctx.beginPath();
        for (var j = 0; j < line.length; j++) {
          var p = project(line[j][0], line[j][1], rot);
          if (p.z > 0.02) {
            var px = cx + p.x * R, py = cy - p.y * R;
            if (started) ctx.lineTo(px, py); else { ctx.moveTo(px, py); started = true; }
          } else {
            started = false;
          }
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // markers (project points, remember screen position for hit tests)
      for (var m = 0; m < markers.length; m++) {
        var mk = markers[m];
        var mp = project(mk.lon, mk.lat, rot);
        if (mp.z <= 0.05) { mk._sx = null; continue; }
        var mx = cx + mp.x * R, my = cy - mp.y * R;
        mk._sx = mx; mk._sy = my;
        ctx.beginPath();
        ctx.arc(mx, my, mk === activeMarker ? 7 : 4.5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(mx, my, mk === activeMarker ? 12 : 9, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }

    function frame(t) {
      ctx.clearRect(0, 0, size, size);
      if (showWhirl) drawWhirl(t);
      drawGlobe(t);
    }

    var running = true;
    function loop(t) {
      if (!running) return;
      lastT = t;
      frame(t);
      requestAnimationFrame(loop);
    }
    frame(0);                       // static first frame (non-painting iframes)
    requestAnimationFrame(loop);
    redrawHooks.push(function () { frame(lastT); });

    /* drag-to-rotate + marker interaction */
    if (opts.interactive) {
      canvas.style.touchAction = 'pan-y';
      canvas.style.cursor = 'grab';
      canvas.addEventListener('pointerdown', function (e) {
        dragging = true; dragStartX = e.clientX; dragStartOffset = dragOffset;
        canvas.style.cursor = 'grabbing';
        try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
      });
      canvas.addEventListener('pointermove', function (e) {
        var rect = canvas.getBoundingClientRect();
        if (dragging) {
          dragOffset = dragStartOffset + (e.clientX - dragStartX) * 0.45;
          if (opts.onDrag) opts.onDrag();
          frame(lastT);
          return;
        }
        var px = e.clientX - rect.left, py = e.clientY - rect.top;
        var hit = null;
        for (var i = 0; i < markers.length; i++) {
          var mk = markers[i];
          if (mk._sx != null && Math.hypot(px - mk._sx, py - mk._sy) < 14) { hit = mk; break; }
        }
        if (hit !== activeMarker) { activeMarker = hit; frame(lastT); }
        canvas.style.cursor = hit ? 'pointer' : 'grab';
        if (opts.onHover) opts.onHover(hit);
      });
      canvas.addEventListener('pointerup', function (e) {
        var moved = Math.abs(e.clientX - dragStartX) > 6;
        dragging = false;
        canvas.style.cursor = 'grab';
        if (moved) return;
        var rect = canvas.getBoundingClientRect();
        var px = e.clientX - rect.left, py = e.clientY - rect.top;
        for (var i = 0; i < markers.length; i++) {
          var mk = markers[i];
          if (mk._sx != null && Math.hypot(px - mk._sx, py - mk._sy) < 14) {
            if (opts.onMarker) opts.onMarker(mk);
            break;
          }
        }
      });
    }

    return { stop: function () { running = false; }, redraw: function () { frame(lastT); } };
  }

  /* ---- fullscreen overlay (auto when script tag has data-auto) ---- */
  var overlay = null, overlayGlobe = null, shownAt = 0, MIN_SHOW = 1400;

  function mountOverlay() {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:' + BG +
      ';display:grid;place-items:center;';
    var canvas = document.createElement('canvas');
    overlay.appendChild(canvas);
    document.body.appendChild(overlay);
    overlayGlobe = createGlobe(canvas);
    shownAt = Date.now();
    // hard fallback: never trap the user
    setTimeout(hideOverlay, 8000);
  }

  function hideOverlay() {
    if (!overlay) return;
    var el = overlay; overlay = null;
    var wait = Math.max(0, MIN_SHOW - (Date.now() - shownAt));
    setTimeout(function () {
      el.style.transition = 'opacity 380ms ease';
      el.style.opacity = '0';
      setTimeout(function () {
        if (el.getAnimations) el.getAnimations().forEach(function (a) { try { a.finish(); } catch (e) {} });
        if (overlayGlobe) overlayGlobe.stop();
        el.remove();
      }, 420);
    }, wait);
  }

  window.KAquaLoader = { createGlobe: createGlobe, mountOverlay: mountOverlay, hideOverlay: hideOverlay };

  var script = document.currentScript;
  if (script && script.hasAttribute('data-auto')) mountOverlay();
})();
