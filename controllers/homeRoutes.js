const router = require('express').Router();
// require necessary Models
// require withAuth

router.get('/', async (req, res) => {
    try {
        // Get all posts
        const postData = await Post.findAll();
    
        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        // res.render('homepage', { 
        //     posts, 
        //     // logged_in: req.session.logged_in 
        // });
    } catch (err) {
        res.status(500).json(err);
    }
});