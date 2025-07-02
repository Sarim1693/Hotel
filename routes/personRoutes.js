const express=require('express');
const person = require('../models/person');
const router=express.Router();
const personModel=require('./../models/person');
router.post('/', async(req, res)=>{
    try{
        const data=req.body;
        const newPerson=new person(data);
        const response=await newPerson.save();
        console.log("Data saved succefully");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal Server error"})
    }
})
router.get('/',async (req, res)=>{
    try{
        const data=await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
         console.log(err);
        res.status(500).json({error:"internal Server error"})
    }
})
router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;

    if (workType === 'chef' || workType === 'manager' || workType === 'waiter') {
      const response = await person.find({ work: workType });
      console.log('Response fetched');
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: 'Invalid work type' });  // ✅ Fixed
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.put('/:id', async(req, res)=>{
    try{
        const personId=req.params.id;
    const updatedData=req.bpdy;
    const response=await person.findByIdAndUpdate(personId, updatedData,{
        new:true,
        runValidators:true,
    })
    if(!response){
        return res.status(404).json({error: "person not found"});
    }
    console.log('data updated');
    req.status(200).josn(response);
    }
    catch(err){
         console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
    }
})
module.exports=router;