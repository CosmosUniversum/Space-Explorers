import mongoose from 'mongoose'

const observationSchema = new mongoose.Schema({
  title: String,
  author: {ObjectId: "Explorer"},
  content: {type: String, required: true},
  updates: [{ObjectId: "Update"}]
}, {
  timestamps: true
})

const Observation = mongoose.model('Observation', observationSchema)

export {
  Observation
}
