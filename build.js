const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const distDir = path.join(__dirname, 'dist');

// Clean and create dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir);

// Read source files
const vanguardSrc = fs.readFileSync(path.join(srcDir, 'vanguard-uikit.jsx'), 'utf8');
const indexSrc = fs.readFileSync(path.join(srcDir, 'index.js'), 'utf8');

// Create dist files
fs.writeFileSync(path.join(distDir, 'vanguard-uikit.jsx'), vanguardSrc);
fs.writeFileSync(path.join(distDir, 'index.js'), indexSrc);

// Copy TypeScript definitions
const typesSrc = fs.readFileSync(path.join(srcDir, 'index.d.ts'), 'utf8');
fs.writeFileSync(path.join(distDir, 'index.d.ts'), typesSrc);

// Copy README and package.json
fs.copyFileSync(path.join(srcDir, 'README.md'), path.join(distDir, 'README.md'));
const pkg = JSON.parse(fs.readFileSync(path.join(srcDir, 'package.json'), 'utf8'));
delete pkg.devDependencies;
delete pkg.scripts;
fs.writeFileSync(path.join(distDir, 'package.json'), JSON.stringify(pkg, null, 2));

console.log('✅ Build complete! Files ready in dist/');
console.log('   - vanguard-uikit.jsx');
console.log('   - index.js');
console.log('   - index.d.ts');
console.log('   - package.json');
console.log('   - README.md');
