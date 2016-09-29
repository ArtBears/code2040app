const http  = require ('http');
const querystring = require ('querystring');
const fs    = require ('fs');

var data2040  = JSON.stringify({
  "token": "0217347fbdb52f16ea562bd939c1620a",
  "github": "https://github.com/ArtBears/code2040app"
});

var options = {
  host: 'challenge.code2040.org',
  port: '80',
  path: '/api/register',
  method: 'POST',
  headers: {
    'Content-Type': 'text/json',
    'Content-Length': Buffer.byteLength(data2040)
  },
}

var req = http.request(options, (res) => {
  console.log(data2040);
  console.log("Status: " + res.statusCode);
  console.log("Headers: " + JSON.stringify(res.headers));
  res.setEncoding('utf-8');
  
  res.on('data', (chunk) => {
    console.log("Response: " + chunk);
  });
  
  res.on('end', () => {
    console.log('All Done!');
  });

  res.on('error', (e) => {
    console.log("An error occured: " + e.message )
  });
});

req.write(data2040);
req.end();