import DiscountSection from "../../modules/DiscountSection/DiscountSection";
import Categories from "../../modules/Categories/Categories";
import GetDiscount from "../../modules/GetDiscount/GetDiscount";

const HomePage = ()=> {
    return (
        <main>
            <DiscountSection />
            <Categories popular />
            <GetDiscount />
        </main>
    )
}

export default HomePage;