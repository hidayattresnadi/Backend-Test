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
    urlEndpoint: {
      type: DataTypes.TEXT,
      allowNull:false,
      unique: {
        msg:'urlEndpoint is already exist'
      },
      validate:{
        notNull: {
          msg: 'urlEndpoint required'
        },
        notEmpty: {
          msg: 'urlEndpoint required'
        }
      }
    },
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
    birthdayDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'birthday date required'
        },
        notEmpty: {
          msg: 'birthday date required'
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
    whatsappNumber: {
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
    homeTown: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'home town required'
        },
        notEmpty: {
          msg: 'home town required'
        }
      }
    },
    lastEducation: {
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
    photo: DataTypes.ARRAY(TEXT)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};