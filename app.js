const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// console.log(req.url, req.method, req.headers);
	// process.exit();
	const url = req.url;
	const method = req.method;
	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Entered message</title></head>');
		res.write(
			'<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></input></form></body>'
		);
		res.write('</html>');
		return res.end();
	}
	if (url === '/message' && method === 'POST') {
		fs.writeFileSync('message.txt', 'DUMMY');
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>The form</title></head>');
	res.write('</html>');
	res.end();
});

server.listen(3000);
