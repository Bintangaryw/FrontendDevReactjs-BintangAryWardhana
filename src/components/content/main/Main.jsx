import Header from "../../ui/header/Header";
import ResCardComponent from "../../ui/res-card/ResCardComponent";
import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [categories, setCategories] = useState([]);
    const getCategoryNames = (categoryIDs) => {
        return categoryIDs.map((id) => {
            const category = categories.find((cat) => cat.id === id);
            return category ? category.name : "Invalid";
        });
    };

    useEffect(() => {
        const getRestaurantsData = async () => {
            try {
                const response = await axios.get(`https://678f1c2f49875e5a1a908e4b.mockapi.io/api/v1/restaurants`);
                console.log(response.data);
                setRestaurants(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getRestaurantsData();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get(`https://678f1c2f49875e5a1a908e4b.mockapi.io/api/v1/category`);
                console.log(response.data);
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCategories();
    }, []);

    return (
        <div>
            <div className="flex flex-col">
                {/* Header */}
                <div className="pb-5 py-4">
                    <Header />
                </div>

                {/* Filter */}
                <div className="flex ">
                    <div className="pt-5 w-[280px]">
                        <div className="flex flex-col ">
                            <h1 className="text-xl pb-8">Filter by:</h1>

                            {/* Open status filter */}
                            <div className="pb-5">
                                <p>Open Status</p>
                                <input type="checkbox" id="open_status" name="open_status" />
                                <label htmlFor="open_status" className="pl-2 text-sm">
                                    Currently open
                                </label>
                            </div>

                            {/* Price range filter */}
                            <div className="pb-5">
                                <p>Price Range</p>
                                <label htmlFor="min" className="text-sm">
                                    Min
                                </label>
                                <input type="Text" id="min" name="min" placeholder="min price" className="border-black p-1" />
                                <label htmlFor="min" className="text-sm">
                                    Max
                                </label>
                                <input type="Text" id="max" name="max" placeholder="max price" className="border-black p-1" />
                            </div>

                            {/* Category filter */}
                            <div className="flex flex-col py-2">
                                {categories.map((cat) => {
                                    return (
                                        <div key={cat.id}>
                                            <input type="radio" id={cat.name} name="fav_language" value={cat.name} />
                                            <label htmlFor={cat.name} className="pl-2">
                                                {cat.name}
                                            </label>
                                        </div>
                                    );
                                })}
                                <div>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="grid grid-cols-4 gap-2">
                            {restaurants.map((res_data) => {
                                const categoryNames = getCategoryNames(res_data.categoryID).join(", ");
                                return (
                                    <ResCardComponent
                                        key={res_data.id}
                                        res_id={res_data.id}
                                        res_name={res_data.name}
                                        res_openStatus={res_data.open_status}
                                        res_category={categoryNames}
                                        res_price={res_data.price.min}
                                        res_rating={res_data.rating}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
