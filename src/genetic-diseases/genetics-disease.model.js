const { DataTypes } = require('sequelize')
const { sequelize } = require('./../config/database/database')


const GeneticDiseases = sequelize.define('genetic_diseases', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cause: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mortalityRate: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'mortality_rate'
    },
    treatment: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    symptoms: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hasDisability: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        allowNull: false,
        defaultValue: 'active'
    },
    specie: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = GeneticDiseases 