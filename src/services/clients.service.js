import axios from "axios";
import app from "../app.js";
import { login as apiLogin } from "./api-auth.service.js";

const { get } = axios;

export async function clients() {
  try {
    const res = await get(`${process.env.API_URL}/clients`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: app.locals.api_token,
        etag: app.locals.clientsETag,
      },
    });

    app.locales.clientsETag = res.headers.etag;
    return {
      ok: true,
      data: res,
    };
  } catch (err) {
    const { statusCode, message } = err.response.data;

    /*
  statusCode: 401,
  error: 'Unauthorized',
  message: 'No Authorization was found in request.headers'
*/
    if (
      (statusCode == 401 &&
        message == "No Authorization was found in request.headers") ||
      (statusCode == 401 && message == "Authorization token expired")
    ) {
      console.log("error 401 generate/ refresh login");
      await apiLogin();
      console.log(app.locals.api_token, "token from app.locals");
      try {
        const res = await get(`${process.env.API_URL}/clients`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: app.locals.api_token,
            etag: app.locals.clientsETag,
          },
        });

        app.locals.clientsETag = res.headers.etag ? res.headers.etag : "";

        return {
          ok: true,
          data: res.data,
        };
      } catch (err) {
        console.log(
          "refresh or generate api_token error, return error to user"
        );
        return {
          ok: false,
          data: err.response.data,
        };
      }
    }
    console.log("not 401 error, return error to user");
    return {
      ok: false,
      data: err.response.data,
    };
  }
}
