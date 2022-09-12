const mongoose = require('mongoose');
const gallerySchema = new mongoose.Schema ({

    Image: {
        type: String
    },

    Date: {
        type: String
    },
});

const gallery = new mongoose.model('gallery', gallerySchema);
module.exports = gallery;