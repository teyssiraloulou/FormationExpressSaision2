var express = require('express');
var router = express.Router();
const os = require("os");
const osController = require("../Controllers/osController");

/* GET home page. */
router.get("/os",osController.getOSinformations)

router.get("/osCpus",osController.osCpus)

router.get("/osCpusByID/:id",osController.osCpusByID)



module.exports = router;
