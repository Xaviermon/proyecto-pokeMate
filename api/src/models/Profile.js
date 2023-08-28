const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Profile',
  {
    id:{
      type : DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nombre:{
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido:{
      type: DataTypes.STRING,
      allowNull: false
    },
    grado:{
      type: DataTypes.STRING,
      allowNull: false
    },
    usuario:{
      type: DataTypes.STRING,
      allowNull: false
    },
    celular:{
      type: DataTypes.STRING,
      allowNull: false
    },
    experiencia:{
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    level:{
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    contraseña:{
      type: DataTypes.STRING,
      allowNull: false
    },
    pokemon:{
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}