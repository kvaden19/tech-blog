const router = require('express').Router();
// require necessary Model(s)
const { Post, User } = require('../models');
// require withAuth

router.get('/', async (req, res) => {
    try {
        // Get all posts -- code is getting stuck here
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });
    
        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        res.render('homepage', { posts });
            // TODO: Also pass a boolean indicating whether user is logged in
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;