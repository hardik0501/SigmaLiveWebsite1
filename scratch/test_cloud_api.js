import https from 'https';

function createCloudObject() {
  const data = JSON.stringify({
    name: 'Sigma Homes Global Cloud Leads Storage',
    data: {
      leads: []
    }
  });

  const options = {
    hostname: 'api.restful-api.dev',
    port: 443,
    path: '/objects',
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

createCloudObject();
