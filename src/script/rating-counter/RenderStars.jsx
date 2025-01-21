import { FaStar } from "react-icons/fa";

// function to render rating stars
export const renderStars = (rating) => {
    // get rounded rating value
    const roundedRating = Math.floor(Number(rating) || 0);

    // array for each rating
    return Array(roundedRating)
        .fill(null)
        .map((_, index) => <FaStar key={index} className="text-yellow-500" />);
};
