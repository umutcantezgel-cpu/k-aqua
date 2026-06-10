const fs = require('fs');
const path = require('path');

// 1. Rename files in components/ui to PascalCase
const uiDir = path.join(__dirname, 'components', 'ui');
const files = fs.readdirSync(uiDir);
files.forEach(file => {
  if (file.endsWith('.tsx') && file[0] >= 'a' && file[0] <= 'z') {
    const PascalName = file.charAt(0).toUpperCase() + file.slice(1);
    const oldPath = path.join(uiDir, file);
    const tmpPath = path.join(uiDir, 'TMP_' + file);
    const newPath = path.join(uiDir, PascalName);
    fs.renameSync(oldPath, tmpPath);
    fs.renameSync(tmpPath, newPath);
    console.log(`Renamed ${file} to ${PascalName}`);
  }
});

// 2. Search and replace imports globally across app/ and components/
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const allFiles = [...walk(path.join(__dirname, 'app')), ...walk(path.join(__dirname, 'components'))];
let replacedFiles = 0;
allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  // Replace imports like '@/components/ui/icon' with '@/components/ui/Icon'
  content = content.replace(/@\/components\/ui\/([a-z])([^'"]*)/g, (match, p1, p2) => {
    return '@/components/ui/' + p1.toUpperCase() + p2;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    replacedFiles++;
  }
});
console.log(`Updated imports in ${replacedFiles} files.`);
