import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./signin.css";
import "./home.css";
import Footer from "../components/Footer/footer";
import Navs from "../components/Nav2/Nav2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Axios library is used for ingration and connection of frontend with backend.
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import AuthContext from "../auth/context";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

// Integration
export default function SignIn() {
    const navigate = useNavigate();

    const authContext = useContext(AuthContext);
    const validateSchema = Yup.object().shape({
        email: Yup.string().required().email().label("email"),
        password: Yup.string().required().label("password"),
    });

    const [data, setData] = useState({});
    const [role, setRole] = useState("user");

    const SignIn = (formData) => {
        console.log("Form Data: ", formData);

        axios({
            method: "post",
            url: "/api/auth/signin",
            data: {
                email: formData.email,
                password: formData.password,
                role,
            },
        })
            .then((res) => {
                console.log("respond is:", res);
                if (res.data.message === "please provide email & password!") {
                    const response1 = res.data.message;
                    document.getElementById("wrongCredintials").innerHTML = response1;
                }

                if (res.data.message === "wrong email or password!") {
                    const response2 = res.data.message;
                    document.getElementById("wrongCredintials").innerHTML = response2;
                }

                if (res.data.message === "wrong email or password!") {
                    const response3 = res.data.message;
                    document.getElementById("wrongCredintials").innerHTML = response3;
                }
                if (res.data.message === "Success") {
                    let token = res.data.token;

                    localStorage.setItem("token", token);



                    const user = jwtDecode(res.data.token);

                    setData(user);
                    //authContext.setUser(user);

                    console.log("respeonse is:", res.data.token);
                    var decoded = jwt_decode(res.data.token);
                    //authContext.setUser(decoded);
                    console.log("Logged user:", decoded);

                    if (role === "user") {
                        return navigate("/user");
                    } else if (role === "admin") {
                        return navigate("/admin");
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Navs />

            <div className="container text-center">
                <div className="sign-In">
                    <h2 className="heading">Sign In</h2>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(formData) => SignIn(formData)}
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
                                    type="text"
                                    id="email"
                                    placeholder="email"
                                    style={allStyles.input}
                                    onChange={handleChange("email")}
                                    onBlur={() => setFieldTouched("email")}
                                />
                                {touched.email && <p style={styling}>{errors.email}</p>}
                                <input
                                    required
                                    type="password"
                                    id="password"
                                    placeholder="password"
                                    style={allStyles.input}
                                    onChange={handleChange("password")}
                                    onBlur={() => setFieldTouched("password")}
                                />
                                {touched.password && <p style={styling}>{errors.password}</p>}

                                <label id="leble">Login As:</label>
                                <select
                                    className="select1"
                                    style={{ background: "#0606061f" }}
                                    name="login-as"
                                    onChange={(event) => {
                                        setRole(event.target.value);
                                    }}
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                                <br />
                                <button
                                    className="btn btn-primary"
                                    id="submit-form"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Sign In
                                </button>
                                <div className="AlreadyHaveAccount">
                                    <p>
                                        Don't have an account?
                                        <NavLink to="/sign-up" className="f">
                                            Create Account
                                        </NavLink>
                                    </p>
                                    <NavLink to="/forgot-password" className="f">
                                        Forgot Password?
                                    </NavLink>
                                </div>
                            </>
                        )}
                    </Formik>
                </div>
            </div>

            <Footer />
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
