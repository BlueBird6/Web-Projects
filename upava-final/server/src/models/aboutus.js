const mongoose = require ("mongoose");
const aboutSchema = new mongoose.Schema ({


    About : {
        type: String,
    },

    Story : {
        type: String,
    },

    Team : {
        type: String,
    },

    Board : {
        type: String,
    },

});

const About = new mongoose.model ("About", aboutSchema);
module.exports = About;