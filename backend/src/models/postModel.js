import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", required: true 
    },

    tags: [{
         type: String 
        }],
    
    likes: [
        { 
            type: mongoose.Schema.Types.ObjectId, ref: "User" 
        }
    ],

    comments: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "Comment" 
        }
    ],

    isPublished: {
         type: Boolean,
        default: false 
    },
  },{ timestamps: true });

export default mongoose.model("Post", postSchema);
