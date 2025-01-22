import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="w-[300px] flex flex-col">
            <div>
                <h1 className="text-3xl font-bold text-center py-3">Register</h1>
            </div>
            <form autoComplete="off">
                <div className="py-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Full Name" className="w-full p-2 bg-slate-300 rounded-lg" />
                </div>
                <div className="py-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="youremail@gmail.com" className="w-full p-2 bg-slate-300 rounded-lg" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" className="w-full p-2 bg-slate-300 rounded-lg" />
                </div>
            </form>
            <div className="pt-8">
                <button className="w-full p-2 bg-[#002b56] rounded-lg text-white">register</button>
            </div>
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
