import Header from "../../ui/header/Header";
import ResCardComponent from "../../ui/res-card/ResCardComponent";

const Main = () => {
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
                            <div className="py-2">Category</div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="grid grid-cols-4 gap-2">
                            <ResCardComponent />
                            <ResCardComponent />
                            <ResCardComponent />
                            <ResCardComponent />
                            <ResCardComponent />
                            <ResCardComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
