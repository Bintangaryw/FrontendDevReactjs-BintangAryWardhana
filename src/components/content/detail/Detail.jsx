import Header from "../../ui/header/Header";
import RevCard from "../../ui/rev-card/RevCard";

const Detail = () => {
    return (
        <div>
            <div className="w-full flex flex-col">
                {/* Header */}
                <div>
                    <Header />
                </div>

                {/* Detail */}
                <div className="flex flex-col">
                    <h1 className="text-3xl font-medium">Pasta Paradise</h1>
                    <p className="italic text-gray-600">A haven for pasta lovers with a modern twist.</p>
                    <div className="flex justify-between">
                        <div className="basis-1/2">
                            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full py-4" />
                        </div>
                        <div>
                            <div>
                                <p>Phone: 0812308103</p>
                                <p>Adress: Lorem ipsum dolor sit amet.</p>
                                <p>Rating: 4</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <div>
                    <RevCard />
                </div>
            </div>
        </div>
    );
};

export default Detail;
