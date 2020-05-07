const User = require('../models/user')
const Avail = require('../models/availableDays')
const Activity = require('../models/activity')
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

module.exports = {
    index,
    signup,
    showUser,
    showPlan,
    newPlan,
    newActivity,
    editUser,
    editSchedule,
    deleteSchedule,
    showActivity,
    editActivity,
    deleteActivity, 
    login
}

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET
  )
}

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({token})
  } catch(err){
    res.status(400).json(err)
  }
}

async function login(req,res) {
  try{
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if(isMatch) {
        const token = createJWT(user);
        res.json({token});
      }else{
        return res.status(401).json({err: 'bad credentials'})
      }
    });
  }catch (err) {
    return res.status(401).json(err)
  }
}

function index(req, res){
    res.render('index')
}

function newUser(req, res){
    console.log("hello")
    User.create(req.body)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        if(err) {
            console.log('create error: ' + err);
        }
        res.sendStatus(500)
    })
}

function showUser(req, res){
    User.findById(req.params.id)
    .then(result => {
        res.json(result);
    })
}

function showPlan(req, res){
    User.find({name:req.params.id})
    //   .populate('scheduleId') 
    //   .populate('activityId')
      .exec((err, user)=> {
        if (err) {
        console.log("index error:" + err);
        res.sendStatus(500);
    }
        res.json(user);
    });
}

function newPlan(req, res){
    console.log("hello")
    Avail.create(req.body)
    .then(sched => {
        res.status(200).json(sched)
    })
    .catch(err => {
        if(err) {
            console.log('create error: ' + err);
        }
        res.sendStatus(500)
    })
}

function newActivity(req, res){
    console.log("hello")
    Activity.create(req.body)
    .then(activ => {
        res.status(200).json(activ)
    })
    .catch(err => {
        if(err) {
            console.log('create error: ' + err);
        }
        res.sendStatus(500)
    })
}

function editUser(req,res) {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        if (err) {
        console.log("update error: " + err);
      }
        res.sendStatus(500)
    });
  }; 

  function editSchedule(req,res) {
    Avail.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(sched => {
        res.status(200).json(sched);
    })
    .catch(err => {
        if (err) {
        console.log("update error: " + err);
      }
        res.sendStatus(500)
    });
  }; 

  function deleteSchedule(req, res) {
    Avail.findByIdAndRemove(req.params.id)
    .then(sched => {
      res.status(200).json(sched);
    })
    .catch(err => {
      if (err) {
        console.log("delete error: " + err);
      }
      res.sendStatus(500)
    });
    res.send('Schedule deleted')
  }; 

  function showActivity(req, res){
    Activity.find({name:req.params.id})
      .exec((err, activ)=> {
        if (err) {
        console.log("index error:" + err);
        res.sendStatus(500);
    }
        res.json(activ);
    });
}

  function editActivity(req,res) {
    Activity.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(activity => {
        res.status(200).json(activity);
    })
    .catch(err => {
        if (err) {
        console.log("update error: " + err);
      }
        res.sendStatus(500)
    });
  }; 

  function deleteActivity(req, res) {
    Activity.findByIdAndRemove(req.params.id)
    .then(activ => {
      res.status(200).json(activ);
    })
    .catch(err => {
      if (err) {
        console.log("delete error: " + err);
      }
      res.sendStatus(500)
    });
    res.send('Activity deleted')
  }; 


  function createJWT(user) {
    return jwt.sign(
      {user},
      SECRET,
      {expiresIn: '24h'}
    )
  }