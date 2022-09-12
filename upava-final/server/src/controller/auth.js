const users = require("../models/users");
const requests = require("../models/request");

const UserVerification = require("../models/userverification");
const nodemailer = require('nodemailer');

const jwt = require("jsonwebtoken");
const admins = require("../models/adminUser")



let transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'upava.otp@hotmail.com',
    pass: 'systemtest@2022'
  }
});



// Sign up
exports.signup = async (req, res, next) => {
  console.log("Signup called");
  const { fullname, email, password, role, date1, reqType } = req.body;

  // Checking the Users Email whether its exist or not.
  const check = await users.findOne({ Email: email })
  if (check) {
    return res.status(201).json({ message: "User already existed please try another email address" });
  }

  const user = new users({
    fullName: fullname,
    Email: email,
    Password: password,
    Verified: false,
  });

  user.save();

  return res.json({
    message: "User created successfully"
  });

};



exports.SignIn = async (req, res) => {

  if (req.body.role === 'user') {
    console.log(' user singIn called');

    const jwtkey = "thisisjwtkey";
    const { email, password, } = req.body;
    if (!email || !password)
      return res
        .status(201)
        .json({ message: "please provide email & password!" });

    const user = await users.findOne({ Email: email });
    if (!user)
      return res.status(201)
        .json({ message: "wrong email or password!" });


    if (user.Password === password) {
      const token = jwt.sign(
        {
          userID: user._id,
          email: user.Email,
          name: user.fullName,

        },
        jwtkey
      );
      console.log("Token: ", token);
      res.status(201).json({ message: "Success", token });
    }
    else {
      res.status(201).json({ message: "wrong email or password!" });
    }
  }


  // Admin and super admin
  else if (req.body.role === 'admin') {
    console.log('admin called');

    const jwtkey = "thisisjwtkey";
    const { email, password, } = req.body;
    if (!email || !password)
      return res
        .status(201)
        .json({ message: "please provide email & password!" });

    const user = await admins.findOne({ Email: email });

    console.log(user);
    if (!user) {
      return res.status(201)
        .json({ message: "wrong email or password!" });
    }

    if (user.Password === password) {
      const token = jwt.sign(
        {
          userID: user._id,
          email: user.Email,
          role: user.Role,
          name: user.fullName
        },
        jwtkey
      );
      console.log("Token: ", token);
      res.status(201).json({ message: "Success", token });

    } else {
      return res.status(201).json({ message: "wrong email or password!" });
    }

  }

};


const sendVerificationEmail = async ({ _id, Email }, res) => {

  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    //mail options
    const mailOptions = {
      from: "upava.otp@hotmail.com",
      to: Email,
      subject: "Verify Your Email",
      html: `<p>Enter <b>${otp}</b> in the app to verify your email address and complete your registration!</p><p>This code will <b>expire in 1 hour</b>.</b>`,
    };

    const newUserVerification = await new UserVerification({
      userId: _id,
      otp: otp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });
    // save otp in database
    await newUserVerification.save();
    // console.log("sending email");
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(info);
      }
    });
    console.log("mail sent\ncheck your email!!!");
    res.json({
      status: "PENDING",
      message: "Verification otp email sent",
      data: {
        userId: _id,
        Email,
      },
    });

  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
};

// Otp verifying
exports.verifyOTP = async (req, res) => {
  try {
    let { userId, otp } = req.body;

    console.log(req.body);
    if (!userId || !otp) {
      throw Error("Empty otp details are not allowed");
    } else {
      const userVerificationRecords = await UserVerification.find({
        userId,
      });

      if (userVerificationRecords.length <= 0) {
        // no record found
        throw new Error(
          "Account doesn't exist or has been verified already. Please sign up or log in"
        );
      } else {
        // user otp record exists
        const { expiresAt } = userVerificationRecords[0];

        if (expiresAt < Date.now()) {
          // user otp record has expired
          await UserVerification.deleteMany({ userId });
          throw new Error("Code has expired. Please request again");
        } else {
          validOTP = userVerificationRecords[0].otp;

          if (validOTP != otp) {
            // supplied otp is wrong
            throw new Error("Invalid code passed. Enter correct code.");
          } else {
            // success
            await users.updateOne({ _id: userId }, { Verified: true });
            await UserVerification.deleteMany({ userId });

            res.json({
              status: "VERIFIED",
              message: "User email verified successfully.",
            });
          }
        }
      }
    }

  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
};


exports.resendOTP = async (req, res) => {
  try {
    let { userId, email } = req.body;
    console.log("email:", email);
    if (!userId || !email) {
      throw Error("Empty user details are not allowed");
    } else {
      // delete exisiting record and resend
      await UserVerification.deleteMany({ userId });
      sendVerificationEmail({ _id: userId, Email: email }, res);
    }
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
};


//  Forgot password 
exports.forgotPassword = async (req, res) => {
  const Email = req.body.email;
  const userRecord = await users.findOne({ Email: Email, });
  if (!userRecord) {
    return res.status(201).json({ message: 'This email address is not register please enter correct email address!' })
  }
  const _id = userRecord._id.toString();


  sendVerificationEmail({ _id, Email }, res);
};


exports.passwordChange = (req, res) => {
  const new_password = req.body.new_password;
  const userId = req.body.id;

  console.log("id:", userId);
  console.log("new_password:", new_password);

  users.findOne({ _id: userId }).then(person => {
    // Updating password
    person.Password = new_password;
    return person.save()
  }).then(result => {
    console.log(result);
    res.status(201).json({ message: "password Updated", user: result });
  })
    .catch(err => {
      console.log(err);
    })

};