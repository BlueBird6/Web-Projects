const mongoose = require ("mongoose");
const eventSchema = new mongoose.Schema ({


    Title : {
        type: String,
    },

    Overview : {
        type: String,
    },

    Content : {
        type: String,
    },

    Date : {
        type: String,
    },

    Image : {
        type: String,
    }

});

const Event = new mongoose.model ("Event", eventSchema);
module.exports = Event;