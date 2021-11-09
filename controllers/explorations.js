import { Observation } from "../models/observation.js"
import { Exploration } from "../models/exploration.js"

function index(req, res) {
  Exploration.find({})
  .then(explorations => {
    console.log(explorations)
    res.render('explorations/index', {
      title: "Space Explorer's Explorations",
      explorations,
      user: req.user ? req.user : null 
    })
  })
}

export {
  index
}