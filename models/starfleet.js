import mongoose from 'mongoose'

const starfleetSchema = new mongoose.Schema({
  name: String,
  logo: String,
  commander: {type: Schema.Types.ObjectId, ref: "Explorer"},
  explorations: [{type: Schema.Types.ObjectId, ref: "Exploration"}],
  crew: [{type: Schema.Types.ObjectId, ref: "Explorer"}]
}, {
  timestamps: true
})

const Starfleet = mongoose.model('Starfleet', starfleetSchema)

export {
  Starfleet
}