const { urlModel } = require('../models/url');
const {isValidURL}=require('../utils/isValidUrl')
async function generateNewShortURL(req, res) {
    try {
        console.log(req.body);
        let url = req.body.url;
        if(!isValidURL(req.body.url)){
            return res.status(404).json({"message":"Not a Valid URL"});
        }
        const { nanoid } = await import('nanoid');
        const shortId = nanoid(10);
        console.log(shortId);
        var newUrlData = new urlModel({
            shortId: shortId,
            redirectURL: url,
        });
        await newUrlData.save(newUrlData);
        return res.status(200).json({ "message": "Data Added Successfully" });
        
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Unable to Add Data" });
    }
};

async function redirectToActualUrl(req, res) {
    console.log(req.params.id);
    const redirectUrlData = await urlModel.findOneAndUpdate({
        shortId: req.params.id
    }, {
        $push: { visitHistory: [{ timestamp: Date.now() }] }
    },{
        new:true,fields:{redirectURL:1}
    })
    console.log(redirectUrlData);
    return res.redirect(redirectUrlData.redirectURL);
   // res.status(200).json({ "message": redirectUrlData.redirectURL });
};

module.exports = {
    generateNewShortURL,
    redirectToActualUrl
}