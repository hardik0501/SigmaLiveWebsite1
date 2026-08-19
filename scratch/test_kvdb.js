import https from 'https';

function testKvdb() {
  const data = 'email=sigmahomes2026@gmail.com';

  const options = {
    hostname: 'kvdb.io',
    port: 443,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': data.length
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

testKvdb();
