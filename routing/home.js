const path = require("path");

const express = require("express");

const router = express.Router();
const { HOME_LINK } = require("../constants/navigation")

// 🔄 Refactoro the Changer
// Funkcja "response.sendFile" nie jest odpowiednia do zwracania widoków generowanych przez
// większość silników szablonów. Należy ją zastąpić, inną odpowiednią metodą.
router.get("/", (_request, response) => {
  //response.sendFile(path.join(__dirname, "../views", "home.html"));
    response.render("../views/home.ejs", {headTitle: "Home", menuLinks: [HOME_LINK], activeLinkPath: "/"})
});

module.exports = router;
