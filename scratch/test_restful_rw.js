import https from 'https';

const OBJECT_ID = 'ff8081819ff5b11001a015bde90e4542';

function setRestfulLeads(leads) {
  const data = JSON.stringify({
    name: 'Sigma Homes Global Leads Database',
    data: {
      leads: leads
    }
  });

  const options = {
    hostname: 'api.restful-api.dev',
    port: 443,
    path: `/objects/${OBJECT_ID}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      console.log('PUT STATUS:', res.statusCode);
      console.log('PUT RESPONSE:', body);
      getRestfulLeads();
    });
  });

  req.write(data);
  req.end();
}

function getRestfulLeads() {
  const options = {
    hostname: 'api.restful-api.dev',
    port: 443,
    path: `/objects/${OBJECT_ID}`,
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

setRestfulLeads([
  { id: 'SIG-TEST-001', name: 'Global Test Lead', phone: '9829012345', leadType: 'contact', status: 'New', createdAt: new Date().toISOString() }
]);
