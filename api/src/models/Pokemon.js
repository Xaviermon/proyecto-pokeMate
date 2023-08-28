const { DataTypes } = require("sequelize");
module.exports = (sequelize) =>{
  sequelize.define('Pokemon',
  {
    id:{
      type : DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    respuesta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pokemon :{
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}