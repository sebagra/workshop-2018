const express = require('express');
const router = express.Router();
const { issueStore } = require('../models');

router.get('/', function(req, res) {
  res.render('dashboard', {
    openIssuesCount: issueStore.getAllOpen().length
  });
});

module.exports = router;
