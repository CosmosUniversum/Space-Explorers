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

function newStarfleet(req, res) {
  res.render('starfleets/new', {
    title: "Create Your Own Starfleet",
    user: req.user ? req.user : null,
    Starfleet
  })
}

function create(req, res) {
  req.body.commander = req.user.explorer._id
  Starfleet.create(req.body)
  .then(() => {
    res.redirect('/starfleets')
  })
}

export {
  index,
  newStarfleet as new,
  create
}