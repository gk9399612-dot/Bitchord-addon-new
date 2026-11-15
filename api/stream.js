export default async function handler(req, res) {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "No id" });
  
  // Yahan se stream URL milega
  res.status(200).json({
    url: `https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/${id}/preview.m4a`,
    quality: "lossless",
    format: "flac"
  });
}
