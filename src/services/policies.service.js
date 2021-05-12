import { get } from "axios";
import app from "../app";
import { login as apiLogin } from "./api-auth.service";

export async function policies() {
  try {
    const res = await get(`${process.env.API_URL}/policies`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: app.locals.api_token,
        etag: app.locals.policiesETag,
      },
    });

    app.locals.policiesETag = res.headers.etag ? res.headers.etag : "";
    return {
      ok: true,
      data: res.data,
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
        const res = await get(`${process.env.API_URL}/policies`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: app.locals.api_token,
            etag: app.locals.policiesETag,
          },
        });

        app.locals.policiesETag = res.headers.etag ? res.headers.etag : "";

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
