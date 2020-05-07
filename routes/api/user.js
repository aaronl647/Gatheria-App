
var express = require('express');
var router = express.Router();
var userCtrl = require('../../controllers/user');



// router.get('/', userCtrl.index) // home page 
// router.post('/signup', mainCtrl.signup)
router.get('/:id', userCtrl.showUser) // Show a user 
router.put('/edit/:id', userCtrl.editUser) // Update user  
router.put('/plan/edit/:id', userCtrl.editSchedule) // Edit ongoing plans 
router.get('/ongoing', userCtrl.showPlan) // show ongoing plans 

router.post('/create', userCtrl.newPlan) // Create a new Schedule
router.post('/create/activity', userCtrl.newActivity) // Create a new activity  

router.delete('/plan/edit/:id', userCtrl.deleteSchedule) // Deletes schedule 

router.get('/activity/:id', userCtrl.showActivity) // show ongoing activities 
router.delete('/activity/edit/:id', userCtrl.deleteActivity) // Deletes activity
router.put('/activity/edit/:id', userCtrl.editActivity) // edits ongoing activites

module.exports = router;
