import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const NavigationLgContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  top: 60px;
  background-color: ${props => props.color};
  @media screen and (max-width: 786px) {
    display: none;
  }
`
export const NavOptions = styled.ul`
  display: flex;
  flex-dircetion: column;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavBar = styled.div`
  display: flex;
`
export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row:
  align-items: center;
  background-color: ${props => props.color};
  padding-left: 20px;

`
export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 15px;
  color: ${props => props.color};
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: ${props => props.color};
`
export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`
export const ContactHeading = styled.h1`
  font-family: 'Roboto';
`
export const ContactNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
`
export const NavigationSmallContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => props.color};
  position: fixed;
  bottom: 0;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
