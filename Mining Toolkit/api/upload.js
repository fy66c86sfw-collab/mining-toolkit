import { put } from '@vercel/blob';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { filename, fileContent } = req.body;

    console.log('Received upload request:', { filename, contentLength: fileContent?.length });

    if (!filename || !fileContent) {
      return res.status(400).json({ error: 'Missing filename or fileContent' });
    }

    // Upload to Vercel Blob
    const blob = await put(`drill-logs/${filename}`, fileContent, {
      access: 'public',
      contentType: 'application/json'
    });

    console.log('Successfully uploaded to blob:', blob.url);

    return res.status(200).json({
      success: true,
      message: 'Entry uploaded to server',
      filename: filename,
      url: blob.url,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({
      error: 'Server error',
      message: error.message
    });
  }
}
