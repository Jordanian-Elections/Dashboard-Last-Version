// // // // routes/statsRoutes.js
// // // const express = require('express');
// // // const router = express.Router();
// // // const statsController = require('../controllers/statsController');

// // // // Define routes
// // // router.get('/', statsController.getStats);
// // // router.get('/recent-elections', statsController.getRecentElections);
// // // router.post('/elections', statsController.addElection);
// // // router.get('/elections/upcoming', statsController.getUpcomingElection);

// // // module.exports = router;

// // // routes/statsRoutes.js
// // const express = require('express');
// // const router = express.Router();
// // const statsController = require('../controllers/statsController');

// // // Define routes
// // router.get('/', statsController.getStats);
// // router.get('/recent-elections', statsController.getRecentElections);
// // router.post('/elections', statsController.addElection);
// // router.get('/elections/upcoming', statsController.getUpcomingElection);

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const statsController = require('../controllers/statsController'); // Adjust the path to your controller

// // Route to get statistics
// router.get('/stats', statsController.getStats);

// // Route to get recent elections
// router.get('/recent-elections', statsController.getRecentElections);

// // Route to add a new election
// router.post('/elections', statsController.addElection);

// // Route to get the upcoming election
// router.get('/upcoming-election', statsController.getUpcomingElection);

// // Route to get all election times
// router.get('/election-times', statsController.getElectionTimes);

// // Route to add or update an election time
// router.post('/election-time', statsController.addOrUpdateElectionTime);

// // Route to delete an election time
// router.delete('/election-time/:id', statsController.deleteElectionTime);

const express = require("express");
const router = express.Router();
const statsController = require("../controllers/statsController");

// Route to get statistics
router.get("/stats", statsController.getStats);

// Route to get recent elections
router.get("/recent-elections", statsController.getRecentElections);

// Route to add a new election time
router.post("/election-times", statsController.addElectionTime);

// Route to update an existing election time
router.put("/election-times/:id", statsController.updateElectionTime);

// Route to delete an election time
router.delete("/election-times/:id", statsController.deleteElectionTime);

// Route to get the upcoming election
router.get("/upcoming-election", statsController.getUpcomingElection);

// Route to get all election times
router.get("/election-times", statsController.getElectionTimes);
module.exports = router;
