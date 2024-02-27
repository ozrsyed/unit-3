// Dependencies
var mongoose = require("mongoose");

// Schema
var teamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  scored_runs: {
    type: Number,
  },
  played_balls: {
    type: Number,
  },
  played_matches: {
    type: Number,
  },
  scored_fours: {
    type: Number,
  },
  scored_sixes: {
    type: Number,
  },
  strike_rate: {
    type: Number,
  },
});

// Return model
module.exports = mongoose.model("MyTeam", teamSchema, "myteam");
