const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

const files = ['vanguard-uikit.jsx', 'index.js'];

files.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const distPath = path.join(distDir, file);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, distPath);
    console.log(`Copied: ${file}`);
  }
});

console.log('Build complete!');
