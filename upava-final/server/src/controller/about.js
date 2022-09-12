const about = require("../models/aboutus");

exports.fetch = async (req, res) => {
    // console.log("about called");

    about.find().then(async result => {
        console.log(result);
        res.json({
            status: 201,
            message: "About Us Info",
            data: result,
        });
    });

};


exports.update = async (req, res) => {
    const main = req.body.About;
    const story = req.body.Story;
    const team = req.body.Team;
    const board = req.body.Board;

    about.findOne({ _id: "631e61d15f539b0caad37700" }).then(target => {
        target.About = main;
        target.Story = story;
        target.Team = team;
        target.Board = board;
        return target.save()
    }).then(result => {
        // console.log(result);
        res.status(201).json({ message: "About Us Updated" });
    })
        .catch(err => {
            console.log(err);
        });
};