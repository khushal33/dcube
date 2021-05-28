const mongoose = require('mongoose');
const Schema =mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    firstname:{
        type:String,
        default:''
    },
    lastname:{
        type:String,
        default:''
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:String,
        unique:true
    },
},{
    timestamps:true
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User' , userSchema);