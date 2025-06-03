const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        'Articulo',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: DataTypes.CHAR(36),
                allowNull: false,
            },
            marca: {
                type: DataTypes.CHAR(36),
                allowNull: false,
            },
            estado: {
                type: DataTypes.ENUM('activo', 'inactivo'),
                defaultValue: 'activo'
            },
            fecha_modificacion: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            }
        },
        {
            timestamps: false 
        }
    )
}