const express = require('express');
const router = express.Router();
const { issueStore } = require('../models');

router.get('/', function(req, res) {
  const openIssues = issueStore.getAllOpen();
  const openHighIssuesCount = openIssues.filter(issue => issue.severity === 'High').length;
  const openMediumIssuesCount = openIssues.filter(issue => issue.severity === 'Medium').length;
  const openLowIssuesCount = openIssues.filter(issue => issue.severity === 'Low').length;
  res.render('dashboard', {
    openIssuesCount: openIssues.length,
    openHighIssuesPerc: (openIssues.length > 0 ? openHighIssuesCount / openIssues.length : 0),
    openMediumIssuesPerc: (openIssues.length > 0 ? openMediumIssuesCount / openIssues.length : 0),
    openLowIssuesPerc: (openIssues.length > 0 ? openLowIssuesCount / openIssues.length : 0),
  });
});

module.exports = router;
