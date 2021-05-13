// Require Model and DataTypes from Sequelize package
const { Model, DataTypes } = require('sequelize');
// Set up a variable to represent the already-configured connection
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    // Set up Comment with id, comment, and author attributes
    // Sequelize will create a timestamp entry automatically (see configs)
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
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
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
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
        modelName: 'comment'
    }
);

module.exports = Comment;