import { Explorer } from "../models/explorer.js"
import { Exploration } from "../models/exploration.js"
import { Starfleet } from "../models/starfleet.js"

function index(req, res) {
  Explorer.find({})
  .then(explorers => {
    console.log(explorers)
    res.render('explorers/index', {
      title: "Space Explorer's Explorers",
      user: req.user ? req.user : null, 
      explorers
    })
  })
}

function show(req, res) {
  Explorer.findById(req.params.id)
  .populate('explorations')
  .populate('starfleet')
  .then(explorer => {
    Starfleet.findById(req.user.explorer.id)
    .then(starfleet => {
        res.render('explorers/show', {
          title: 'Explorer View',
          user: req.user ? req.user : null, 
          explorer,
          starfleet
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/explorers/index')
  })
}

export {
  index,
  show
}