import mongoose from 'mongoose'

const starfleetSchema = new mongoose.Schema({
  name: String,
  logo: String,
  commander: {ObjectId: "Explorer"},
  explorations: [{ObjectId: "Exploration"}],
  crew: [{ObjectId: "Explorer"}]
}, {
  timestamps: true
})

const Starfleet = mongoose.model('Starfleet', starfleetSchema)

export {
  Starfleet
}