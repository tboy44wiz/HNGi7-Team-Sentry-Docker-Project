const mongoose = require('mongoose');

const AddPageSchema = mongoose.Schema({
    title: { type: String, require: true },
    content: { type: String, require: true },
});

const addPageModel = mongoose.model("AddPage", AddPageSchema, "pages");

module.exports = addPageModel;