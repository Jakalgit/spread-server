const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const Review = sequelize.define('review', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number: {type: DataTypes.STRING, unique: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false}
})

module.exports = {
    Review
}