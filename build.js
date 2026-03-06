const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const distDir = path.join(__dirname, 'dist');
const srcSrcDir = path.join(srcDir, 'src');

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir);

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const indexSrc = fs.readFileSync(path.join(srcSrcDir, 'index.js'), 'utf8');
fs.writeFileSync(path.join(distDir, 'index.js'), indexSrc);

const typesSrc = fs.readFileSync(path.join(srcDir, 'index.d.ts'), 'utf8');
fs.writeFileSync(path.join(distDir, 'index.d.ts'), typesSrc);

fs.copyFileSync(path.join(srcDir, 'README.md'), path.join(distDir, 'README.md'));
const pkg = JSON.parse(fs.readFileSync(path.join(srcDir, 'package.json'), 'utf8'));
delete pkg.devDependencies;
delete pkg.scripts;
fs.writeFileSync(path.join(distDir, 'package.json'), JSON.stringify(pkg, null, 2));

console.log('✅ Build complete! Files ready in dist/');
console.log('   - index.js');
console.log('   - index.d.ts');
console.log('   - package.json');
console.log('   - README.md');
