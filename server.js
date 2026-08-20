import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const dataDir = path.join(__dirname, 'data');
const leadsFile = path.join(dataDir, 'leads.json');

// Ensure data directory and leads.json exist
const ensureStorageExists = () => {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(leadsFile)) {
    fs.writeFileSync(leadsFile, JSON.stringify([], null, 2), 'utf-8');
  }
};

const readLeadsFromFile = () => {
  ensureStorageExists();
  try {
    const raw = fs.readFileSync(leadsFile, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('[Backend Server] File read error:', err);
    return [];
  }
};

const writeLeadsToFile = (leads) => {
  ensureStorageExists();
  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), 'utf-8');
};

// Enable permissive CORS for all devices, mobiles, laptops, and origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

// GET /api/leads - Fetch all stored leads
app.get('/api/leads', (req, res) => {
  const leads = readLeadsFromFile();
  res.json({ success: true, leads });
});

// POST /api/leads - Store a newly submitted lead
app.post('/api/leads', (req, res) => {
  try {
    const newLead = req.body;
    if (!newLead || typeof newLead !== 'object') {
      return res.status(400).json({ success: false, error: 'Invalid lead data.' });
    }

    const currentLeads = readLeadsFromFile();
    const existingIndex = currentLeads.findIndex((l) => l && l.id === newLead.id);

    if (existingIndex >= 0) {
      currentLeads[existingIndex] = { ...currentLeads[existingIndex], ...newLead };
    } else {
      currentLeads.unshift(newLead);
    }

    writeLeadsToFile(currentLeads);
    console.log(`[Backend Server] Stored Lead: ${newLead.name} (${newLead.phone}) - Ref: ${newLead.id}`);

    res.json({ success: true, lead: newLead, leads: currentLeads });
  } catch (err) {
    console.error('[Backend Server] Error saving lead:', err);
    res.status(500).json({ success: false, error: 'Failed to save lead.' });
  }
});

// PUT /api/leads - Bulk update or update lead status
app.put('/api/leads', (req, res) => {
  try {
    const payload = req.body;
    const leadsToSave = Array.isArray(payload.leads) ? payload.leads : Array.isArray(payload) ? payload : null;

    if (leadsToSave) {
      writeLeadsToFile(leadsToSave);
      console.log(`[Backend Server] Updated leads list (Total: ${leadsToSave.length})`);
      res.json({ success: true, leads: leadsToSave });
    } else {
      res.status(400).json({ success: false, error: 'Invalid leads array payload.' });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to update leads.' });
  }
});

// DELETE /api/leads/:id - Delete lead by ID
app.delete('/api/leads/:id', (req, res) => {
  try {
    const { id } = req.params;
    const currentLeads = readLeadsFromFile();
    const filtered = currentLeads.filter((l) => l && l.id !== id);
    writeLeadsToFile(filtered);
    console.log(`[Backend Server] Deleted lead: ${id}`);
    res.json({ success: true, leads: filtered });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to delete lead.' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 [Sigma Backend Server] Running on http://0.0.0.0:${PORT} / http://localhost:${PORT}`);
});
