import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);

    // password match checker
    const checkPassword = () => {
        setPasswordValid(password === passwordConf);
    };
    useEffect(() => {
        checkPassword();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [passwordConf]);

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("https://shy-cloud-3319.fly.dev/api/v1/auth/register", {
                email,
                name,
                password,
            });

            // save the token to localstorage and send the user to mainpage
            localStorage.setItem("token", response.data?.data.token);
            window.location.replace("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-[300px] flex flex-col">
            <div>
                <h1 className="text-3xl font-bold text-center py-5">Register</h1>
            </div>
            <form onSubmit={handleRegister}>
                <div className="pb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Full Name" className="w-full p-2 bg-slate-300 rounded-lg" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="pb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="youremail@gmail.com" className="w-full p-2 bg-slate-300 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="pb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" className="w-full p-2 bg-slate-300 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="pb-3">
                    <label htmlFor="password">Password Confirmation</label>
                    <input type="password" id="password_confirmation" name="password_confirmation" className="w-full p-2 bg-slate-300 rounded-lg" value={passwordConf} onChange={(e) => setPasswordConf(e.target.value)} />
                </div>
                <p className={passwordValid ? "hidden" : "text-right text-xs text-red-600"}>Password did not match.</p>
                <div className="pt-8">
                    <button type="submit" className="w-full p-2 bg-[#002b56] rounded-lg text-white">
                        register
                    </button>
                </div>
            </form>
            <div className="flex justify-end pt-2">
                <p className="text-xs">
                    Already have an account?
                    <span className="underline text-[#002b56] pl-2">
                        <Link to="/login">login</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
