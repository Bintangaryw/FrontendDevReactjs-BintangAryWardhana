import { FaStar } from "react-icons/fa";

const RevCard = () => {
    return (
        <div>
            <div>
                <div className="flex flex-col py-4">
                    <h1 className="text-xl font-medium">Reviews</h1>
                    <div className="py-3">
                        <h1>From, </h1>
                        <h1>Eve</h1>
                        <p className="text-sm">
                            <span className="text-[#002b56]">
                                <FaStar />
                            </span>
                        </p>
                        <p className="text-sm italic text-gray-500">&quot;The sushi was fresh and melted in my mouth.&quot;</p>
                    </div>
                    <div className="py-3">
                        <h1>From, </h1>
                        <h1>Eve</h1>
                        <p className="text-sm">
                            <span className="text-[#002b56]">
                                <FaStar />
                            </span>
                        </p>
                        <p className="text-sm italic text-gray-500">&quot;The sushi was fresh and melted in my mouth.&quot;</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevCard;
