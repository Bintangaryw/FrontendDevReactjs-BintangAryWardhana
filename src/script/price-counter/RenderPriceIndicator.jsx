import { HiOutlineCurrencyDollar } from "react-icons/hi";

export const renderPriceIndicator = (priceMin) => {
    let dollarCount = 0;

    if (priceMin < 10000) {
        dollarCount = 1;
    } else if (priceMin >= 10000 && priceMin < 20000) {
        dollarCount = 2;
    } else if (priceMin >= 20000) {
        dollarCount = 3;
    }

    return Array(dollarCount)
        .fill(null)
        .map((_, index) => <HiOutlineCurrencyDollar key={index} className="inline text-slate-500" />);
};
