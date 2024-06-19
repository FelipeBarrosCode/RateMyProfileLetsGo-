
import mongoose from "mongoose";
import searchable from 'mongoose-regex-search';


const postSchema = new mongoose.Schema({

    profileName:{
        type:String,
        unique:false,
        required:true
    
    },
    realLifeName:{
        type:String,
        unique:false,
        required:false

    },platformThatProfileIsIn:{
        type:String,
        unique:false,
        required:true

    },
    age:{
        type:Number,
        required:true
    },
    chanceOfFake:{
        type:Number,
        required:true,
        unique:false,

    },chanceOfBot:{
        type:Number,
        unique:false,
        required:true,
        unique:false,


    },listOfVoterUserName:{
        type:Map,
        required:false
    },commentsAboutProfile:{
        type:Array,
        required:true,
        default: undefined


    },profilePurpouse:{
        type:String,
        required:false,
        default:"None"
    },politicalPosition:{
        type:Number,
        required:false,
        default:50
    },profileLinkURL:{
        type:String,
        required:true

    }





})


postSchema.plugin(searchable)


const PostConf = mongoose.models.posts || mongoose.model("posts", postSchema);

export default PostConf;

