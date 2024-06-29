

module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
    id_employee: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },
    nom_complet: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date_embauche: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    situation_famililal: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date_naissance: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    compte_bancaire: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      tableName: 'employees',
      timestamps: false,
    });
  
    return Employee;
  };
  