import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from "./companent/stepOne/SignUp";
import SecondStep from "./companent/stepTwo/SecondStep";
import StepThird from "./companent/stepThere/StepThired";
import FourthStep from "./companent/stepFour/FourthStep";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Card, Navbar} from "react-bootstrap";
import {Footer} from "./companent/footer/Footer";
import './css/navbar.css'
import StepFive from "./companent/stepFive/StepFive";
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
                        <NavDropdown style={font} rootCloseEvent={'click'} title="Universitet" id="collasible-nav-dropdown">
                            <NavDropdown.Item style={font} href="https://uniep.uz/pages/uz/ustav.html">Universitet nizomi</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="https://uniep.uz/pages/uz/tuzilma.html">Universitet tuzilmasi</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="https://uniep.uz/pages/uz/fakultetlar.html">Fakultetlar</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="https://uniep.uz/pages/uz/kafedralar.html">Kafedralar</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="https://uniep.uz/pages/uz/markaz-bolimlar.html">Markazlar va bo'limla</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="https://uniep.uz/pages/uz/markaz-bolimlar.html">Erishilgan yutuqlar</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="https://uniep.uz/pages/uz/rekvizitlar.html">Rekvizitlar</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link style={font} href="https://uniep.uz/pages/uz/yangiliklar.html">Yangiliklar</Nav.Link>
                        <NavDropdown style={font} rootCloseEvent={'click'} title="Faoliyat" id="collasible-nav-dropdown">
                            <NavDropdown.Item style={font} href="https://uniep.uz/pages/uz/page/ilmiy.html">Ilmiy faoliyat</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="https://uniep.uz/pages/uz/page/ilmiy.html">Moliyaviy faoliyat</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="https://uniep.uz/pages/uz/page/ilmiy.html">Madaniy-ma'rifiy faoliyat</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="https://uniep.uz/pages/uz/page/ilmiy.html">O'quv-uslubiy faoliyat</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown style={font} rootCloseEvent={'click'} title="Interaktiv xizmatlar" id="collasible-nav-dropdown">
                            <NavDropdown.Item style={font} href="https://fintech.uniep.uz/">Fintech-Jurnal</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#">Student-HEMIS</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#">Student-HEMIS</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link style={font} href="https://uniep.uz/pages/uz/e-kutubxona.html">Elektron kutubxona</Nav.Link>
                        <NavDropdown style={font} rootCloseEvent={'click'} title="Qabul-2022" id="collasible-nav-dropdown">
                            <NavDropdown.Item style={font} href="#">Magistratura</NavDropdown.Item>
                            <NavDropdown.Item style={font} href="#">Bakalavriyat</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
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
                        <Route exact path="/" element={<SignUp/>}/>
                        <Route path="/verification" element={<SecondStep/>}/>
                        <Route path="/degree" element={<StepThird/>}/>
                        <Route path="/pay" element={<FourthStep/>}/>
                        <Route path="/success" element={<StepFive/>}/>
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
