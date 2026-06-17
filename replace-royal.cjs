const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Backgrounds
      content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-transparent');
      content = content.replace(/bg-premium-black/g, 'bg-royal-dark');
      content = content.replace(/bg-white/g, 'bg-royal-dark/40 backdrop-blur-md');
      content = content.replace(/bg-stone-50/g, 'bg-royal-dark/40 backdrop-blur-md');
      content = content.replace(/bg-premium-white/g, 'bg-royal-dark/40 backdrop-blur-md');
      
      // Borders
      content = content.replace(/border-stone-100/g, 'border-gold/20');
      content = content.replace(/border-white\/5/g, 'border-gold/10');
      content = content.replace(/border-white\/10/g, 'border-gold/20');
      
      // Text
      content = content.replace(/text-\[\#0a0a0a\]/g, 'text-premium-white');
      content = content.replace(/text-stone-950/g, 'text-gold');
      content = content.replace(/text-stone-500/g, 'text-white/60');
      content = content.replace(/text-stone-400/g, 'text-white/40');
      content = content.replace(/text-premium-black/g, 'text-premium-white');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
