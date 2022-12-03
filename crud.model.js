const mongoose=require('mongoose')
const Schema=mongoose.Schema;
let userSchema=new Schema({
    id:{type:String},
    created_at:{type:String},
    updated_at:{type:String},
    first_name:{type:String},
    middle_name:{type:String},
    last_name:{type:String},
    country_code:{type:String},
    country_number:{type:Number},
    mobile_number:{type:Number},
    email:{type:String},
    address:{type:String},
    area_id:{type:Number}
},{collection:'user'});

module.exports=mongoose.model('userSchema',userSchema)