import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainpage/MainPage";
import RestaurantDetail from "./pages/detail/RestaurantDetail";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/detail" element={<RestaurantDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
