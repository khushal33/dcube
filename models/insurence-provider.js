const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const insurenceProviderSchema = new Schema({
    provider_name:{
        type:String,
        default:''
    },
    phone:{
        type:String,
        unique:true
    },
    city:{
        type:Array,
        default:''
    },
},{
    timestamps:true
});


module.exports = mongoose.model('InsurenceProvider' , insurenceProviderSchema);