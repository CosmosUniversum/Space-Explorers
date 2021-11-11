import { Explorer } from "../models/explorer.js"
import { Exploration } from "../models/exploration.js"

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

    res.render('explorers/show', {
      title: 'Explorer View',
      user: req.user ? req.user : null, 
      explorer
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