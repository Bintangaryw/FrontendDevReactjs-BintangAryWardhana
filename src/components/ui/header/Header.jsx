import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
    const [profile, setProfile] = useState(null);

    const handleLogout = () => {
        // remove token from localstorage and send user to login page
        localStorage.removeItem("token");
        window.location.replace("/login");
    };
    useEffect(() => {
        const getProfile = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_AUTH_URL}/api/v1/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfile(response.data?.data.email);
                console.log("profile", profile);
            } catch (error) {
                console.log(error);
            }
        };
        getProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-full pb-8">
            <div className="flex flex-col">
                <h1 className="text-5xl font-bold">Restaurants</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis hic itaque maiores porro iste est quos nisi omnis perferendis ut odit, excepturi, molestiae, quisquam delectus incidunt quas ipsa quae illum similique?
                    Minus esse ratione voluptate? Excepturi molestias eos iste rem.
                </p>
            </div>

            <div className={profile ? "flex justify-between py-5" : "hidden"}>
                <p className="text-xl">
                    Currently login as, <span className="underline">{profile}</span>{" "}
                </p>
                <button onClick={handleLogout} className="bg-[#002b56] rounded-xl p-2 text-white text-sm">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Header;
