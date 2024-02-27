const request = require("supertest");
const app = require("../routing/api");

describe("GET /getPlayerDetails", function () {
  it("Will return all the players details", function (done) {
    request(app)
      .get("/getPlayerDetails")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("POST /insertPlayer", function () {
  it("Will insert the player", function (done) {
    request(app)
      .post("/insertPlayer")
      .send({
        name: "Rohit Sharma",
        scored_runs: 83,
        played_balls: 67,
        played_matches: 105,
        scored_fours: 9,
        scored_sixes: 3,
        strike_rate: 123,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("PATCH /update/:id", function () {
  it("Will return updated player details", function (done) {
    request(app)
      .patch("/update/:64788f3dae1fa7b009d783f0")
      .send({
        name: "Testing",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("DELETE /delete/:id", function () {
  it("Will return deleted player details", function (done) {
    request(app)
      .delete("/delete/:64788f3dae1fa7b009d783f0")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /moreRuns", function () {
  it("Will return who is having more runs", function (done) {
    request(app)
      .get("/moreRuns")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /leastBalls", function () {
  it("Will return who played least number of balls", function (done) {
    request(app)
      .get("/leastBalls")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /highestSixes", function () {
  it("Will return who is having highest sixes", function (done) {
    request(app)
      .get("/highestSixes")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /playersByMatches", function () {
  it("Will return list of players by matches", function (done) {
    request(app)
      .get("/playersByMatches")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /playersFromHighestToLeastRuns", function () {
  it("Will return list of players by runs", function (done) {
    request(app)
      .get("/playersFromHighestToLeastRuns")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /playerHighestBattingStrike", function () {
  it("Will return who have highest batting strike", function (done) {
    request(app)
      .get("/playerHighestBattingStrike")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
