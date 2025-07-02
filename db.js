const mongoose=require('mongoose');
require('dotenv').config();
// const mongoURL= process.env.DB_URL_LOCAL;
const mongoURL=process.env.DB_URL;
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connections;

module.exports=db;