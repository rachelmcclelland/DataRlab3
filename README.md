"# DataRlab3" 
Express is a minimal and flexible Node.js web application framework
that provides a robust set of features to develop web and mobile
applications. It facilitates the rapid development of Node based
Web applications.

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
    