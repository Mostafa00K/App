const db = require('../model/index');
const { Post, Employee, File, Extra } = db;

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Similarly, you can create controllers for Employee, File, and Extra
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getEmployee = async (req, res) => {
  try {
  const contact = await Employee.findByPk(req.params.id);
  if (contact) {
  res.status(200).json(contact);
  } else {
  res.status(404).json({ error:Contact});
  }
  } catch (err) {
  res.status(500).json(err);
  }
  };

exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllFiles = async (req, res) => {
  try {
    const files = await File.findAll();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getPost = async (req, res) => {
  try {
  const contact = await Post.findByPk(req.params.id);
  if (contact) {
  res.status(200).json(contact);
  } else {
  res.status(404).json({ error:Contact});
  }
  } catch (err) {
  res.status(500).json(err);
  }
  };
exports.createFile = async (req, res) => {
  try {
    const file = await File.create(req.body);
    res.json(file);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllExtras = async (req, res) => {
  try {
    const extras = await Extra.findAll();
    res.json(extras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createExtra = async (req, res) => {
  try {
    const extra = await Extra.create(req.body);
    res.json(extra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
