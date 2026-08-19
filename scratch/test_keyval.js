import https from 'https';

function testKeyval() {
  const data = JSON.stringify({
    leads: [{ id: 'SIG-001', name: 'Test User' }]
  });

  const options = {
    hostname: 'api.keyval.org',
    port: 443,
    path: '/key/sigma_homes_leads_global',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      console.log('STATUS:', res.statusCode);
      console.log('RESPONSE:', body);
    });
  });

  req.on('error', (e) => {
    console.error('ERROR:', e);
  });

  req.write(data);
  req.end();
}

testKeyval();
