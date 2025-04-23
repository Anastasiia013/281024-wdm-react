/** @jsxImportSource @emotion/react */

import Container from "../layouts/Container/Container";

import NavbarLogo from "./NavbarLogo/NavbarLogo";

import { navbarStyle } from "./styles";

const Navbar = ()=> {
    return (
        <nav css={navbarStyle}>
            <Container>
                <NavbarLogo />
            </Container>
        </nav>
    )
}

export default Navbar;