const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const carPolicySchema = new Schema({
    name:{
        type:String,
        default:''
    },
    varient:{
        type:String,
        default:''
    },
    RTO_Code:{
        type:String,
        default:''
    },
    new_Car:{
        type:Boolean,
        default:false
    },
    renewal:{
        type:String,
        default:''
    },
    previous_policy_type:{
        type:String,
        default:''
    },
},{
    timestamps:true
});


module.exports = mongoose.model('CarPolicy' , carPolicySchema);