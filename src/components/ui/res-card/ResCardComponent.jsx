import { renderStars } from "../../../script/rating-counter/RenderStars";
import { renderPriceIndicator } from "../../../script/price-counter/RenderPriceIndicator.jsx";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const ResCardComponent = ({ res_id, res_name, res_rating, res_category, res_price, res_openStatus }) => {
    return (
        <div className="max-w-[300px] h-full flex flex-col hover:shadow-xl p-5  ">
            <div>
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-80 " />
            </div>
            <h1 className="text-xl font-medium py-3">{res_name}</h1>
            <div className="pb-2 flex">{renderStars(res_rating)}</div>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-slate-500">
                    <p>{res_category}</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <p>{renderPriceIndicator(res_price.min)}</p>
                </div>
                <div className={res_openStatus ? "text-green-500 rounded-lg p-2 text-sm" : "text-red-500 rounded-lg p-2 text-sm"}>{res_openStatus ? "Open" : "Close"}</div>
            </div>
            <div className="mt-3">
                <Link to={`/detail/${res_id}`}>
                    <button className="w-full p-2 bg-[#002b56] rounded-lg text-white hover:bg-[#43688d]">Learn more</button>
                </Link>
            </div>
        </div>
    );
};

ResCardComponent.propTypes = {
    res_id: PropType.any,
    res_name: PropType.any,
    res_rating: PropType.any,
    res_category: PropType.any,
    res_price: PropType.any,
    res_openStatus: PropType.any,
};

export default ResCardComponent;
