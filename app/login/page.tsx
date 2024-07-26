'use client'
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { HOME } from "@/constants/ROUTES";
import { useRouter } from "next/navigation";
import { userlogin, dashboardSelector } from "@/store/reducers/dashboard";

function Login() {
    const [user, setUser] = useState({ Useremail: "", Password: "" });
    const loginDetails = useSelector(dashboardSelector);
    const dispatch = useDispatch();
    const router = useRouter();
    
    const handleLogin = async () => {
        if (!user.Useremail) {
            toast.error("Please Enter email");
            return;
        }

        if (!user.Password) {
            toast.error("Please Enter Password");
            return;
        }

        try {
            await dispatch(userlogin(user));
            // Assuming userlogin action is async and returns a promise
            router.push(HOME);
        } catch (error) {
            toast.error("Login failed. Please try again.");
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        if (loginDetails.access_token) {
            router.push(HOME);
        }
    }, [loginDetails]);

    return (
        <div className="h-[100vh] bg-blue d-flex align-items-center justify-content-center px-3">
            <div className="shadow bg-white mt-4 rounded-3 pb-3 col-lg-5 col-md-8 my-md-5 mx-auto p-md-5 p-3">
                <h1 className="text-center">Login</h1>
                <div className="mt-5">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 mb-4">
                            <TextField
                                className="w-100"
                                required
                                id="Useremail"
                                label="Email"
                                name="Useremail"
                                value={user.Useremail}
                                onChange={handleChange}
                                placeholder="Email"
                                type="email"
                            />
                        </div>
                        <div className="col-lg-12 col-md-12 mb-4">
                            <TextField
                                className="w-100"
                                required
                                name="Password"
                                type="password"
                                id="Password"
                                label="Password"
                                placeholder="Password"
                                value={user.Password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-lg-12 col-md-12 mb-4">
                            <button
                                onClick={handleLogin}
                                className="btn btn-blue w-100 btn-lg fs-5 h-auto"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
