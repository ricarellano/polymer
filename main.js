console.log("hola");
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
    res.sendFile('views/index.html', {
        root: __dirname
    });
})

















app.listen(process.env.port || 3000, function() {
    console.log('listening on port 3k')
})
