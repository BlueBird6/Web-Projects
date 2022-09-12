const newz = require("../models/news");


exports.createNews = async (req, res) => {
    console.log("creating news");

    const { title, overview, content, date, img } = req.body;

    const news = new newz({
        Title: title,
        Overview: overview,
        Content: content,
        Date: date,
        Image: img,
    });

    news.save();

    return res.json({
        message: "news added"
    });
};


exports.fetch = async (req, res) => {
    // console.log("about called");

    await newz.find().then(async result => {
        // console.log(result);
        res.json({
            status: 201,
            message: "news details",
            data: result,
        });
    });

};

exports.fetchTitle = async (req, res) => {

    await newz.findOne({ Title: req.query.title }).then(async result => {
        console.log(result);
        res.json({
            status: 201,
            message: "news details",
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

    await newz.findOne({ Title: oldTitle }).then(target => {
        target.Title = title;
        target.Overview = overview;
        target.Content = content;
        target.Image = img;
        return target.save()
    }).then(result => {
        // console.log(result);
        res.status(201).json({ message: "News Updated" });
    })
        .catch(err => {
            console.log(err);
        });
};

exports.delete = async (req, res) => {
    const title = req.query.title;

    await newz.deleteOne({ Title: title }).then(result => {
        res.status(201).json({ message: "delete successfull" });
    })
}