import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink,SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle})=> {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>  
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} >
                        Nosotros
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Descubre
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Servicios
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Registrarse
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Ingresar</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
