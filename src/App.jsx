import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainpage/MainPage";
import RestaurantDetail from "./pages/detail/RestaurantDetail";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";
import { Toaster } from "react-hot-toast";
import RouteProtected from "./components/utils/route-protect/RouteProtector";

function App() {
    return (
        <>
            <BrowserRouter>
                <Toaster position="top-right" reverseOrder={false} />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    {/* logged in only user routes */}
                    <Route element={<RouteProtected />}>
                        <Route path="/detail/:restaurantId" element={<RestaurantDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
