import { clients as clientsService } from "../services/clients.service";
import { policies as policiesService } from "../services/policies.service";

export async function get(req, res) {
  const { limit, name } = req.query;
  let { ok, data } = await clientsService();

  if (name) {
    data = data.filter((x) => x.name === name);
  }
  if (limit) {
    data = data.slice(0, limit);
  }

  if (ok) {
    console.log("all clients ok return data");
    return res.status(200).send(data);
  }

  return res.status(500).send("Failed to get data");
}
export async function getById(req, res) {
  const id = req.params.id;

  let { ok, data } = await clientsService();
  const policies = await policiesService();
  let { ok: policiesOk, data: policiesData } = policies;
  console.log(policiesData);

  let client = data.filter((x) => x.id === id);
  client.policies = policiesData.filter((x) => x.clientId === id);

  if (ok && policiesOk) {
    return res.status(200).send(client);
  }
  return res.status(500).send(err);
}
export async function getPoliciesByClientId(req, res) {
  //clientId
  const id = req.params.id;

  let { ok, data } = await policiesService();

  const policies = data.filter((x) => x.clientId === id);

  if (ok) {
    return res.status(200).send(policies);
  }
  return res.status(500).send(err);
}
