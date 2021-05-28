const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const enquirySchema = new Schema({
    name:{
        type:String,
        default:''
    },
    phone:{
        type:String,
        unique:true
    },
    city:{
        type:String,
        default:''
    },
},{
    timestamps:true
});


module.exports = mongoose.model('Enqiry' , enquirySchema);