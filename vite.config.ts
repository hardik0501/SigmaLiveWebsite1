import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

function leadsJsonStoragePlugin(): Plugin {
  const dataDir = path.resolve(process.cwd(), 'data');
  const leadsFile = path.resolve(dataDir, 'leads.json');

  const ensureFileExists = () => {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(leadsFile)) {
      fs.writeFileSync(leadsFile, JSON.stringify([], null, 2), 'utf-8');
    }
  };

  const readLeads = (): any[] => {
    ensureFileExists();
    try {
      const content = fs.readFileSync(leadsFile, 'utf-8');
      const parsed = JSON.parse(content);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const writeLeads = (leads: any[]) => {
    ensureFileExists();
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), 'utf-8');
  };

  return {
    name: 'leads-json-storage-plugin',
    configureServer(server) {
      server.middlewares.use('/api/leads', (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method === 'GET') {
          const leads = readLeads();
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          res.end(JSON.stringify({ success: true, leads }));
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => (body += chunk));
          req.on('end', () => {
            try {
              const newLead = JSON.parse(body);
              const currentLeads = readLeads();
              const existingIndex = currentLeads.findIndex((l: any) => l && l.id === newLead.id);
              if (existingIndex >= 0) {
                currentLeads[existingIndex] = { ...currentLeads[existingIndex], ...newLead };
              } else {
                currentLeads.unshift(newLead);
              }
              writeLeads(currentLeads);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, leads: currentLeads }));
            } catch (err: any) {
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        if (req.method === 'PUT') {
          let body = '';
          req.on('data', (chunk) => (body += chunk));
          req.on('end', () => {
            try {
              const payload = JSON.parse(body);
              const leadsToSave = Array.isArray(payload.leads) ? payload.leads : Array.isArray(payload) ? payload : null;
              if (leadsToSave) {
                writeLeads(leadsToSave);
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true, leads: leadsToSave }));
              } else {
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, error: 'Invalid leads format' }));
              }
            } catch (err: any) {
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        if (req.method === 'DELETE') {
          const urlParts = req.url?.split('/') || [];
          const leadId = urlParts[urlParts.length - 1];
          if (leadId && leadId !== 'leads') {
            const currentLeads = readLeads();
            const filtered = currentLeads.filter((l: any) => l && l.id !== leadId);
            writeLeads(filtered);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ success: true, leads: filtered }));
            return;
          }
        }

        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), leadsJsonStoragePlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    watch: {
      ignored: ['**/data/**'],
    },
  },
});
