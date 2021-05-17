const router = require('express').Router();
// require necessary Models
// require withAuth

// router.get('/', async (req, res) => {
//     try {
//         // Get all posts
//         const postData = await Post.findAll();
    
//         // Serialize data so the template can read it
//         const posts = postData.map((post) => post.get({ plain: true }));
    
//         // Pass serialized data and session flag into template
//         res.render('homepage');
//             //'homepage', { 
//             // posts, 
//             // logged_in: req.session.logged_in });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get('/', async (req, res) => {
    // Add a comment describing the purpose of the render method
    // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
    res.render('homepage');
});

module.exports = router;