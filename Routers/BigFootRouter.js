class BigFootRouter {
  constructor(bigFootController, express) {
    this.controller = bigFootController;
    this.express = express;
  }

  route = () => {
    let router = this.express.Router();

    router.get("/sightings", this.controller.list);
    router.get("/sightings/:sightingIndex", this.controller.listIndividual);

    return router;
  };
}

module.exports = BigFootRouter;

//retrieve all sightings
// app.get("/sightings", async (req, res) => {
//   const sightings = await getSightings();
//   res.json(sightings);
// });

// //retrieve individual sightings data
// app.get("/sightings/:sightingIndex", async (req, res) => {
//   const sightings = await getSightings();
//   const individualSighting = sightings[req.params.sightingIndex];
//   res.json(individualSighting);
// });
