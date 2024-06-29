module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      id_post: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nom_post: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prime_variable: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      salaire_base: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    }, {
      tableName: 'posts',
      timestamps: false,
    });
  
    return Post;
  };
  