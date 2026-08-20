// Vercel Serverless Function - /api/leads
let inMemoryLeads = [];

const CLOUD_STORAGE_URL = 'https://api.restful-api.dev/objects/ff8081819ff5b11001a01d1fee335779';

async function fetchLeadsFromCloud() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const res = await fetch(CLOUD_STORAGE_URL, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      const json = await res.json();
      const raw = json?.data?.leads || json?.leads || [];
      if (Array.isArray(raw) && raw.length > 0) {
        inMemoryLeads = raw;
        return raw;
      }
    }
  } catch (err) {
    // Fallback to memory
  }
  return inMemoryLeads;
}

async function saveLeadsToCloud(leads) {
  inMemoryLeads = leads;
  try {
    const payload = {
      name: 'sigma_homes_crm_leads_db_2026',
      data: { leads },
    };
    await fetch(CLOUD_STORAGE_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    // Ignore error
  }
}

export default async function handler(req, res) {
  // Enable permissive CORS for all clients, mobile, laptop & Vercel
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const leads = await fetchLeadsFromCloud();
      return res.status(200).json({ success: true, leads });
    }

    if (req.method === 'POST') {
      const newLead = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (!newLead || typeof newLead !== 'object') {
        return res.status(400).json({ success: false, error: 'Invalid lead data.' });
      }

      const currentLeads = await fetchLeadsFromCloud();
      const existingIndex = currentLeads.findIndex((l) => l && l.id === newLead.id);

      if (existingIndex >= 0) {
        currentLeads[existingIndex] = { ...currentLeads[existingIndex], ...newLead };
      } else {
        currentLeads.unshift(newLead);
      }

      await saveLeadsToCloud(currentLeads);
      console.log(`[Vercel Serverless API] Saved Lead: ${newLead.name} (${newLead.phone}) - Ref: ${newLead.id}`);
      return res.status(200).json({ success: true, lead: newLead, leads: currentLeads });
    }

    if (req.method === 'PUT') {
      const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const leadsToSave = Array.isArray(payload.leads) ? payload.leads : Array.isArray(payload) ? payload : null;
      if (leadsToSave) {
        await saveLeadsToCloud(leadsToSave);
        return res.status(200).json({ success: true, leads: leadsToSave });
      }
      return res.status(400).json({ success: false, error: 'Invalid leads array.' });
    }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      const currentLeads = await fetchLeadsFromCloud();
      const filtered = currentLeads.filter((l) => l && l.id !== id);
      await saveLeadsToCloud(filtered);
      return res.status(200).json({ success: true, leads: filtered });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (err) {
    console.error('[Vercel Serverless API Error]:', err);
    return res.status(500).json({ success: false, error: err.message || 'Server error' });
  }
}
