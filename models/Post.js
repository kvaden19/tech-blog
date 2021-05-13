// Require Model and DataTypes from Sequelize package
const { Model, DataTypes } = require('sequelize');
// Set up a variable to represent the already-configured connection
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    // Set up Post with id, title, body, and author attributes
    // Sequelize will create a timestamp entry automatically (see configs)
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
    // Configurations
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;