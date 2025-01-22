import Header from "../../ui/header/Header";
import RevCard from "../../ui/rev-card/RevCard";
import { renderStars } from "../../../script/rating-counter/RenderStars";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const { restaurantId } = useParams();
    const [restaurantDetail, setRestaurantDetail] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getRestaurantDetail = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/restaurants/${restaurantId}`);
                setRestaurantDetail(response.data);
                setReviews(response.data.review);
            } catch (error) {
                console.log(error);
            }
        };
        getRestaurantDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className="w-full flex flex-col">
                {/* Header */}
                <div className="pb-5 py-4">
                    <Header />
                </div>

                {/* Detail */}
                <div className="flex flex-col">
                    <h1 className="text-3xl font-medium">{restaurantDetail.name}</h1>
                    <p className="italic text-gray-600">{restaurantDetail.description}</p>
                    <p>
                        <span className="flex">{renderStars(restaurantDetail.rating)} </span>
                    </p>
                    <p className={restaurantDetail.open_status ? "text-green-500" : "text-red-500"}>{restaurantDetail.open_status ? "Open" : "Close"}</p>
                    <div className="flex justify-between">
                        <div className="basis-1/2">
                            <img src={restaurantDetail.images} className="w-full py-4" />
                        </div>
                        <div>
                            <div>
                                <p>Phone: {restaurantDetail.phone}</p>
                                <p>Adress: {restaurantDetail.adress}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <div>
                    <h1 className="text-xl font-medium">Reviews</h1>
                    {reviews.map((rev) => {
                        return <RevCard key={rev.id} rev_name={rev.name} rev_text={rev.text} rev_rating={rev.rating} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Detail;
