const feedback = require("../models/feedback");


exports.contact = async (req, res) => {
    console.log("adding feedback");

    const { name, email, subject, message } = req.body;

    const newFeedback = new feedback({
        Name: name,
        Email: email,
        Subject: subject,
        Message: message
    });

    newFeedback.save();

    return res.json({
        message: "feedback added"
    });
};


exports.fetchAll = (req, res) => {
    feedback.find().then(async result => {
    
        res.json({
          status: 201,
          message: "feedback data",
          user: result,
        });
      });
}