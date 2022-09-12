const events = require("../models/events");


exports.createEvent = async (req, res) => {
    console.log("creating event");

    const { title, overview, content, date, img } = req.body;

    const event = new events({
        Title: title,
        Overview: overview,
        Content: content,
        Date: date,
        Image: img,
    });

    event.save();

    return res.json({
        message: "event added"
    });
};


exports.fetch = async (req, res) => {

    await events.find().then(async result => {
        // console.log(result);
        res.json({
            status: 201,
            message: "event details",
            data: result,
        });
    });

};

exports.fetchTitle = async (req, res) => {

    await events.findOne({ Title: req.query.title }).then(async result => {
        console.log(result);
        res.json({
            status: 201,
            message: "event details",
            data: result,
        });
    });

};


exports.update = async (req, res) => {
    const oldTitle = req.query.oldTitle
    const title = req.body.Title;
    const overview = req.body.Overview;
    const content = req.body.Content;
    const img = req.body.Image;

    console.log(oldTitle);
    console.log(title);
    console.log(overview);
    console.log(content);

    await events.findOne({ Title: oldTitle }).then(target => {
        target.Title = title;
        target.Overview = overview;
        target.Content = content;
        target.Image = img;
        return target.save()
    }).then(result => {
        // console.log(result);
        res.status(201).json({ message: "Event Updated" });
    })
        .catch(err => {
            console.log(err);
        });
};

exports.delete = async (req, res) => {
    const title = req.query.title;

    await events.deleteOne({ Title: title }).then(result => {
        res.status(201).json({ message: "delete successfull" });
    })
}