const PageModel = require('../models/addPageModel');     //  Import the addPageModel.

//  Add a Single Page.
module.exports.addSinglePage = (req, res, next) => {
    const bodyParams = req.body;

    //  Create an instance of the PageModel.
    const page = new PageModel({
        title: bodyParams.title,
        content: bodyParams.content,
    });

    //  Check if the Page Title is already existing.
    PageModel.findOne({ title: page.title })
        .then((existingPageTitle) => {
            if (existingPageTitle) {
                //  If "True", that means the Page Title already existed then return a response message.
                res.status(200).json({
                    Message: "Page Title already exist, please user another Title.",
                });
            }
            else {
                //  If it doesn't exist, then save to the DB.
                page.save()
                    .then((result) => {
                        return res.status(201).json({
                            Message: "Page added Successfully...",
                            Page: {
                                _id: result._id,
                                Title: result.title,
                                Content: result.content,
                            },
                        });
                    })
                    .catch((error) => {
                        return res.status(500).json({
                            Error: error,
                        });
                    });
            }
        })
        .catch((error) => {
            return res.status(404).json({
                Message: error,
            });
        });
};



//  Get all Pages
module.exports.getAllPages = (req, res, next) => {
    PageModel.find()
        .then((pages) => {
            const formattedResponse = pages.map((eachPage) => {
                return {
                    _id: eachPage._id,
                    Title: eachPage.title,
                    Content: eachPage.content,
                }
            });
            return res.status(200).json({
                Message: "Successful...",
                Pages: formattedResponse,
            });
        })
        .catch((error) => {
            return res.status(500).json({
                Error: error,
            });
        });
};