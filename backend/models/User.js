const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  number: {
    type: Number,
  },
  designation: {
    type: String,
  },
  city: {
    type: String,
  },
});
module.exports = User = mongoose.model("user", UserSchema);
