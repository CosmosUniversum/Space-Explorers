import { Starfleet } from '../models/starfleet.js'
import { Explorer } from '../models/explorer.js'

function index(req, res) {
  Starfleet.find({})
  .populate('commander')
  .then(starfleets => {
    Explorer.findById(req.user.explorer)
    .populate('starfleet')
    .then(explorer => {
      res.render('starfleets/index', {
        title: "Space Explorer's Starfleets",
        user: req.user ? req.user : null, 
        starfleets,
        explorer
      })
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
  .then(starfleet => {
    Explorer.findById(req.user.explorer)
    .then(explorer => {
      explorer.starfleet = starfleet._id
      explorer.save()
    })
    res.redirect('/starfleets')
  })
}

export {
  index,
  newStarfleet as new,
  create
}