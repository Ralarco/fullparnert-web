/* eslint-disable */
const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./out');
files.forEach(f => {
  if(!f.match(/\.(html|js|css|json|txt)$/)) return;
  let c = fs.readFileSync(f, 'utf8');
  let newC = c.replace(/\/_next\//g, '/assets/').replace(/"_next\//g, '"assets/');
  
  // Extra replacement just in case for strictly relative paths!
  newC = newC.replace(/href=\"\/assets\//g, 'href=\"assets\/');
  newC = newC.replace(/src=\"\/assets\//g, 'src=\"assets\/');

  if (c !== newC) {
    fs.writeFileSync(f, newC);
    console.log('Replaced next paths in', f);
  }
});

// Rename folder safely
if (fs.existsSync('./out/_next')) {
  if (fs.existsSync('./out/assets')) {
    fs.rmSync('./out/assets', { recursive: true, force: true });
  }
  fs.renameSync('./out/_next', './out/assets');
  console.log('Renamed _next to assets');
}
