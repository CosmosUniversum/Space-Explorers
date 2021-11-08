import mongoose from 'mongoose'

const updateSchema = new mongoose.schema({
  author: {type: Schema.Types.ObjectId, ref: "Explorer"},
  content: {type: String, required: true}
})

const observationSchema = new mongoose.Schema({
  title: String,
  author: {type: Schema.Types.ObjectId, ref: "Explorer"},
  content: {type: String, required: true},
  updates: {
    type: [updateSchema]
  }
}, {
  timestamps: true
})

const Observation = mongoose.model('Observation', observationSchema)

export {
  Observation
}
