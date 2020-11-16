require('dotenv').config()
var jwt = require('jsonwebtoken');
var secret = process.env.secret

function verifyToken(req, res, next) {
  // console.log(req.cookies)
  var token=req.cookies.authorization
  // if(req.headers.cookie)
  //  token = req.headers.cookie.split('=')[1];
  // console.log(req.cookie);

  if (!token) 
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token,'supersecret', function(err, decoded) {
    if (err){
      // console.log(err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

    }
    
      
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;