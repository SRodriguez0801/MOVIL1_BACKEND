const { DataTypes } = require('sequelize')
const sequelize = require('../bd/database')

const Producto = sequelize.define('Producto',{
    id_Producto:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },   
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    talla:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    cantidad:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
},
{
    tableName: 'tbl_producto',
    timestamps:false
}
)

module.exports = Producto