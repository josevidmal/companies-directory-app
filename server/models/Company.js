const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Company extends Model {}

Company.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        ConstDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        Type: {
            type: DataTypes.ENUM('Distribuidor', 'Mayorista', 'Usuario Final'),
            allowNull: false,
        },
        Comments: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'company'
    }
);

module.exports = Company;