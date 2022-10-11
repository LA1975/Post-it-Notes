const express = require("express");
const router = express.Router();


router.get("./", function (req, res) {
    res.locals.homePage = true
    res.render("home");
});

module.exports = router;

router.get("./",  async function (req, res) {
    res.locals.pageTitle = "Home Page";

    res.render("home");
  });
  