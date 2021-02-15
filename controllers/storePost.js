const Post = require('../database/models/Post')
const User = require('../database/models/User')


module.exports = (req, res) => {

    var A = new Post({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content, 
        username: req.session.userId,
        aname: req.session.fname + " " + req.session.lname,
        name: req.session.username
        
    })
   
    
    A.save(
        (error, post) => {
            res.redirect("/");
        }    
    );
       
    User.findByIdAndUpdate(
        req.session.userId, 
        {$push: {posts: A._id}} 
    ).exec(); 
    
    var a =  A.content
    console.log("A: " + a);
    
    
}         

    

/*
            User.findById(req.session.userId, function (err, res) {
                var m = res.username
                
                console.log("User " + m);
                
            });
        

            function gtp(){
                return User.findById(req.session.userId )
                    
                    .populate('posts').exec((err, user) => {
                     
                    console.log("Populated User " + user);
                  })
              }
              
            
            gtp();
            
       */
    
    
    
    
    
    
    
