var express = require('express');
var router = express.Router();
var cors = require('../cors');
var authenticate = require('../authentication');
var User = require('../../models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('policies/login-register', { title: 'Compare & Buy Insurance Polcies' });
});

router.post('/login', cors.corswithOptions, (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    if (err)
      return next(err);

    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: false, status: 'Login Unsuccessful!', err: info});
    }
    req.logIn(user, (err) => {
      if (err) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, status: 'Login Unsuccessful!', err: 'Could not log in user!'});          
      }

      var token = authenticate.getToken({_id: req.user._id});
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: 'Login Successful!', token: token ,admin:user.admin});
     
    }); 
  }) (req, res, next);
});

router.route('/register')
.options(cors.corswithOptions,(req,res)=>{res.sendStatus(200);})
.post(cors.corswithOptions,(req,res,next)=>{
  var newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function(err, user) {
    if(err){
      res.statusCode = 500;
      res.setHeader('Content-Type','application/json');
      res.json({err:err});
    }
    else{
      if(req.body.firstname){
          user.firstname = req.body.firstname;
      }
      if(req.body.lastname){
          user.lastname = req.body.lastname;
      }
      if(req.body.email){
        user.email = req.body.email;
      }
      user.save((err,user)=>{
        if(err){
          res.statusCode = 500;
          res.setHeader('Content-Type','application/json');
          res.json({err:err});
          return;
        }
        passport.authenticate('local')(req,res,()=>{
          res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json({sucess:true,status:'Regestration Sucessful!'});
      });
      
      });
    }
  });
});


module.exports = router;