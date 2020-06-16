module.exports = {
  getPods: async (req, res, next) => {
    try {
      res.locals.pods = (
        await res.locals.client.api.v1.namespaces('default').pods.get()
      ).body.items;
      next();
    } catch (err) {
      next({
        log: `Encountered an error in PodController.getPods: ${err}`,
        status: 400,
        message: 'An error occured fetching pods',
      });
    }
  },
  updatePod: async (req, res, next) => {
    try {
      await res.locals.client.api.v1
        .namespaces('default')
        .pods(req.query.name)
        .put({ body: req.body });
      next();
    } catch (err) {
      next({
        log: `Encountered an error in podController.update: ${err}`,
        status: 500,
        message: 'An error occured updating the pod',
      });
    }
  },

  checkGreenPods: async (req, res, next) => {
    try {
      setTimeout(async () => {
        const pods = await client.api.v1.namespaces('default').pods.get({
          qs: { labelSelector: `version=${res.locals.podSelector}` },
        });
        
      }, 10000);
    } catch (err) {
      next({
        log: `Encountered an error in podController.checkGreenPods: ${err}`,
        status: 500,
        message: 'An error occured checking the status of the green pods',
      });
    }
  },
};
