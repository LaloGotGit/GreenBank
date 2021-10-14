import React from 'react'
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialIconLink, SocialIcons, SocialLogo, WebsiteRights} from './FooterElements'

const Footer = () => {

const toggleHome = () => {
    scroll.scrollToTop();
}

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Nosotros</FooterLinkTitle>
                            <FooterLink to='/'>Cómo funciona</FooterLink>
                            <FooterLink to='/'>Testimonios</FooterLink>
                            <FooterLink to='/'>Carreras</FooterLink>
                            <FooterLink to='/'>Inversionistas</FooterLink>
                            <FooterLink to='/'>Aviso de Privacidad</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Servicios</FooterLinkTitle>
                            <FooterLink to='/signin'>Cuentas</FooterLink>
                            <FooterLink to='/'>Tarjetas</FooterLink>
                            <FooterLink to='/'>Inversiones</FooterLink>
                            <FooterLink to='/'>Nuestra App</FooterLink>
                            <FooterLink to='/'>Términos y Condiciones del Servicio</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contácto</FooterLinkTitle>
                            <FooterLink to='/signin'>Servicio al cliente</FooterLink>
                            <FooterLink to='/signin'>Soporte Técnico</FooterLink>
                            <FooterLink to='/signin'>Aclaraciones</FooterLink>
                            
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>App</FooterLinkTitle>
                            <FooterLink to='/'>Google Play Store</FooterLink>
                            <FooterLink to='/'>AppStore</FooterLink>
                            <FooterLink to='/'>En la Web</FooterLink>
                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome} >
                            GreenBank
                        </SocialLogo>
                        <WebsiteRights>GB Group SOFOM de R.L. {new Date().getFullYear()} </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="#" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="#" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="#" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                            
                            
                        </SocialIcons>
                    </SocialMediaWrap>

                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
