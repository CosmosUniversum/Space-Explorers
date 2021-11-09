import { Observation } from "../models/observation.js"

function index(req, res) {
    res.render('explore/index', {
      title: "Free Explore",
      user: req.user ? req.user : null 
    })
}

export {
  index
}