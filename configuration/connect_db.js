const mongoose = require('mongoose');
async function dbConnect() {
    try {
        const URL='mongodb+srv://srijan_database_url:6291894552@cluster0.l2oined.mongodb.net/'
        await mongoose.connect(URL)
        console.log("Connect To Database Succefully")
    }
    catch(e){
        console.log(e);
        console.log("Couldn't connect to Database");
    }
}

module.exports = dbConnect;