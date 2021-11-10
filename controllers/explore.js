import { Observation } from "../models/observation.js"
import { Exploration } from "../models/exploration.js"
import { Explorer } from "../models/explorer.js"
import { Starfleet } from "../models/starfleet.js"

function index(req, res) {
  Explorer.findById(req.user.explorer)
  .then(explorer => {
    res.render('explore/index', {
      title: "Free Explore",
      user: req.user ? req.user : null,
      explorer
    })
  })
}

function create(req, res) {
  req.body.visitedBy = req.user.explorer._id
  Exploration.create(req.body)
  .then(exploration => {
    console.log(req.params.id)
    Explorer.findById(req.params.id)
    .then(explorer => {
      console.log(explorer)
      explorer.explorations.push(exploration._id)
      explorer.save()
      .then(() => {
        res.redirect('/explore/index')
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/explore/index')
    })
  })
}



export {
  index,
  create
}
