const express = require('express');
const { getAllusers, createUser} = require('../controllers/users.controller');

const router= express.Router();

router.get("/", getAllusers)

router.post("/", createUser)

module.exports = router;