var express = require('express');
var router = express.Router();
const multer = require('multer');
const uploader = multer({});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
function checkCountry(req,res,next){
 if (req.body.country == "North Korea"){
  throw "You cannot sign up from North Korea."
 }
next();
}
function checkName(req,res,next){
  if (req.body.name == "Arman"){
   throw "You cannot sign up with that name."
  }
 next();
 }
router.post("/",uploader.single("photo"),(req,res)=>{

  var name = req.body.name;
  var lname = req.body.lname;
  var country = req.body.country;
  console.log(`${name} ${lname} is trying to sign up from ${country}`)
res.end("Done")
})

router.use((error , req, res, next)=>{
 res.end(error);
})
module.exports = router;
