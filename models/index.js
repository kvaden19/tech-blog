// Require the model files
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Set up associations
    // User has many Posts
    User.hasMany(Post, {
        foreignKey: 'author_id',
        onDelete: 'CASCADE',
    });

    // Post belongs to one User
    Post.belongsTo(User, {
        foreignKey: 'author_id',
    });

    // Post has many Comments
    Post.hasMany(Comment, {
        foreignKey: 'post_id',
        onDelete: 'CASCADE',
    });

    // Comment belongs to one Post
    Comment.belongsTo(Post, {
        foreignKey: 'post_id',
    });

    // User has many Comments
    User.hasMany(Comment, {
        foreignKey: 'author_id',
        onDelete: 'CASCADE',
    });

    // Comment belongs to one User
    Comment.belongsTo(User, {
        foreignKey: 'author_id',
    });

// Export models
module.exports = {
    User,
    Post,
    Comment
};