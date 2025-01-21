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
                const response = await axios.get(`https://678f1c2f49875e5a1a908e4b.mockapi.io/api/v1/restaurants/${restaurantId}`);
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
                            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full py-4" />
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
