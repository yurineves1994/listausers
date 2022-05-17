const {
    DataTypes
} = require('sequelize')

const db = require('../db/conm')

const User = require('./User')

const Adress = db.define('Adress', {

    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }
})

User.hasMany(Adress)
Adress.belongsTo(User)

module.exports = Adress