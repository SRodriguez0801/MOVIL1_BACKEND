const { DataTypes } = require('sequelize')
const sequelize = require('../bd/database')

const Categoria = sequelize.define('Categoria',{
    id_categoria:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },   
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'tbl_categoria',
    timestamps:false
}
)

module.exports = Categoria