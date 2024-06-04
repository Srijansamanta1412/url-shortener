const express=require('express');
const {generateNewShortURL,redirectToActualUrl}=require('../controllers/url')
const router = express.Router();

/*router.post('/',(req,res)=>{
    console.log("TEST");
    res.status(200).json({'message':'THIS IS TESTING DATA'})
})*/
router.post('/',generateNewShortURL)

router.get('/:id',redirectToActualUrl)

module.exports=router;