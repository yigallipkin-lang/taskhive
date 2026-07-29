// TaskHive Express Server with iOS Safari Cache-Busting
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Serve static files with appropriate cache headers
app.use(express.static(path.join(__dirname), {
  setHeaders: (res, filePath) => {
    // For index.html: aggressive no-cache headers for iOS Safari
    if (filePath.endsWith('index.html')) {
      res.set({
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        'ETag': 'W/"' + Date.now() + '"',
        'Last-Modified': new Date().toUTCString(),
        'Vary': 'Accept-Encoding'
      });
    }
    // For manifest.json: no-cache to detect version updates
    else if (filePath.endsWith('manifest.json')) {
      res.set({
        'Cache-Control': 'no-cache, max-age=0',
        'Pragma': 'no-cache'
      });
    }
    // For Service Worker: no-cache to detect updates
    else if (filePath.endsWith('sw.js')) {
      res.set({
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
        'Pragma': 'no-cache'
      });
    }
    // For static assets (fonts, icons, CSS): aggressive caching
    else if (filePath.match(/\.(js|css|woff2|png|jpg|ico|svg)$/)) {
      res.set({
        'Cache-Control': 'public, max-age=31536000, immutable'
      });
    }
  }
}));

// Handle all routes -> index.html (SPA fallback)
app.use((req, res) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`✓ TaskHive server running on http://127.0.0.1:${PORT}`);
  console.log('✓ iOS Safari cache-busting enabled');
});
