const express = require("express");
const { validationResult } = require("express-validator");

const router = express.Router();

const User = require("../models/users.model");

const getAllusers = async (req, res) => {
  try {
    const per_page = req.query.per_page || 2;
    const page = req.query.page || 1;
    const skip = page < 0 ? 0 : (page - 1) * per_page;

    const users = await User.find().skip(skip).limit(per_page);

    if (!users) return res.status(400).json({ msg: "No users found" });
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};

const createUser = async (req, res) => {
  try {
    const users = await User.create({
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
    });

    if (!users) return res.status(400).json({ msg: "users not created" });
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};
module.exports = {
  getAllusers,
  createUser
};
