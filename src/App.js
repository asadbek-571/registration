import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from "./Login";
import SignUp from "./stepOne/SignUp";
import SecondStep from "./stepTwo/SecondStep";
import StepThird from "./stepThere/StepThired";
import FourthStep from "./stepFour/FourthStep";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Card, Navbar, Row, Toast} from "react-bootstrap";
import {Footer} from "./footer/Footer";
import './css/navbar.css'

function App() {
    const pStyle = {
        margin: '0',
        fontWeight: "bold",
        fontSize: '18px',
        color: " #011E46",
        textAlign: 'center',
        textTransform: 'uppercase',
    }

    const font = {
        fontSize: "14px"
    }
    return (
        <Router>

            <Navbar  fixed="top" collapseOnSelect expand="lg" bg="white"  variant="light">
                <Container>

                <Navbar.Brand href="https://uniep.uz" className={'d-flex justify-content-center  align-items-center'}>

                    <img src="https://uniep.uz/assets/LOGO-SVG.svg" alt="uniep" className="w-100"/>

                    <div className="university-name text-uppercase">
                        <p style={pStyle}>University of Economics</p>
                        <p style={pStyle}>and Pedagogy</p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="me-auto "/>
                    <Nav>
                        <NavDropdown style={font} rootCloseEvent={'click'} title="Universitet"
                                     id="collasible-nav-dropdown">
                            <NavDropdown.Item style={font} href="#action/3.1">Universitet nizomi</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#action/3.2">Universitet tuzilmasi</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#action/3.3">Fakultetlar</NavDropdown.Item>
                            {/*<NavDropdown.Divider/>*/}
                            <NavDropdown.Item style={font} href="#action/3.4">Kafedralar</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#action/3.4">Markazlar va bo'limla</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#action/3.4">Erishilgan yutuqlar</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#action/3.4">Rekvizitlar</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link style={font} href="https://uniep.uz/pages/uz/yangiliklar.html">Yangiliklar</Nav.Link>

                        <NavDropdown style={font} rootCloseEvent={'click'} title="Faoliyat"
                                     id="collasible-nav-dropdown">
                            <NavDropdown.Item style={font} href="#action/3.1">Ilmiy faoliyat</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#action/3.2">Moliyaviy faoliyat</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#action/3.3">Madaniy-ma'rifiy
                                faoliyat</NavDropdown.Item>
                            {/*<NavDropdown.Divider/>*/}
                            <NavDropdown.Item style={font} href="#action/3.4">O'quv-uslubiy faoliyat</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#action/3.4">Bo'sh ish o'rni</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown style={font} rootCloseEvent={'click'} title="Interaktiv xizmatlar"
                                     id="collasible-nav-dropdown">
                            <NavDropdown.Item style={font} href="#action/3.1">Fintech-Jurnal</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#action/3.2">Student-HEMIS</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#action/3.3">Student-HEMIS</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link style={font} href="/degree">Elektron kutubxona</Nav.Link>
                        <NavDropdown style={font} rootCloseEvent={'click'} title="Qabul-2022"
                                     id="collasible-nav-dropdown">
                            <NavDropdown.Item style={font} href="#action/3.1">Magistratura</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#action/3.2">Bakalavriyat</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                {/*<Nav.Link href="/login">Login</Nav.Link>*/}
                {/*<Nav.Link href="/sign-up">Sign Up</Nav.Link>*/}
                {/*<Nav.Link href="verification">Verification</Nav.Link>*/}
                {/*<Nav.Link href="/degree">Degree</Nav.Link>*/}
                {/*<Nav.Link href="/pay">Pay</Nav.Link>  */}
                </Container>
            </Navbar>


            <div className="App container-fluid  ">

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className={"auth-box shadow"}>
                    <Routes>
                        <Route exact path="/" element={<Login/>}/>
                        <Route path="/sign-in" element={<Login/>}/>
                        <Route path="/sign-up" element={<SignUp/>}/>
                        <Route path="/verification" element={<SecondStep/>}/>
                        <Route path="/degree" element={<StepThird/>}/>
                        <Route path="/pay" element={<FourthStep/>}/>
                    </Routes>
                </div>

                <br/>
                <br/>
                <br/>
                <Card>
                    <Footer/>
                </Card></div>


        </Router>
    )
}

export default App
