const Post = require('../database/models/Post')
var QuillDeltaToHtmlConverter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;

module.exports = async (req, res) => {
    const post = await Post.findById(req.params.id).exec();   
    var temp = JSON.parse(post.content);
    var deltaOps = [];
    for (i in temp.ops) {
        deltaOps.push(temp.ops[i]);
    }

    var cfg = {};
    var converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);
    var html = converter.convert();

    console.log("test" + deltaOps);   
   
    res.render("post", {
        post, 
        html
    });
    
}



  
