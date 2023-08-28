const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
  sequelize.define('Ejercicio',{
    id:{
      type : DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    problema:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    respuesta:{
      type: DataTypes.STRING,
      allowNull: false
    },
    curso:{
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}