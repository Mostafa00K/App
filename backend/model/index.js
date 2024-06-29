const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Post = require('../model/post');
const Employee = require('../model/employee');
const File = require('../model/fiche');
const Extra = require('../model/extra');

const db = {
  Sequelize,
  sequelize,
  Post: Post(sequelize, Sequelize),
  Employee: Employee(sequelize, Sequelize),
  File: File(sequelize, Sequelize),
  Extra: Extra(sequelize, Sequelize),
};

// Define associations here
db.Post.hasMany(db.Employee, { foreignKey: 'id_post' });
db.Employee.belongsTo(db.Post, { foreignKey: 'id_post' });

db.Employee.hasMany(db.File, { foreignKey: 'id_employee' });
db.File.belongsTo(db.Employee, { foreignKey: 'id_employee' });

db.Post.hasMany(db.File, { foreignKey: 'id_post' });
db.File.belongsTo(db.Post, { foreignKey: 'id_post' });

module.exports = db;
