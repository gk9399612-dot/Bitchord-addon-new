export default async function handler(req, res) {
  const q = req.query.q || "";
  if (!q) return res.status(200).json({ results: [] });
  
  // Simple search - iTunes se search karke la raha hai
  const r = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(q)}&media=music&limit=10`);
  const data = await r.json();
  const results = (data.results || []).map(t => ({
    id: String(t.trackId),
    title: t.trackName,
    artist: t.artistName,
    album: t.collectionName,
    cover: t.artworkUrl100?.replace('100x100', '600x600'),
    duration: Math.floor(t.trackTimeMillis / 1000)
  }));
  res.status(200).json({ results });
}
