import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: String,
    googleId: String,
    explorer: {type: mongoose.Schema.Types.ObjectId, ref: "Explorer"}
  },
  {
    timestamps: true,
  }
)
  
const User = mongoose.model('User', userSchema)
  
export {
  User
}