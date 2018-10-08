var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.send('Hello World');
    })

app.get('/hello/:name', function (req, res) {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
    })

app.get('/test', function(req, res) {
    console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
    });
    

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
    })

app.post('/name', function (req, res) {
    console.log("post method");
    console.log(req.body.firstname);
    res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
    })
        
app.get('/name', function (req, res) {
    console.log("get method");
    console.log(req.query.lastname);
    res.send('Hello ' + " " + req.query.firstname + " " + req.query.lastname);
    })
    
app.use("/api/posts", (req, res, next) => {
    const posts = [
        {
        id: "fadf12421l",
        title: "First server-side post",
        content: "This is coming from the server"
        },
        {
        id: "ksajflaj132",
        title: "Second server-side post",
        content: "This is coming from the server!"
        }
        ];
        res.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: posts
        });
        });
            