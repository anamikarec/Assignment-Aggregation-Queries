const express = require("express");
const { validationResult } = require("express-validator");
const {
 getAllTweets,
 createTweet,
 top10UsersHaveHighestAverageLikes,
 groupByTags
} = require("../controllers/tweets.controller");

const router = express.Router();
router.get("/", getAllTweets);
router.get("/topUsers", top10UsersHaveHighestAverageLikes);
router.get("/groupByTags", groupByTags);
router.post("/", createTweet);

module.exports = router;
