/*
GET
​/clients
​/clients​/:id
​/clients​/:id​/policies
*/

module.exports = {
  get: async (req, res, next) => {
    try {
      // TODO get from service
      const clients = {};
      res.send(clients);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getById: async (req, res, next) => {
    const { id } = req.params;

    try {
      const clients = this.get();
      const client = clients.filter((x) => x.id === id);
      res.send(client);
    } catch (error) {
      res.status(500).send(err);
    }
  },
  getPoliciesByClientId: async (req, res, next) => {
    const { id } = req.params;

    try {
      // TODO - call policies service  filter with client id
      const client = this.getById();
      const policies = [];
      res.send(policies);
    } catch (error) {
      res.status(500).send(err);
    }
  },
};
