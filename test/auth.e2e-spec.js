// https://github.com/visionmedia/supertest
const request = require("supertest");
const expect = require("chai").expect;
const should = require("chai").should();

const app = require("../src/app");
app.listen(3001, () => console.log(`Test server on port 3001`));

describe("POST /login", () => {
  it("should return a 200 and a json content type", (done) => {
    request(app)
      .post("/api/login")
      .send({
        username: "test",
        password: "test",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
