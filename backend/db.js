const mongoose = require('mongoose');


const mongoURI = "mongodb://localhost:27017/buydreams";


const connectToMongo = async ()=>{
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to Mongo Successfully");

    }
    catch(error) {
        console.log("Mongo Connection error:",error);
    }
    
    
};

module.exports = connectToMongo; 