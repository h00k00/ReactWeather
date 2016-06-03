var express = require('express');

// Create a new app

var app = express();
const PORT = process.env.PORT  || 3000;

app.use(function (req, res, next){
  if (req.protocol == 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Server is up and listening to port ' + PORT);
});

                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                     
                                                          
                  
