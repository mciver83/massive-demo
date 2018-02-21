module.exports = {
  read: (req, res) => {
    const db = req.app.get('db');
    db.get_locations().then(locations => {
      res.send(locations);
    })
  },

  create: (req, res) => {
    const db = req.app.get('db');
    const { city, state, country, image_url } = req.body;

    db.create_location({city, state, country, image_url}).then(response => {
      db.get_locations().then(locations => {
        res.send(locations);
      })
    })

  }
}