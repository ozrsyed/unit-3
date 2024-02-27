class RootController {
  constructor(model, name) {
    this.model = model;
    this.name = name;
  }

  create(params, callback) {
    this.model.create(params, (err, dbObject) => {
      if (err) {
        return callback(err);
      }

      return callback(null, dbObject);
    });
  }

  findNumberOfRuns(params, callback) {
    this.model
      .find(params, (err, dbObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbObject);
      })
      .sort({ scored_runs: -1 })
      .limit(1);
  }

  findNumberOfBalls(params, callback) {
    this.model
      .find(params, (err, dbObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbObject);
      })
      .sort({ played_balls: 1 })
      .limit(1);
  }

  findNumberOfSixes(params, callback) {
    this.model
      .find(params, (err, dbObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbObject);
      })
      .sort({ scored_sixes: -1 })
      .limit(1);
  }

  findPlayersByRuns(params, callback) {
    this.model
      .find(params, (err, dbObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbObject);
      })
      .sort({ scored_runs: -1 });
  }
  findPlayersByMatches(params, callback) {
    this.model
      .find(params, (err, dbObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbObject);
      })
      .sort({ played_matches: -1 });
  }

  findBattingStrikeRate(params, callback) {
    this.model
      .find(params, (err, dbObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbObject);
      })
      .sort({ strike_rate: -1 })
      .limit(1);
  }
}
module.exports = RootController;
