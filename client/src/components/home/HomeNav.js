import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import "./HomeNav.css";
import { Button, Icon, Sidebar, Menu } from "semantic-ui-react";

class HomeNav extends React.Component {
  state = { activeItem: 0, visible: false };

  componentDidMount() {
    // const url = window.location.pathname
    // switch (url) {
    // 	case "/dashboard":
    // 		this.activateItem(1)
    // 		break;
    // 	case "/login":
    // 		this.activateItem(3)
    // 		break;
    // 	case "/register":
    // 		this.activateItem(4)
    // 		break;
    // 	default:
    // 		this.activateItem(1)
    // 		break;
    // }
  }

  activateItem = MenuItem => {
    this.setState({ activeItem: MenuItem });
  };

  isActive(MenuItem) {
    return MenuItem === this.state.activeItem ? ActiveMenuItem : null;
  }

  handleMenuToggle = () => this.setState({ visible: !this.state.visible });
  handleSidebarHide = () => this.setState({ visible: false });

  rightNavItems = () => {
    return (
      <>
        <RightMenu>
          <NavLink to="/login" onClick={() => this.activateItem(3)}>
            <MenuItem as={this.isActive(3)}>
              <Item>Login</Item>
            </MenuItem>
          </NavLink>
          <NavLink to="/register" onClick={() => this.activateItem(4)}>
            <MenuItem as={this.isActive(4)}>
              <Item>Register</Item>
            </MenuItem>
          </NavLink>
        </RightMenu>
      </>
    );
  };

  render() {
    return (
      <>
        <NavMenu borderless>
          <MenuItem>
            <Logo src={logo} alt="logo" className="App-logo" />
            <CompanyName>Beakr</CompanyName>
          </MenuItem>
          {this.rightNavItems()}
        </NavMenu>
      </>
    );
  }
}

const MenuItem = styled.li`
  float: left;
  font-size: 1.25rem;
`;

const ActiveMenuItem = styled.li`
  float: left;
  font-size: 1.25rem;
  border-bottom: #23a24d;
  border-bottom-width: thin;
  border-bottom-style: solid;
`;

const Item = styled.p`
  display: block;
  color: white;
  text-align: center;
  padding: 10px 16px 5px 16px;
  text-decoration: none;
  z-index: 1;
`;

const Logo = styled.img`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  height: 4rem;
  width: 4rem;
`;

const CompanyName = styled.h1`
  color: white !important;
  position: absolute;
  top: 0.8rem;
  left: 7rem;
  height: 4rem;
  width: 4rem;
`;

const NavMenu = styled.ul`
  list-style-type: none;
  overflow: hidden;
  margin-left: 6rem;
`;

const RightMenu = styled.div`
  position: relative;
  text-align: center;
  border-bottom: 5px !important;
  display: flex;
  justify-content: flex-end;
  padding: 2rem 2rem 1rem 2rem;
`;

// const Dropdown = styled.div`
// 	position: relative;
// 	display: inline-block;
// 	// :hover{display: block;}
// 	z-index: 1;
// `

// const DropdownItem = styled.div`
// 	display: none;
// 	position: absolute;
// 	background-color: #f9f9f9;
// 	min-width: 100px;
// 	// box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
// 	padding: 12px 16px;
// 	z-index: 1;
// 	border: 1px solid green;

// 	${Dropdown}:hover & {
// 		display: block;
// 	}
// `

export default HomeNav;
