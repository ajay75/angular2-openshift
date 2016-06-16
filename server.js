//  OpenShift sample Node application
var express = require('express');
	
var app = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

	
app.get('/', function (req, res, next) {
    res.render('index.html');
});

app.use(express.static(__dirname));

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip, function () {
	console.log('Server running on http://%s:%s', ip, port);
});