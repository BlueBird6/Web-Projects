const mongoose = require ("mongoose");
const donationSchema = new mongoose.Schema ({


    fullName : {
        type: String,
    },

    Amount : {
        type: String,
    },

    Method : {
        type: String,
    },

})

const Donate = new mongoose.model ("Donate", donationSchema);
module.exports = Donate;