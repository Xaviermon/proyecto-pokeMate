const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define('Alternativa', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		alt1: {
			type: DataTypes.STRING,
			allowNull: false
		},
		alt2: {
			type: DataTypes.STRING,
			allowNull: false
		},
		alt3: {
			type: DataTypes.STRING,
			allowNull: false
		},
		alt4: {
			type: DataTypes.STRING,
			allowNull: false
		},
		alt5: {
			type: DataTypes.STRING,
			allowNull: false
		}
	})
}
