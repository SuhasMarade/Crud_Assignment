// database config
require('dotenv').config();
const mongoose = require('mongoose');

// Asynchronous function to connect app to mongodb database system
const connectToDb = async () =>{
    await mongoose.connect(process.env.MONGO_URL).then((conn) =>{
        console.log(`Database connected to ${conn.connection.host}`);
    }).catch((error) => {
        console.log(`Error: ${error.message}`);
    });
}
// exporting database connection function
module.exports = connectToDb