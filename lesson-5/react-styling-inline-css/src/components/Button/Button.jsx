import { btnStyle } from "./styles";

const Button = ({children}) => {
    return <button style={btnStyle}>{children}</button>
}

export default Button;