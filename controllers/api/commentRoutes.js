const router = require('express').Router();
const { Comment } = require('../../models');
// require auth

// api/comments endpoint

router.get('/:post_id', async (req, res) => {
    // get all comments for given post
    const commentData = await Comment.findAll({
        where: { post_id: req.params.post_id }
    });
    res.status(200).json(commentData);
    // error handling
});

// post a new comment
router.post('/', async (req, res) => {
    const newComment = await Comment.create({
        comment: req.body.comment,
        author_id: 3,
        post_id: 1
    });
    res.status(200).json(newComment);
    // error handling
});

module.exports = router;

