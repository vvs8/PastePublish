const User = require('../database/models/User')



module.exports = async (req, res) => {
    
    const user = await User.findById(req.params.id).populate('posts').exec()   
    const post = user.posts
    
    try {
        const posts = post.reverse()
        const username = user.username

        res.render("user", {
            posts,
            username
        });

    } catch (err) {
        console.error(err.message);
      }
}
    
  