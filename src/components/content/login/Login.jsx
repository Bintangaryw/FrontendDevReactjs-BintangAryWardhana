import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, {
                email,
                password,
            });
            // save the token to localstorage and send user to mainpage
            localStorage.setItem("token", response.data?.data.token);
            window.location.replace("/");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message);
            } else {
                console.log(error);
            }
        }
    };

    return (
        <div className="w-[300px] flex flex-col">
            <div>
                <h1 className="text-3xl font-bold text-center py-3">Login</h1>
            </div>

            <form onSubmit={handleLogin}>
                <div className="py-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="youremail@gmail.com" autoComplete="off" className="w-full p-2 bg-slate-300 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" className="w-full p-2 bg-slate-300 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="pt-8">
                    <button type="submit" className="w-full p-2 bg-[#002b56] rounded-lg text-white">
                        login
                    </button>
                </div>
            </form>

            <div className="flex justify-end pt-2">
                <p className="text-xs">
                    Or create your new account,
                    <span className="underline text-[#002b56] pl-2">
                        <Link to="/register">here</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
