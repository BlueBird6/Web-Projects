/* eslint-disable no-sequences */
import React from "react";
import { useState } from "react";
import "./signup.css";
import "./home.css";
import Footer from "../components/Footer/footer";
import Navs from "../components/Nav2/Nav2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Axios library is used for ingration and connection of frontend with backend.
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { clear } from "@testing-library/user-event/dist/clear";
import { useNavigate } from "react-router-dom";

// Integration
export default function SignUp() {
  const navigate = useNavigate();
  const validateSchema = Yup.object().shape({
    fullName: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password must match"
    ),
  });

  //const [toggle, setToggle] = React.useState("none");
  const [data, setData] = useState({});

  //Formik Save
  const signUp = (formData) => {
    console.log("Form Data: ", formData);
    axios({
      method: "post",
      url: "/api/auth/signup",
      data: {
        email: formData.email,
        fullname: formData.fullName,
        password: formData.password,
        reqType: formData.reqType,
        date1: formData.date1,
        confirmPassword: formData.confirmPassword,
      },
    })
      .then((res) => {
        console.log("response is: ", res);
        if (
          res.data.message ===
          "User already existed please try another email address"
        ) {
          const response1 = res.data.message;
          document.getElementById("dulplicateEmail").innerHTML = response1;
        }

        if (
          res.data.message ===
          "request already sent using this email please wait for approval"
        ) {
          const response2 = res.data.message;
          document.getElementById("dulplicateEmail").innerHTML = response2;
        }

        if (res.data.message === "User created successfully") {
          return navigate("/user");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Notification message
  // toast.configure();
  // const notification = () => {
  //   toast.success("you signed up Successfully");
  // };

  // const notification1 = () => {
  //   toast.info("Admin signUp request sent please wait for apporval!");
  // };

  const date = new Date();
  const Date1 = date.toDateString();
  console.log(Date1);

  return (
    <>
      <Navs />

      <div className="container text-center">
        <div className="sign-up">

          <div className="heading">
            <h2>Sign Up</h2>
          </div>

          <Formik
            onReset={handleReset}
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              confirmPassword: "",
              role: "",
              reqType: "adminSignUp",
              date1: Date1,
            }}
            onSubmit={(formData) => signUp(formData)}
            validationSchema={validateSchema}
          >
            {({
              handleSubmit,
              handleChange,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <p
                  id="dulplicateEmail"
                  style={{
                    color: "red",
                    marginLeft: 65,
                    fontSize: 15,
                    fontFamily: "sans-serif",
                  }}
                >
                  {data.message}
                </p>
                <input
                  required
                  type="text"
                  id="name1"
                  placeholder="Full Name"
                  style={allStyles.input}
                  onChange={handleChange("fullName")}
                  onBlur={() => setFieldTouched("fullName")}
                />
                {touched.fullName && <p style={styling}>{errors.fullName}</p>}

                <input
                  required
                  type="text"
                  id="email"
                  placeholder="Email Address"
                  style={allStyles.input}
                  onChange={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                />
                {touched.email && <p style={styling}>{errors.email}</p>}
                <input
                  required
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  style={allStyles.input}
                  onChange={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                />
                {touched.password && <p style={styling}>{errors.password}</p>}
                <input
                  required
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  style={allStyles.input}
                  onChange={handleChange("confirmPassword")}
                  onBlur={() => setFieldTouched("confirmPassword")}
                />
                {touched.confirmPassword && (
                  <p style={styling}>{errors.confirmPassword}</p>
                )}
                <button
                  className="btn btn-primary"
                  id="submit-form"
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                    clear();
                  }}
                >
                  Signup
                </button>
              </>
            )}
          </Formik>
        </div>
      </div>

      <Footer />
    </>
  );
}

var handleReset = (values, formProps) => {
  return window.confirm("Reset?"); // still resets after you Cancel
};

// styling part
const styling = {
  color: "red",
  marginLeft: 65,
  fontSize: 15,
  fontFamily: "sans-serif",
};
const allStyles = {
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 15,
  },
};
