import https from 'https';

function testCrudCrud() {
  const data = JSON.stringify({
    name: 'Sigma Homes Test Lead',
    phone: '9829012345',
    leadType: 'contact',
    status: 'New',
    createdAt: new Date().toISOString()
  });

  // Note: crudcrud creates endpoints dynamically
  const options = {
    hostname: 'crudcrud.com',
    port: 443,
    path: '/api/950c4af2005c48f4a64d14025ebb1d7d/leads',
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

testCrudCrud();
