/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import ANav from "../components/Nav2/Nav2";
import "./home.css";
import Footer from "../components/Footer/footer";
import "./ChangePassword.css";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// Integration
export default function SetPassword(props) {
  const navigate = useNavigate();

  const [data, setData] = React.useState("");
  const userId = localStorage.getItem("userId");

  const validateSchema = Yup.object().shape({
    new_password: Yup.string().required().min(5).label("new password"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("new_password"), null],
      "Password must match"
    ),
  });

  const setPassword = (formData) => {
    console.log("Form Data: ", formData);

    axios({
      method: "post",
      url: "/api/auth/passwordchange",

      data: {
        new_password: formData.new_password,
        id: userId,
      },
    }).then((res) => {
      console.log("respond is:", res);

      if (res.data.message === "password Updated") {
        localStorage.clear();
        return navigate("/sign-in");
      }
    });
  };

  console.log("This is GivenId:", userId);
  // -----------------

  return (
    <>
      <ANav />

      <div className="content">
        <div className="sign-In">
          <h2>Set New Password</h2>
          <Formik
            initialValues={{
              new_password: "",
              confirmPassword: "",
              id: userId,
            }}
            onSubmit={(formData) => setPassword(formData)}
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
                  {data.message}{" "}
                </p>
                <input
                  required
                  type="password"
                  id="password"
                  placeholder="new password"
                  style={allStyles.input}
                  onChange={handleChange("new_password")}
                  onBlur={() => setFieldTouched("new_password")}
                />
                {touched.new_password && (
                  <p style={styling}>{errors.new_password}</p>
                )}
                <input
                  required
                  type="password"
                  id="confirmPassword"
                  placeholder="confirm password"
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
                  }}
                >
                  Change Password
                </button>
              </>
            )}
          </Formik>
        </div>
        <Footer />
      </div>
    </>
  );
  // ---------------------------
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