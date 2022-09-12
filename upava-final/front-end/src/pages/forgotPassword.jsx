import React, { useEffect, useState, useContext } from "react";
import ANav from "../components/Nav2/Nav2";
import axios from "axios";
import { Formik } from "formik";
import "../pages/home.css";
import Footer from "../components/Footer/footer";
import "./forgotPassword.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword(props) {
  const navigate = useNavigate();

  const validateSchema = Yup.object().shape({
    email: Yup.string().email().required().label("email"),
  });

  const verifymail = (formData) => {
    console.log("Form Data: ", formData);

    axios({
      method: "post",
      url: "/api/auth/forgotpassword",
      data: {
        email: formData.email,
      },
    }).then((res) => {
      // console.log("respond is:", res.data);
    //   toast.configure();
    //   const notification = () => {
    //     toast.success(res.data.message);
    //   };

    //   notification();
      if (res.data.message === "Verification otp email sent") {
        localStorage.setItem("userId", res.data.data.userId);
        localStorage.setItem("Email", res.data.data.Email);
        return navigate("/forgot-password/verify");
      }
    });
  };


  return (
    <>
      <ANav />

      <div className="content">
        <div className="sign-in">
          <h2 id="title">Forgot Password</h2>
          <p>Email Address</p>

          <Formik
            initialValues={{ email: "" }}
            onSubmit={(formData) => verifymail(formData)}
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
                  id="wrongCredintials"
                  style={{
                    color: "red",
                    marginLeft: 65,
                    fontSize: 15,
                    fontFamily: "sans-serif",
                  }}
                >
                  {" "}
                  {}{" "}
                </p>

                <input
                  required
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  style={allStyles.input}
                  onChange={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                />
                {touched.email && <p style={styling}>{errors.email}</p>}
                <button
                  className="btn btn-primary"
                  id="submit-form"
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  {" "}
                  Send Code{" "}
                </button>
              </>
            )}
          </Formik>
        </div>
        <Footer />
      </div>
    </>
  );
}

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
