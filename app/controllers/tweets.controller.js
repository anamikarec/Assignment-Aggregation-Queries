const express = require("express");
const { validationResult } = require("express-validator");

const router = express.Router();

const Tweet = require("../models/tweets.model");

const getAllTweets = async (req, res) => {
  try {
    const per_page = req.query.per_page || 2;
    const page = req.query.page || 1;
    const skip = page < 0 ? 0 : (page - 1) * per_page;

    const tweets = await Tweet.find().skip(skip).limit(per_page);

    if (!tweets) return res.status(400).json({ msg: "No tweets found" });
    return res.status(200).json(tweets);
  } catch (err) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};

const createTweet = async (req, res) => {
  try {
    const tweets = await Tweet.create({
      text: req.body.text,
      tags: req.body.tags,
      author_id: req.body.author_id,
      no_of_likes: req.body.no_of_likes,
    });

    if (!tweets) return res.status(400).json({ msg: "tweets not created" });
    return res.status(200).json(tweets);
  } catch (err) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};

const top10UsersHaveHighestAverageLikes = async (req, res) => {
  try {
    const tweets = await Tweet.aggregate([
      { $sort: { no_of_likes: -1 } },
      { $limit: 5 },
      { $group: { _id: "$author_id", avg_like: { $avg: "$no_of_likes" } } },
    ]);
    return res.status(200).json(tweets);
  } catch (e) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};
const groupByTags = async (req, res) => {
  try {
    const tweets = await Tweet.aggregate([
        {$group : {_id : "$text"}}
    ])
    return res.status(200).json(tweets);
  } catch (e) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};

module.exports = {
  getAllTweets,
  createTweet,
  top10UsersHaveHighestAverageLikes,
  groupByTags,
};
