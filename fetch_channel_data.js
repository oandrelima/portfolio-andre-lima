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
  { id: '916gon', handle: '@916Gon' },
  { id: 'cortesdopulgaoficial', handle: '@CortesdoPulgaOFICIAL' },
  { id: 'felipersa', handle: '@Felipersa' },
  { id: 'cortesfelipersa', handle: '@CortesFelipersa' },
  { id: 'cortesdodiguera', handle: '@CortesdoDiguera' },
  { id: 'teuzzcortes', handle: '@TeuzzCortes' },
  { id: 'edroadtoglory', handle: '@EdRoadToGlory' },
  { id: 'guigzvlr', handle: '@guigzvlr' },
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

async function scrapeChannel(ch) {
  try {
    const url = 'https://www.youtube.com/' + ch.handle;
    const html = await get(url);

    // Title
    let title = ch.handle.replace('@', '');
    const titleMatch = html.match(/<meta property="og:title" content="([^"]+)">/i);
    if (titleMatch && titleMatch[1]) {
      title = titleMatch[1].replace(/ - YouTube$/i, '').trim();
    }

    // Avatar Image
    const imgMatch = html.match(/<meta property="og:image" content="([^"]+)">/i) || html.match(/"avatar":{"thumbnails":\[{"url":"([^"]+)"/i);
    if (imgMatch && imgMatch[1]) {
      const imgUrl = imgMatch[1].replace(/&amp;/g, '&');
      const dest = path.join(outDir, `${ch.id}.jpg`);
      await downloadFile(imgUrl, dest);
    }

    // Subscriber Count
    let subs = 'N/A';
    const subsMatch = html.match(/"subscriberCountText":\{"accessibility":\{"accessibilityData":\{"label":"([^"]+)"\}\},"simpleText":"([^"]+)"\}/i)
      || html.match(/"subscriberCountText":\{"simpleText":"([^"]+)"\}/i)
      || html.match(/"subscriberCountText":\s*\{[^}]*"simpleText":\s*"([^"]+)"/i)
      || html.match(/([\d,\.]+[KMBkmb]?\s*(inscritos|subscribers))/i);

    if (subsMatch) {
      subs = subsMatch[2] || subsMatch[1] || 'N/A';
      subs = subs.replace(/\s*inscritos/i, '').replace(/\s*subscribers/i, '').trim();
    }

    console.log(`[SUCCESS] ${ch.handle} | Name: "${title}" | Subs: "${subs}"`);

    return {
      id: ch.id,
      name: title,
      handle: ch.handle,
      url: url,
      subscribers: subs,
      category: "Gaming & Content",
      verified: true
    };
  } catch (err) {
    console.error(`[ERROR] ${ch.handle}:`, err.message);
    return {
      id: ch.id,
      name: ch.handle.replace('@', ''),
      handle: ch.handle,
      url: 'https://www.youtube.com/' + ch.handle,
      subscribers: 'N/A',
      category: "Gaming & Content",
      verified: true
    };
  }
}

(async () => {
  const results = [];
  for (const ch of channels) {
    const res = await scrapeChannel(ch);
    results.push(res);
  }

  const tsContent = `export interface YouTubeChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  subscribers: string;
  category: string;
  verified: boolean;
}

export const YOUTUBE_CHANNELS_DATA: YouTubeChannel[] = ${JSON.stringify(results, null, 2)};
`;

  fs.writeFileSync(path.join(__dirname, 'src', 'server', 'data', 'youtubeChannels.ts'), tsContent, 'utf8');
  console.log('Successfully updated youtubeChannels.ts and downloaded all avatars!');
})();
