import mongoose from "mongoose"
const Schema = mongoose.Schema

const explorationSchema = new mongoose.Schema({
  name: String,
  coordinates: Number,
  visitedBy: [{type : Schema.Types.ObjectId, ref: "Explorer"}, {type: Schema.Types.ObjectId, ref: "Starfleet"}],
  observations: [{type: Schema.Types.ObjectId, ref: "Obervation"}],
  crew: [{type: Schema.Types.ObjectId, ref: "Explorer"}]
}, {
  timestamps: true
})

const Exploration = mongoose.model('Exploration', explorationSchema)

export {
  Exploration
}
