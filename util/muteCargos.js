const mongoose = require("mongoose");

const muteCargos = new mongoose.Schema({
  user_id: String,
  roles: Array
})

module.exports = mongoose.model("muteCargos", muteCargos)