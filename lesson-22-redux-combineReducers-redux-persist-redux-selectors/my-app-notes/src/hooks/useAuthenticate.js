import { useSelector } from "react-redux";

import { selectIsAuthenticate } from "../redux/selectors";

const useAuthenticate = ()=> {
    const isAuthenticate = useSelector(selectIsAuthenticate);

    return isAuthenticate;
}

export default useAuthenticate;