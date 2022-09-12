/* eslint-disable no-sequences */
import React from "react";
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

import './forgotPasswordVerify.css';

// Integration
export default function SignUpVerify(props) {

  const navigate = useNavigate();

  const validateSchema = Yup.object().shape({
    otp: Yup.string().required().label("otp"),
  });

  const [role, setRole] = React.useState("user");
  //const [toggle, setToggle] = React.useState("none");
  const [data, setData] = React.useState({});

  //Formik Save
  const signUp = (formData) => {
    console.log("Form Data: ", formData);
    axios({
      method: "post",
      url: "/api/auth/verify",
      data: {
        userId: localStorage.getItem("userId"),
        otp: formData.otp,
      },
    })
      .then((res) => {
        console.log("response is: ", res);
        if (res.data.message === "Code has expired. Please request again") {
          const response1 = res.data.message;
          document.getElementById("dulplicateEmail").innerHTML = response1;
        }

        if (res.data.message === "Invalid code passed. Enter correct code.") {
          const response2 = res.data.message;
          document.getElementById("dulplicateEmail").innerHTML = response2;
        }

        if (res.data.message === "User email verified successfully.") {
          return navigate("/set-new-password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Notification message
  const date = new Date();
  const Date1 = date.toDateString();
  console.log(Date1);

  return (
    <>
      <Navs />

      <div className="container text-center">
        <div className="verify">
          <h2>Verify Account</h2>
          <Formik
            onReset={handleReset}
            initialValues={{
              otp: "",
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
                  type="password"
                  id="otp"
                  placeholder="Enter Code"
                  style={allStyles.input}
                  onChange={handleChange("otp")}
                  onBlur={() => setFieldTouched("otp")}
                />
                {touched.otp && <p style={styling}>{errors.otp}</p>}

                <button
                  className="btn btn-primary"
                  id="submit-form"
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                    clear();
                  }}
                >
                  Verify Account
                </button>

                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => {
                    ResendOTP("code_sent_mssg");
                    clear();
                  }}
                >
                  Resend Code
                </button>
              </>
            )}
          </Formik>
        </div>

      </div>
      <Footer />
    </>
  );
};

function ResendOTP(success_mssg) {
  axios({
    method: "post",
    url: "/api/auth/resendOTP",
    data: {
      userId: localStorage.getItem("userId"),
      email: localStorage.getItem("Email"),
    },
  })
    .then((res) => {
      console.log("response is: ", res);
      if (res.data.status === "PENDING") {
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

var handleReset = (values, formProps) => {
  return window.confirm("Reset?"); // still resets after you Cancel :(
};
function clear1() {
  document.getElementById("dulplicateEmail").reset();
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

SignUpVerify.defaultProps = {
  page1: "home",
  page1link: "/",
  page2: "blood_info",
  page2link: "/blood-info",
  page3: "finance_supp",
  page3link: "/financial-support",
  page4: "partners",
  page4link: "/partner",
  page5: "about_us",
  page5link: "/about",
  page6: "sign_in",
  page6link: "/sign-in"
};
