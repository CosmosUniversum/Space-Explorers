import { Starfleet } from '../models/starfleet.js'
import { Explorer } from '../models/explorer.js'
import { Exploration } from '../models/exploration.js'

function index(req, res) {
  Starfleet.find({})
  .populate('commander')
  .populate('explorations')
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
    .catch(err => {
      console.log(err)
      res.redirect('/starfleets/index')
    })
  })
}

function show(req, res) {
  Starfleet.findById(req.params.id)
  .populate('commander')
  .populate('explorations')
  .populate('crew')
  .then(starfleet =>{
    res.render('starfleets/show', {
      title: `Starfleet: ${starfleet.name}`,
      user: req.user ? req.user : null, 
      starfleet
    })
    .catch(err => {
    console.log(err)
    res.redirect('/starfleets/index')
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
  .catch(err => {
    console.log(err)
    res.redirect('/starfleets/index')
  })
}

function addToStarfleet(req, res) {
  Explorer.findById(req.params.id)
  .then(explorer =>{
    Starfleet.findById(req.user.explorer.starfleet)
    .then(starfleet => {
      explorer.starfleet = req.user.explorer.starfleet._id
      explorer.save()
      console.log(starfleet)
      res.redirect(`/starfleets/index`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/starfleets/index')
  })
}

export {
  index,
  show,
  newStarfleet as new,
  addToStarfleet,
  create
}