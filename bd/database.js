const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('ihri','root','Admin',{
        host:'localhost',
        dialect:'mysql'
})

module.exports=sequelize;