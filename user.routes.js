const express=require('express')
const app=express();
var ser=express.Router()
let userSchema=require('../model/crud.model');

ser.route('/').get((req,res)=>{
    userSchema.find((error,data)=>{
        if(error){
            return error;
        }
        else{
            res.json(data);
        }
    })
})

ser.route('/addi').post((req,res)=>{
    userSchema.create(req.body,(error,data)=>{
        if(error){
            return error;
        }
        else{
            res.json(data);
            console.log('Data inserted')
        }
    })
})

ser.route('/updi/:id').put((req,res)=>{
    userSchema.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>{
        if(error){
            return (error)
        }
        else{
            res.json(data)
            console.log('Data updated')
        }
    })
})

ser.route('/del/:id').delete((req,res)=>{
    userSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return (error)
        }
        else{
            res.status(200).json({ msg:data })
        }
    })
})

ser.route('/find/:id').get((req,res)=>{
    userSchema.findById(req.params.id,(error,data)=>{
        if(error){
            return (error)
        }
        else{
            res.json(data)
        }
    })
})

module.exports=ser