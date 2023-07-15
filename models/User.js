import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username: String,
  image: String,
  roles: [String],
  email: String,
  warnings: Number,
  posted: [Number],
  banned: Boolean
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)