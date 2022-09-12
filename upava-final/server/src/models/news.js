const mongoose = require ("mongoose");
const newsSchema = new mongoose.Schema ({


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

    Image: {
        type : String,
    }

});

const New = new mongoose.model ("New", newsSchema);
module.exports = New;