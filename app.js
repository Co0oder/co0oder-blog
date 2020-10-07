let app = require('./server');
port = process.env.PORT || 3000;
app.listen(port,() => console.log('up and running 🚀'));