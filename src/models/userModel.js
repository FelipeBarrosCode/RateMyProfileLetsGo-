import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    codeUser:{
        type:Number,
        default: 0,
    },codeUserToChangeUsername:{
        type:Number,
        default: 0,
        
    },codeUserToChangePassword:{
        type:Number,
        default: 0,
        
    },codeUserToChangeEmail:{
        type:Number,
        default: 0,
       
    },temporaryHoldOfData:{
        type:String,
        default:"",
    },
    userIP:{
        type:String,
        default:"NONE"

    },
    userAccountsSearch:{
        type:Array,
        default:[],
        required:false

    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;