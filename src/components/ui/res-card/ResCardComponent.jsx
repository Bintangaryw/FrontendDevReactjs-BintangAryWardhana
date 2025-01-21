import { FaStar } from "react-icons/fa";
// import { FaStarHalf } from "react-icons/fa";

const ResCardComponent = () => {
    return (
        <div className="max-w-[260px] h-full flex flex-col hover:shadow-xl p-5  ">
            <div>
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-80 " />
            </div>
            <h1 className="text-xl font-medium py-3">Restaurant name</h1>
            <div className="pb-2">
                <FaStar />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-slate-500">
                    <p>Italian</p>
                    <p className="px-2">&#x2022;</p>
                    <p>Price</p>
                </div>
                <div className="text-green-500 rounded-lg p-2 text-sm">Open</div>
            </div>
            <div className="mt-3">
                <button className="w-full p-2 bg-[#002b56] rounded-lg text-white hover:bg-[#43688d]">Learn more</button>
            </div>
        </div>
    );
};

export default ResCardComponent;
