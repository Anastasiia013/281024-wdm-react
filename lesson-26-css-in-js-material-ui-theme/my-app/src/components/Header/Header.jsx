/** @jsxImportSource @emotion/react */
import { Box } from "@mui/material";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderCart from "./HeaderCart/HeaderCart";
import SwitchThemeButton from "./SwitchThemeButton/SwitchThemeButton";

import { headerStyle, rightInfo } from "./styles.js";

const Header = ()=> {
    return (
        <header css={headerStyle}>
            <HeaderLogo />
            <HeaderMenu />
            <Box css={rightInfo}>
                <HeaderCart />
                <SwitchThemeButton />
            </Box>
        </header>
    )
}

export default Header;