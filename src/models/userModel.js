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
        default:NaN
    },codeUserToChangeUsername:{
        type:Number,
        default:NaN
    },codeUserToChangePassword:{
        type:Number,
        default:NaN
    },codeUserToChangeEmail:{
        type:Number,
        default:NaN
    },temporaryHoldOfData:{
        type:String,
        default:""
    },
    userIP:{
        type:String,
        default:"NONE"

    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;