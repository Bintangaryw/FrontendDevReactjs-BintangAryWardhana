import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-[300px] flex flex-col">
            <div>
                <h1 className="text-3xl font-bold text-center py-3">Login</h1>
            </div>

            <form action="">
                <div className="py-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="youremail@gmail.com" autoComplete="off" className="w-full p-2 bg-slate-300 rounded-lg" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" className="w-full p-2 bg-slate-300 rounded-lg" />
                </div>
            </form>

            <div className="pt-8">
                <button className="w-full p-2 bg-[#002b56] rounded-lg text-white">login</button>
            </div>

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
