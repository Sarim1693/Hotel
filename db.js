const mongoose=require('mongoose');
const mongoURL='mongodb://localhost:27017/hotels';
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connections;

module.exports=db;