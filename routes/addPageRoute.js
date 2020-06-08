const express = require('express');
const addPageController = require('../contollers/addPageController');

//  Set Up Express Router
const router = express.Router();

//  Get All the Added Pages.
router.get("/", addPageController.getAllPages);

//  POST a Single Page
router.post("/add_page", addPageController.addSinglePage);

module.exports = router;