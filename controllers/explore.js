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
    Explorer.findById(req.user.explorer)
    .then(explorer => {
      explorer.explorations.push(exploration._id)
      explorer.save()
      .then(() => {
        Starfleet.findById(explorer.starfleet._id)
        .then(starfleet =>{
          starfleet.explorations.push(exploration._id)
          starfleet.save()
          exploration.visitedBy.push(starfleet._id)
          exploration.save()
        })
        res.redirect('/explore')
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/explore')
    })
  })
}



export {
  index,
  create
}
