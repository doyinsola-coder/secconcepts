const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, '..', 'src', 'components', 'Navbar.tsx');
let s = fs.readFileSync(p, 'utf8');
const linkStart = s.indexOf('<Link href="/"');
if (linkStart === -1) {
  console.log('no_link');
  process.exit(0);
}
const openTagEnd = s.indexOf('>', linkStart);
const closeTag = s.indexOf('</Link>', openTagEnd);
if (openTagEnd === -1 || closeTag === -1) {
  console.log('no_bounds');
  process.exit(0);
}
const newBlock = `<Link href="/" className="flex items-center gap-3 md:gap-4 no-underline min-w-0">\n          <Image\n            src="/logo.png"\n            alt="logo"\n            width={64}\n            height={64}\n            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"\n          />\n          <div className="min-w-0">\n            <p className="truncate text-base font-extrabold text-[#0a2e1f] md:text-2xl">\n              Sec Concept <span className="text-[#0e7c5a]">Networks</span>\n            </p>\n            <p className="truncate text-[10px] text-[#5a8a72] mt-0.5 md:text-sm">\n              Networking · Cybersecurity · Cloud Security\n            </p>\n          </div>\n        </Link>`;

s = s.slice(0, linkStart) + newBlock + s.slice(closeTag + 7);
fs.writeFileSync(p, s, 'utf8');
console.log('patched');
