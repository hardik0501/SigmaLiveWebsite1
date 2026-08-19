import https from 'https';

const BUCKET_ID = 'VC1h7LrgvRgG6GdsZ2Svzy';
const KEY = 'sigma_leads';

function setKvLeads(leads) {
  const data = JSON.stringify(leads);
  const options = {
    hostname: 'kvdb.io',
    port: 443,
    path: `/${BUCKET_ID}/${KEY}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      console.log('SET STATUS:', res.statusCode);
      console.log('SET RESPONSE:', body);
      getKvLeads();
    });
  });

  req.write(data);
  req.end();
}

function getKvLeads() {
  const options = {
    hostname: 'kvdb.io',
    port: 443,
    path: `/${BUCKET_ID}/${KEY}`,
    method: 'GET'
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      console.log('GET STATUS:', res.statusCode);
      console.log('GET RESPONSE:', body);
    });
  });

  req.end();
}

setKvLeads([
  { id: 'SIG-TEST-001', name: 'Global Test Lead', phone: '9829012345', leadType: 'contact', status: 'New', createdAt: new Date().toISOString() }
]);
