const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    min: [5, "Username must have at least 5 or more characters long"],
    max: [20, "Username must have a maximum of 20 characters only"],
    required: "is required"
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "is required",
    validate: {
      validator: validateEmail,
      message: props => `${props.value} is not a valid email address!`
    },
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  password: {
    type: String,
    min: [8, "Password is too short"],
    required: "is required"
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  isAdmin: {
    type: Boolean,
    default: false
  },
  archive: {
    type: Boolean,
    default: false
  }
});

userSchema.pre("save", async function(next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword, next) {
  try {
    let isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    return next(err);
  }
};

module.exports = mongoose.model("User", userSchema);
