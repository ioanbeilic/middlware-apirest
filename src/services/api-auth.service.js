import axios from "axios";
import app from "../app.js";

const { post } = axios;

export async function login() {
  try {
    const res = await post(
      `${process.env.API_URL}/login`,
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(res.data);
    console.log(res.data);
    app.locals.api_token = `${res.data.type} ${res.data.token}`;
  } catch (err) {
    console.log(err.response.data);
  }
}
