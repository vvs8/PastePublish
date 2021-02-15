const Post = require('../database/models/Post')




module.exports = async (req, res) => {
  const { page = 1 } = req.query; 
    
  try {
    const limit = 5;
    const posts = await Post.find().sort({createdAt: 'descending'})
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Post.countDocuments();
    
    res.render("index", {
      posts,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    console.error(err.message);
  }
}










