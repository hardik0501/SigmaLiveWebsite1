import https from 'https';

function testJsonBin() {
  const data = JSON.stringify({
    leads: [{ id: 'SIG-001', name: 'Global Lead Test' }]
  });

  const options = {
    hostname: 'api.jsonbin.io',
    port: 443,
    path: '/v3/b',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Bin-Private': 'false',
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

testJsonBin();
