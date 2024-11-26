const { DataTypes } = require('sequelize')
const sequelize = require('../bd/database')

const Calzado = sequelize.define('Calzado',{
    id_calzado:{
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
    tableName: 'tbl_Calzado',
    timestamps:false
}
)

module.exports = Calzado;
