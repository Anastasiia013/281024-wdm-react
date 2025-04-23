/** @jsxImportSource @emotion/react */

import Container from "../layouts/Container/Container";

import FooterContacts from "./FooterContacts/FooterContacts";

import { footerStyle, footerContentStyle } from "./styles";

const Footer = ()=> {
    return (
        <footer css={footerStyle}>
            <Container>
                <div css={footerContentStyle}>
                    <FooterContacts />
                </div>
            </Container>
        </footer>
    )
}

export default Footer;