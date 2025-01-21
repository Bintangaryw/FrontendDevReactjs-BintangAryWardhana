import { renderStars } from "../../../script/rating-counter/RenderStars";
import PropType from "prop-types";

const RevCard = ({ rev_name, rev_text, rev_rating }) => {
    return (
        <div>
            <div>
                <div className="flex flex-col">
                    <div className="py-3">
                        <h1 className="text-sm">From, </h1>
                        <h1>{rev_name}</h1>
                        <p className="text-sm flex">{renderStars(rev_rating)}</p>
                        <p className="text-sm italic text-gray-500">&quot;{rev_text}&quot;</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

RevCard.propTypes = {
    rev_name: PropType.any,
    rev_text: PropType.any,
    rev_rating: PropType.any,
};
export default RevCard;
