const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      filelist.push(dir + '/' + file);
    }
  });
  return filelist;
};

const files = walkSync('./components');
let updatedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/<MagneticButton([^>]*)>([\s\S]*?)<\/MagneticButton>/g, (match, attrs, inner) => {
    // If it already has an "as=" prop, skip
    if (attrs.includes('as=')) return match;
    
    // Check if the inner content starts with an interactive element
    const trimmedInner = inner.trim();
    if (trimmedInner.startsWith('<Link') || trimmedInner.startsWith('<a ') || trimmedInner.startsWith('<button')) {
      return `<MagneticButton as="div"${attrs}>${inner}</MagneticButton>`;
    }
    return match;
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    updatedCount++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Finished. Updated ${updatedCount} files.`);
