
const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Static file options
const staticOpts = { setHeaders: (res, path) => { if (path.endsWith('.br')) { res.setHeader('Content-Encoding', 'br'); if (path.endsWith('.js.br')) res.setHeader('Content-Type', 'application/javascript'); else if (path.endsWith('.wasm.br')) res.setHeader('Content-Type', 'application/wasm'); else if (path.endsWith('.data.br')) res.setHeader('Content-Type', 'application/octet-stream'); else if (path.endsWith('.css.br')) res.setHeader('Content-Type', 'text/css'); } } };

// Define directories
const ROOT_DIR = __dirname;
const STAGE1_DIR = path.join(ROOT_DIR, 'stage1');
const STAGE2_DIR = path.join(ROOT_DIR, 'stage2', 'out');
const STAGE3_DIR = path.join(ROOT_DIR, 'stage3');
const ANIMATED_WORLD_DIR = path.join(ROOT_DIR, 'animated-world', 'non-animated-cloned');


// Other workspaces
const MANAGEMENT_DIR = path.join(ROOT_DIR, 'management workspace', 'dist');
const MARKETING_DIR = path.join(ROOT_DIR, 'marketing workspace', 'dist');
const TECHNICAL_DIR = path.join(ROOT_DIR, 'technical workspace', 'dist');
const FINANCIAL_DIR = path.join(ROOT_DIR, 'financial workspace', 'dist');
const CLIENT_HANDLING_DIR = path.join(ROOT_DIR, 'client handling workspace', 'dist');
const ENTRAIOT_CEO_DIR = path.join(ROOT_DIR, 'Entraiot CEO', 'CEO-dashboard-main', 'dist');
const ENTRAIOT_MD_DIR = path.join(ROOT_DIR, 'entraiot MD', 'dist');
const ENTRAIOT_DEVELOPER_DIR = path.join(ROOT_DIR, 'Entraiot developer', 'dist');
const ENTRAIOT_DEVELOPER_2_DIR = path.join(ROOT_DIR, 'Entraiot developer 2', 'dist');

// Serve Stages
app.use('/portfolio', express.static(STAGE1_DIR, staticOpts));
app.use('/way', express.static(STAGE2_DIR, staticOpts));
app.use('/buildings', express.static(STAGE3_DIR, staticOpts));
app.use('/animated-world', express.static(ANIMATED_WORLD_DIR, staticOpts));

// Serve Workspaces
app.use('/management', express.static(MANAGEMENT_DIR, staticOpts));
app.use('/marketing', express.static(MARKETING_DIR, staticOpts));
app.use('/technical', express.static(TECHNICAL_DIR, staticOpts));
app.use('/financial', express.static(FINANCIAL_DIR, staticOpts));
app.use('/client-handling', express.static(CLIENT_HANDLING_DIR, staticOpts));
app.use('/entraiot-ceo', express.static(ENTRAIOT_CEO_DIR, staticOpts));
app.use('/entraiot-md', express.static(ENTRAIOT_MD_DIR, staticOpts));
app.use('/entraiot-developer', express.static(ENTRAIOT_DEVELOPER_DIR, staticOpts));
app.use('/entraiot-developer-2', express.static(ENTRAIOT_DEVELOPER_2_DIR, staticOpts));

// SPA Fallbacks
const spaFallback = (dir) => (req, res, next) => {
  if (req.method === 'GET' && !req.path.includes('.')) {
    const indexPath = path.join(dir, 'index.html');
    if (fs.existsSync(indexPath)) {
      return res.sendFile(indexPath);
    }
  }
  next();
};

app.get('/portfolio/*', spaFallback(STAGE1_DIR));
app.get('/way/*', spaFallback(STAGE2_DIR));
app.get('/buildings/*', spaFallback(STAGE3_DIR));
app.get('/animated-world/*', spaFallback(ANIMATED_WORLD_DIR));

// Root redirect
app.get('/', (req, res) => res.redirect('/portfolio'));

// Also fallback everything else to STAGE 1 if not found
app.use(express.static(STAGE1_DIR, staticOpts));

// Start server
app.listen(PORT, () => {
  console.log('\n🚀 Entraiot Connect — Unified Server');
  console.log(`   http://localhost:${PORT}/portfolio     Stage 1 — 3D Portfolio`);
  console.log(`   http://localhost:${PORT}/way           Stage 2 — Bike Scrollytelling`);
  console.log(`   http://localhost:${PORT}/buildings     Stage 3 — 3D Buildings`);
  console.log('\n   Server is running!');
});
