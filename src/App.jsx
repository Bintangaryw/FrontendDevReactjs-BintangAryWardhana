import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainpage/MainPage";
import RestaurantDetail from "./pages/detail/RestaurantDetail";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <BrowserRouter>
                <Toaster position="top-right" reverseOrder={false} />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/detail/:restaurantId" element={<RestaurantDetail />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
