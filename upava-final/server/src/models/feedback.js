const mongoose = require ("mongoose");
const feedbackSchema = new mongoose.Schema ({


    Name : {
        type: String,
    },

    Email : {
        type: String,
    },

    Subject : {
        type: String,
    },

    Message : {
        type: String,
    },

});

const Feedback = new mongoose.model ("Feedback", feedbackSchema);
module.exports = Feedback;