import { policies as policiesService } from "../services/policies.service.js";

export async function get(req, res) {
  const { limit } = req.query;
  let { ok, data } = await policiesService();

  if (limit) {
    data = data.slice(0, limit);
  }

  console.log(data);
  if (ok) {
    console.log("all policies ok return data");
    return res.status(200).send(data);
  }

  return res.status(500).send("Failed to get data");
}

export async function getById(req, res) {
  console.log(req.params);

  const id = req.params.id;

  console.log(id);

  let { ok, data } = await policiesService();

  const policy = data.filter((x) => x.id === id);
  if (ok) {
    return res.status(200).send(policy);
  }
  return res.status(500).send(err);
}
