'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonagemLore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PersonagemLore.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PersonagemLore',
  });
  return PersonagemLore;
};