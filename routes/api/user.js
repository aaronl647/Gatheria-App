
var express = require('express');
var router = express.Router();
var userCtrl = require('../../controllers/user');

router.get('/', userCtrl.index) // home page 
router.post('/signup', userCtrl.signup) // Create a new user 
router.post('/login', userCtrl.login) //User login
router.get('/:id', userCtrl.showUser) // Show a user 
router.put('/edit/:id', userCtrl.editUser) // Update user  
router.put('/plan/edit/:id', userCtrl.editSchedule) // Edit ongoing plans 
router.get('/plan/:id', userCtrl.showPlan) // show ongoing plans 
router.post('/plan/newplan', userCtrl.newPlan) // Create a new Schedule 
router.delete('/plan/edit/:id', userCtrl.deleteSchedule) // Deletes schedule 
router.post('/plan/newplan/activity', userCtrl.newActivity) // Create a new activity 
router.get('/activity/:id', userCtrl.showActivity) // show ongoing activities 
router.delete('/activity/edit/:id', userCtrl.deleteActivity) // Deletes activity
router.put('/activity/edit/:id', userCtrl.editActivity) // edits ongoing activites

module.exports = router;
