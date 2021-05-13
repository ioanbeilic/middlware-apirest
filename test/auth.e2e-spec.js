// https://github.com/visionmedia/supertest
import request from "supertest";
import app from "../src/app";

jest.useFakeTimers();

app.listen(3001);
console.log(`Test server on port 3001`);

describe("POST /login", () => {
  it("should return a 200 and a json content type", async (done) => {
    await request(app)
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
