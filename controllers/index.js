function index(req, res) {
  res.render('index', {
    title: 'Latest Galactic Activity',
    user: req.user ? req.user : null 
  })
}

export {
  index,
}
