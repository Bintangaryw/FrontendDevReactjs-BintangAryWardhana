import Header from "../../ui/header/Header";
import ResCardComponent from "../../ui/res-card/ResCardComponent";
import axios from "axios";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Main = () => {
    const [categories, setCategories] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // filter state
    const [isOpen, setIsOpen] = useState(false);
    const [priceFilter, setPriceFilter] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    // filter handler
    // open status handle filter
    const handleOpenStatusChange = (e) => {
        setIsOpen(e.target.checked);
    };

    // price range handle filter
    const handlePriceFilterChange = (e) => {
        setPriceFilter(e.target.value);
    };

    // category handle filter
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    // filter reset
    const handleResetFilter = () => {
        setIsOpen(false);
        setPriceFilter("");
        setSelectedCategory("");
    };

    // get categories name by id
    const getCategoryNames = (categoryIDs) => {
        return categoryIDs.map((id) => {
            const category = categories.find((cat) => cat.id === id);
            return category ? category.name : "Invalid";
        });
    };

    // fetch all inital restaurants data
    useEffect(() => {
        const getRestaurantsData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/restaurants`);
                setRestaurants(response.data);
                setFilteredRestaurants(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    toast.error(error.response?.data?.message);
                } else {
                    console.log(error);
                }
            }
        };
        getRestaurantsData();
    }, []);

    // fetch all categories
    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/category`);
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCategories();
    }, []);

    // set filtered restaurants
    useEffect(() => {
        let filtered = restaurants;

        // filter by open status
        if (isOpen) {
            filtered = filtered.filter((restaurant) => restaurant.open_status === true);
        }

        // filter by price range
        if (priceFilter === "price1") {
            filtered = filtered.filter((restaurant) => restaurant.price.min < 10000);
        } else if (priceFilter === "price2") {
            filtered = filtered.filter((restaurant) => restaurant.price.min >= 10000 && restaurant.price.min < 20000);
        } else if (priceFilter === "price3") {
            filtered = filtered.filter((restaurant) => restaurant.price.min >= 20000);
        }

        // filter by category
        if (selectedCategory) {
            filtered = filtered.filter((restaurant) => restaurant.categoryID.includes(selectedCategory));
        }

        setFilteredRestaurants(filtered);
    }, [isOpen, priceFilter, selectedCategory, restaurants]); // refresh every changes on filter

    return (
        <div>
            <div className="flex flex-col">
                {/* Header */}
                <div className="pb-5 py-4">
                    <Header />
                </div>

                {/* Filter Navigation */}
                <div className="flex ">
                    <div className="pt-5 w-[280px]">
                        <div className="flex flex-col ">
                            <h1 className="text-xl pb-8">Filter by:</h1>

                            {/* Open status filter */}
                            <div className="pb-5">
                                <p>Open Status</p>
                                <input type="checkbox" id="open_status" name="open_status" checked={isOpen} onChange={handleOpenStatusChange} />
                                <label htmlFor="open_status" className="pl-2 text-sm">
                                    Currently open
                                </label>
                            </div>

                            {/* Price filter */}
                            <div className="pb-5">
                                <p>Price</p>
                                <div className="flex flex-col">
                                    <div className="flex">
                                        <input type="radio" id="price1" name="price" value="price1" checked={priceFilter === "price1"} onChange={handlePriceFilterChange} />
                                        <label htmlFor="price1" className="pl-2">
                                            <div className="flex">
                                                <HiOutlineCurrencyDollar />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="flex">
                                        <input type="radio" id="price2" name="price" value="price2" checked={priceFilter === "price2"} onChange={handlePriceFilterChange} />
                                        <label htmlFor="price2" className="pl-2">
                                            <div className="flex">
                                                <HiOutlineCurrencyDollar />
                                                <HiOutlineCurrencyDollar />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="flex">
                                        <input type="radio" id="price3" name="price" value="price3" checked={priceFilter === "price3"} onChange={handlePriceFilterChange} />
                                        <label htmlFor="price3" className="pl-2">
                                            <div className="flex">
                                                <HiOutlineCurrencyDollar />
                                                <HiOutlineCurrencyDollar />
                                                <HiOutlineCurrencyDollar />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Category filter */}
                            <div className="flex flex-col py-2">
                                {categories.map((cat) => {
                                    return (
                                        <div key={cat.id}>
                                            <input
                                                type="radio"
                                                id={cat.name}
                                                name="category"
                                                value={cat.id} // Menggunakan ID kategori untuk filter
                                                checked={selectedCategory === cat.id} // Menandakan kategori yang dipilih
                                                onChange={handleCategoryChange}
                                            />
                                            <label htmlFor={cat.name} className="pl-2">
                                                {cat.name}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>

                            <div>
                                <button onClick={handleResetFilter} className="w-full bg-slate-400 p-2 rounded-lg text-white">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Restaurant Cards */}
                    <div className="w-full">
                        <div className="grid grid-cols-4 gap-2">
                            {filteredRestaurants.map((res_data) => {
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
                                        res_image={res_data.images}
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
