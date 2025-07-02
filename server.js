const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.PORT || 3000;

const personRoutes=require('./routes/personRoutes');
app.use('/person', personRoutes);
const menuRoutes=require('./routes/menuRoutes');
app.use('/menu', menuRoutes);
app.listen(3000,()=>{
    console.log("Server is running at port 3000")
});