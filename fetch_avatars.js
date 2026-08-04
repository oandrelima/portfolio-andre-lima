const fs = require('fs');
const https = require('https');
const path = require('path');

const channels = [
  { id: 'herobase', handle: '@herobase' },
  { id: 'herofortnite', handle: '@herofortnite' },
  { id: 'pulgaboy', handle: '@Pulgaboy' },
  { id: 'nicksfps', handle: '@Nicksfps' },
  { id: 'blackoutzoficial', handle: '@blackoutzoficial' },
  { id: 'teuzz', handle: '@Teuzz' },
  { id: 'jxnes7', handle: '@jxnes7' },
  { id: 'loud_diguera', handle: '@loud_diguera' },
  { id: 'suetam', handle: '@Suetam' },
  { id: '916gon', handle: '@916Gon' }
];

const outDir = path.join(__dirname, 'public', 'images', 'avatars');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return get(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(imgUrl, dest) {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream(dest);
    https.get(imgUrl, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fileStream.close();
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function fetchAvatar(ch) {
  try {
    const url = 'https://www.youtube.com/' + ch.handle;
    const html = await get(url);
    const match = html.match(/<meta property="og:image" content="([^"]+)">/i) || html.match(/"avatar":{"thumbnails":\[{"url":"([^"]+)"/i);
    if (match && match[1]) {
      const imgUrl = match[1].replace(/&amp;/g, '&');
      console.log(`[SUCCESS] ${ch.id} -> ${imgUrl}`);
      const dest = path.join(outDir, `${ch.id}.jpg`);
      await downloadFile(imgUrl, dest);
      console.log(`Saved ${ch.id}.jpg`);
    } else {
      console.log(`[FAIL] No image match for ${ch.id}`);
    }
  } catch (err) {
    console.error(`[ERROR] ${ch.id}:`, err.message);
  }
}

(async () => {
  for (const ch of channels) {
    await fetchAvatar(ch);
  }
  console.log('Done downloading avatars.');
})();
