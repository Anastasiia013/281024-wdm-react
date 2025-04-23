/** @jsxImportSource @emotion/react */
import { NavLink } from "react-router-dom";

import navbarMenuItems from "./navbarMenuItems";

import { navbarMenuStyle, navbarMenuLinkStyle } from "./styles";

const NavbarMenu = ()=> {
    const elements = navbarMenuItems.map(({href, text}) => (
        <li key={text}>
            <NavLink to={href} css={navbarMenuLinkStyle}>{text}</NavLink>
        </li>
    ));

    return <ul css={navbarMenuStyle}>{elements}</ul>
}

export default NavbarMenu;