import https from 'https';

function testCrudGet() {
  const options = {
    hostname: 'crudcrud.com',
    port: 443,
    path: '/api/950c4af2005c48f4a64d14025ebb1d7d/leads',
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

  req.on('error', (e) => {
    console.error('ERROR:', e);
  });

  req.end();
}

testCrudGet();
