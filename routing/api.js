// Dependencies
var express = require("express");
var router = express.Router();

// Models
var TeamController = require("../dbmodels/team");
const RootController = require("../controllers/teamController");

router.get("/getPlayerDetails", async (req, res) => {
  try {
    const data = await TeamController.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/insertPlayer", async (req, res) => {
  try {
    RootController.create(req.body, (err, playerResponse) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: playerResponse,
      });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    const options = { new: true };
    const result = await TeamController.findOneAndUpdate(
      id,
      updatedData,
      options
    );

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = await TeamController.findOneAndRemove(id);
    res.status(200);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/moreRuns", async (req, res) => {
  try {
    RootController.findNumberOfRuns({}, (err, details) => {
      if (err) {
        return res.send({ response: err });
      }
      res.json({
        response: details,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/leastBalls", async (req, res) => {
  try {
    RootController.findNumberOfBalls({}, (err, details) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: details,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/highestSixes", async (req, res) => {
  try {
    RootController.findNumberOfSixes({}, (err, details) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: details,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/playersByMatches", async (req, res) => {
  try {
    RootController.findPlayersByMatches({}, (err, details) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: details,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/playersFromHighestToLeastRuns", async (req, res) => {
  try {
    RootController.findPlayersByRuns({}, (err, details) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: details,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/playerHighestBattingStrike", async (req, res) => {
  try {
    RootController.findBattingStrikeRate({}, (err, details) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: details,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Return router
module.exports = router;
