import mongoose from "mongoose"
const Schema = mongoose.Schema

const explorationSchema = new Schema({
  name: String,
  coordinates: [Number, Number],
  fov: Number,
  visitedBy: [{type : Schema.Types.ObjectId, ref: "Explorer"}, {type: Schema.Types.ObjectId, ref: "Starfleet"}],
  observations: [{type: Schema.Types.ObjectId, ref: "Obervation"}],
}, {
  timestamps: true
})

const Exploration = mongoose.model('Exploration', explorationSchema)

export {
  Exploration
}
