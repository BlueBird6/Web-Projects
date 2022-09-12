const gallery = require("../models/gallery");


exports.add = async (req, res) => {
    console.log("adding image");

    const { img, date } = req.body;

    const image = new gallery({
        Image: img,
        Date: date,
    });

    image.save();

    return res.json({
        message: "image added"
    });
};


exports.fetch = async (req, res) => {

    await gallery.find().sort({Date: -1}).then(async result => {
        console.log(result);
        res.json({
            status: 201,
            message: "news details",
            data: result,
        });
    });

};

exports.delete = async (req, res) => {
    const img = req.body.image;

    await gallery.deleteOne({ Image: img }).then(result => {
        res.status(201).json({ message: "delete successfull" });
    })
}