const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model { }

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        trip_budget: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        traveler_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Traveler',
                id: 'Traveler.id'
            },

            location_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Location',
                    id: 'Location.id'
                }
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trips'
    }
);
module.exports = Trips;