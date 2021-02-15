
const User = require('./User')
const mongoose = require('mongoose');
const session = require('express-session');

 
const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: Object,
    aname: String,
    name: String,

    

    username: { 
        type: mongoose.SchemaTypes.ObjectId, 
        ref: "User"},
    
    createdAt: {
        type: Date,
        default: new Date()
    }
});
 
const Post = mongoose.model('Post', PostSchema, 'posts');

 
module.exports = Post;