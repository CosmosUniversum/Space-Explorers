import mongoose from 'mongoose'
const Schema = mongoose.Schema

const explorerSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  experience: {
  type: String, default: "Amateur"},
  explorations: [{type: Schema.Types.ObjectId, ref: "Exploration"}],
  starfleet: {type: Schema.Types.ObjectId, ref: "Starfleet"},
  observations: [{type: Schema.Types.ObjectId, ref: "Observation"}]
}, {
  timestamps: true
})

const Explorer = mongoose.model('Explorer', explorerSchema)

export {
  Explorer
} 
