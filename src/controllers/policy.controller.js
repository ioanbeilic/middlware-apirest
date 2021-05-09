module.exports = {
  get: async (req, res, next) => {
    try {
      // TODO get from service
      const policies = {};
      res.send(policy);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getById: async (req, res, next) => {
    const { id } = req.params;

    try {
      const policies = this.get();
      const policy = policies.filter((x) => x.id === id);
      res.send(policy);
    } catch (error) {
      res.status(500).send(err);
    }
  },
};
