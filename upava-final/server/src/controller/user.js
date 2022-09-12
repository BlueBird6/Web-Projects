const users = require("../models/users");

exports.fetchAll = (req, res) => {
    users.find().then(async result => {
    
        res.json({
          status: 201,
          message: "Data of the user",
          user: result,
        });
      });
}