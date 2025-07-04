const mongoose=require('mongoose');
const menuItemSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:["sweet", 'sour','spicy'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    num_sales:{
        type:Number,
        default:0
    },
})
const MenuItem=mongoose.model('MenuItem',menuItemSchema );
module.exports=MenuItem;