import mongoose from "mongoose"

const explorationSchema = new mongoose.Schema({
  name: String,
  coordinates: [Number],
  visitedBy: [{type : Schema.Types.ObjectId, ref: "Explorer"}, {type: Schema.Types.ObjectId, ref: "Starfleet"}],
  observations: [{type: Schema.Type.ObjectId, ref: "Obervation"}],
  crew: [{type: Schema.Type.ObjectId, ref: "Explorer"}]
}, {
  timestamps: true
})

const Exploration = mongoose.model('Exploration', explorationSchema)

export {
  Exploration
}
