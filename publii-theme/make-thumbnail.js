// Generate a 400x300 PNG thumbnail for the Publii theme, no dependencies.
const zlib = require('zlib');
const fs = require('fs');

const W = 400, H = 300;

// palette
const paper = [0xfa, 0xf6, 0xf0];
const tomato = [0xcf, 0x3b, 0x26];
const basil = [0x3f, 0x6b, 0x3f];
const ink = [0x24, 0x1f, 0x1c];

function px(x, y) {
  // background
  let c = paper;
  // big off-centre "square with corners" block
  if (x >= 150 && x < 320 && y >= 70 && y < 240) c = tomato;
  // inner negative-space square (the "corner" motif)
  if (x >= 200 && x < 270 && y >= 120 && y < 190) c = paper;
  // basil baseline stripe
  if (y >= 258 && y < 264 && x >= 80 && x < 320) c = basil;
  // ink top-left wordmark tick
  if (x >= 80 && x < 104 && y >= 60 && y < 84) c = ink;
  return c;
}

const raw = Buffer.alloc(H * (1 + W * 3));
let o = 0;
for (let y = 0; y < H; y++) {
  raw[o++] = 0; // filter: none
  for (let x = 0; x < W; x++) {
    const c = px(x, y);
    raw[o++] = c[0]; raw[o++] = c[1]; raw[o++] = c[2];
  }
}

// CRC32
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td), 0);
  return Buffer.concat([len, td, crc]);
}

const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8;   // bit depth
ihdr[9] = 2;   // colour type: truecolour
ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
const idat = zlib.deflateSync(raw, { level: 9 });

const png = Buffer.concat([
  sig,
  chunk('IHDR', ihdr),
  chunk('IDAT', idat),
  chunk('IEND', Buffer.alloc(0)),
]);

const out = process.argv[2] || 'thumbnail.png';
fs.writeFileSync(out, png);
console.log('wrote', out, png.length, 'bytes');
