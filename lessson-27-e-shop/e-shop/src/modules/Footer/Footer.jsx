/** @jsxImportSource @emotion/react */

import Container from "../layouts/Container/Container";

import FooterContacts from "./FooterContacts/FooterContacts";
import FooterSocialLinks from "./FooterSocialLinks/FooterSocialLinks";

import { footerStyle, footerContentStyle } from "./styles";

const Footer = ()=> {
    return (
        <footer css={footerStyle}>
            <Container>
                <div css={footerContentStyle}>
                    <FooterContacts />
                    <FooterSocialLinks />
                </div>
            </Container>
        </footer>
    )
}

export default Footer;