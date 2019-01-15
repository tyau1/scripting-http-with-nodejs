var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};

var option = url;
var url = 'https://sytantris.github.io/http-examples/step1.html'

function getAndPrintHTML(options) {
    https.get(url, function (response) {
        if (response.statusCode != 200) {
            throw new Error('Request Failed with Status Code' + response.statusCode);
            return;
        }

        response.setEncoding('utf8');
        var entireText = '';
        response.on('data', function (chunk) {
            entireText += chunk;
            console.log('Chunk Received. Length:', chunk.length);
        });

        response.on('end', function () {
            console.log(entireText);
            console.log('Response stream complete.');
        });
    });
}

getAndPrintHTML(url);