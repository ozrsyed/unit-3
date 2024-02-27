const RootController = require("./rootController");
const TeamModel = require("../dbmodels/team");
class Team extends RootController {
  constructor() {
    super(TeamModel, Team);
  }
}
module.exports = new Team();
