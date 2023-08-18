const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    username : {
        type: String,
        required:[true,"Please enter a Username"],
        unique: true
    },
    email:{
        type:String,
        required:[true,'please provide an Email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Password is Required']

    },
    profilePic:{
        type:String,
        default:"",
    },

    
}
,{timestamps:true});

module.exports = mongoose.model("User", UserSchema);