import { Starfleet } from '../models/starfleet.js'

function index(req, res) {
  Starfleet.find({})
  .then(starfleets => {
    console.log(starfleets)
    res.render('starfleets/index', {
      title: "Space Explorer's Starfleets",
      starfleets,
      user: req.user ? req.user : null 
    })
  })
}

function newStarfleet(req, res){
  res.render('starfleets/new', {
    title: "Create Your Own Starfleet",
    user: req.user ? req.user : null 
  })
}

export {
  index,
  newStarfleet as new
}