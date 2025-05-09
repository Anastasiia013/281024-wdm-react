import { useSelector } from "react-redux";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

const Categories = ({popular = false})=> {
    const categories = useSelector();
    const items = popular ? categories.slice(0, 4) : categories;

}

export default Categories;