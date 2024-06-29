
module.exports = (sequelize, DataTypes) => {
    const Extra = sequelize.define('Extra', {
      id_extra: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      base: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    quantite: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    gain: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    retenue: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    rubrique_paie: {
        type: DataTypes.STRING,
        allowNull: true,
    }
    }, {
      tableName: 'extras',
      timestamps: false,
    });
  
    return Extra;
  };
  