const express = require('express');
const router = express.Router();
const { issueStore } = require('../models');

router.get('/', function(req, res) {
  const openIssues = issueStore.getAllOpen();
  const openHighIssuesCount = openIssues.filter(issue => issue.severity === 'High').length;
  res.render('dashboard', {
    openIssuesCount: openIssues.length,
    openHighIssuesPerc: (openIssues.length > 0 ? openHighIssuesCount / openIssues.length : 0)
  });
});

module.exports = router;
