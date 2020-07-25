import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, Collapse, NavbarToggler} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class NavbarClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        };
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
        return (
            <div>
            <Navbar className="navBar" dark expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                                AnimeHouse
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
            </Navbar>
            </div>
        );
    }
}

export default NavbarClass
{/* <Navbar bg="light" expand="lg">
                
                <NavbarBrand className="">
                    <Link to="/">AnimeHouse</Link>
                </NavbarBrand>
                <NavbarToggler />
                
                
                <Nav className="nav-right">
                    <NavLink to="/" >Home </NavLink>
                    <NavLink to="/aboutus">About Us</NavLink>
                </Nav>

            </Navbar> */}