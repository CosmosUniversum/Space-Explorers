import mongoose from 'mongoose'

const explorerSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  experience: {
  type: String, default: "Amateur"},
  explorations: [{ObjectId: "Exploration"}],
  starfleet: {ObjectId: "Starfleet"},
  observations: [{ObjectId: "Observation"}]
}, {
  timestamps: true
})

const Explorer = mongoose.model('Explorer', explorerSchema)

export {
  Explorer
} 
