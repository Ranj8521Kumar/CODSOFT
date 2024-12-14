const express = require('express');
const Job = require('../models/Job');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
  const jobs = await Job.find().populate('postedBy', 'name');
  res.json(jobs);
});

router.post('/', auth('employer'), async (req, res) => {
  const job = new Job({ ...req.body, postedBy: req.user.id });
  await job.save();
  res.status(201).json(job);
});

module.exports = router;
