import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useProducsFilters = ()=> {
    const [searchParams, setSearchParams] = useSearchParams();
    const priceFrom = searchParams.get("priceFrom");
    const priceTo = searchParams.get("priceTo");
    const discount = searchParams.get("discount");
    const sort = searchParams.get("sort");

    useEffect(()=> {
        const items = [];
        if(priceFrom){}
    }, []);

    const toggleDiscount = ()=> {
        setSearchParams({discount: discount ? false : true})
    }
}

export default useProducsFilters;