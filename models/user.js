'use strict';
const {
  Model, TEXT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'name required'
        },
        notEmpty: {
          msg: 'name required'
        }
      }
    },
    birthDate:{
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'date required'
        },
        notEmpty: {
          msg: 'date required'
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'age required'
        },
        notEmpty: {
          msg: 'age required'
        }
      }
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'whatsappNumber required'
        },
        notEmpty: {
          msg: 'whatsappNumber required'
        }
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'city required'
        },
        notEmpty: {
          msg: 'city required'
        }
      }
    },
    education: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'last education required'
        },
        notEmpty: {
          msg: 'last education required'
        }
      }
    },
    image: DataTypes.ARRAY(TEXT)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};