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
  Exploration.create(req.body)
  .then
}

export {
  index,
  create
}