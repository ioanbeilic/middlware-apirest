import request from "supertest";
import app from "../src/app.js";
import chai from "chai";

const { expect } = chai;

app.listen(3000);

describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).to.eq(true);
  });
});

describe("POST /login", () => {
  it("should return a 200 and a json content type", async (done) => {
    request(app)
      .post("/api/login")
      .send({
        username: "test",
        password: "test",
      })
      .expect(200)
      .expect("Content-Type", /json/);
    done();
  });
});
