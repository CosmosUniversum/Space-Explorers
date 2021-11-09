import { Explorer } from "../models/explorer.js"
import { Exploration } from "../models/exploration.js"

function index(req, res) {
  Explorer.find({})
  .then(explorers => {
    console.log(explorers)
    res.render('explorers/index', {
      title: "Space Explorer's Explorers",
      explorers,
    })
  })
}

export {
  index
}