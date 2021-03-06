
import React from 'react'
import {ContainerNav, Logo, Button1, ContainerButtons,Icon} from './NavBar.styled'


function NavBar() {
  return (

    <ContainerNav>
      
        <Logo alt="Navbar logo"src="https://i.ibb.co/qgXk2sm/LogoGran.png"width="93.28358208955224"/>
        <Icon><i className="fa-solid fa-magnifying-glass"></i></Icon>
        <ContainerButtons>
            <Button1>Home</Button1>
          <Button1>Registration</Button1>
        </ContainerButtons>
      
    </ContainerNav>
  )
}
export default NavBar