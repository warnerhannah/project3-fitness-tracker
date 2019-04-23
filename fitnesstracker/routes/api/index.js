const router = require("express").Router();
const fitnessRoutes = require("./fitnessRoutes");

// Book routes
router.use("/fitnessRoutes", fitnessRoutes);

module.exports = router;