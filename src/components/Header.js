import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RiShoppingCart2Fill } from "react-icons/ri";
import styled from "styled-components";
import "../style/header.css"
import { connect } from "react-redux";

const Header = ({ cart }) => {

    const [cartCound, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        })

        setCartCount(count)
    }, [cart, cartCound])

    return (
        <>
            <NavWrapper>
                <Navbar expand="lg">
                    <img className="logo" src={Logo} alt="logo" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Busca marcas y productos..."
                                className="lg"
                            />
                            <FaSearch />
                        </Form>
                        <Nav.Link className="ml-auto">
                            <button
                                className="cart-btn">
                                <IconContext.Provider value={{ color: "white", className: "icon" }}>
                                    <RiShoppingCart2Fill />
                                </IconContext.Provider>
                                <div className="cart-counter">
                                    {cartCound} </div>
                            </button>
                        </Nav.Link>

                        <Nav.Link className="ml-auto" href="/">
                            <div className="profile">
                                <div className="txt-profile">
                                    <p className="txt-p txt-name">Saiby Alimentos</p>
                                    <p className="txt-p txt-myprofile">Mi perfil</p>
                                </div>
                                <img className="img-profile" src={User} alt="logo" />
                            </div>

                        </Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </NavWrapper>
        </>
    )
}

const NavWrapper = styled.div`
  background-color: #25c16a;
  container {
    width: 100%;
  }
  font-family: 'Roboto', sans-serif;
  form {
    background-color: #fff;
    width: 50%;
    margin-left: 40px;
    margin-rigth: 40px;
    height: 40px;
    padding: 0 20px;
    border-radius: 100px;
    input {
        width: 90% !important;
      border: none;
    }
    input:focus {
      box-shadow: none;
    }
  }
  .nav-link {
    color: #000 !important;
  }
`;

const mapStateToProps = state => {
    return {
        cart: state.ProductList.cart
    }
}

export default connect(mapStateToProps)(Header);