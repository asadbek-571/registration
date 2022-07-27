import React, { useState, useEffect} from 'react'
import {Alert, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
// import Click from '../image/click.svg'
// import Payme from '../image/payme.svg'
import './FourthStep.css'
import {ProgressBar, Step} from "react-step-progress-bar";
import Check from "../image/check.svg";

const FourthStep = (string, radix) => {


    const labelStyle = {
        fontSize: "16px"
    }
    // const [branch, setBranch] = useState([]);
    const [department, setDepartment] = useState([]);
    const [faculty, setFaculty] = useState([]);
    const [facultyId, setFacultyId] = useState();
    const [Variant, setVariant] = useState("");
    const [AlertText, setAlertText] = useState("");


    const [formValue, setFormValue] = React.useState({
        facultyId: 0,
        departmentId: 0,
        typeOfEducation: 0,
        languageOfEducation: 0,
        branchId: 0,
        code: 1,
    });

    const handleChange = (event) => {

        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }


    const submitForm = async (e) => {

        // let number = parseInt(formValue.facultyId);
        // let number1 = parseInt(formValue.departmentId);
        // let number2 = parseInt(formValue.typeOfEducation);
        // let number3 = parseInt(formValue.languageOfEducation);
        // let number4 = parseInt(formValue.branchId);

        // if (
        //     number > 0 &&
        //     number1 > 0 &&
        //     number2 > 0 &&
        //     number3> 0 &&
        //     number4 > 0
        // ) {

            try {
                await register(formValue)
                    .then(data => {
                        console.log(data)
                        if (data.success === false) {
                            setAlertText(data.message)
                            setVariant("danger")
                        }
                        if (data.success === true) {
                            localStorage.setItem("display","hide")
                            window.location = '/success'
                        }
                    })
            } catch (e) {
                console.log("Error => " + e)
            }
        // } else {
        //     setAlertText("Ma'lumotlar to'ldirilmagan")
        //     setVariant("danger")
        // }
    }
    const register = async (studentInfo) => {
        const accessToken = ("Bearer " + localStorage.getItem("accessToken"))
        const response = await fetch("http://api.register.uniep.uz/api/v1/public/insEdu/add", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(studentInfo) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects

    }


    useEffect(() => {

        const facultyList = JSON.parse(localStorage.getItem("faculty"))
        const departmentList = JSON.parse(localStorage.getItem("department"))
        if (departmentList == null) {
            axios
                .get("http://api.register.uniep.uz/api/v1/department/getDepartmentList")
                .then(res => {
                    localStorage.setItem("department", JSON.stringify(res.data))
                    setDepartment(res.data)
                    console.log(department)
                })
                .catch(error => console.log(error));

        }
        if (facultyList == null) {
            axios
                .get("http://api.register.uniep.uz/api/v1/faculty/getList")
                .then(res => {
                    localStorage.setItem("faculty", JSON.stringify(res.data))
                    setFaculty(res.data)
                }).catch(error => console.log(error));

        }
    });


    function getFaculty(event) {
        let id = event.target.value;
        setFacultyId(id)
        console.log(typeof facultyId)

        const faculty = JSON.parse(localStorage.getItem("faculty"))
        const department = JSON.parse(localStorage.getItem("department"))
        if (faculty != null) {
            setFaculty(faculty)
        }
        if (department != null) {
            setDepartment(department)
        }
    }

    const paymentStyle = {
        width: "150px",
        height: "150px",
        borderRadius: '10px',
        border: "2px solid black",
        margin: "3px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    }
    const progressStyle = {
        width: '40px',
        height: "40px",
        borderRadius: '50%',
        background: "#090979",
        position: "relative",
    }
    return (
        <Container>
            <Alert variant={Variant} show={!!AlertText}>
                {AlertText}
            </Alert>
            <form>

                <Container className={'p-2'}>
                    <h3>Ro'yxatdan o'tish</h3>
                    <br/>
                    <Row>
                        <Col sm={12}>
                            <ProgressBar
                                percent={100}
                                filledBackground="linear-gradient(90deg, rgba(0,160,255,1) 0%, rgba(9,9,121,1) 90%)"
                            >
                                <Step transition="scale">
                                    {({accomplished}) => (
                                        <div style={progressStyle}
                                             className={'d-flex justify-content-center align-items-center'}
                                        >
                                            <img
                                                style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                                                className={'position-absolute w-75 h-75'}
                                                src={Check}
                                            />
                                        </div>
                                    )}
                                </Step>
                                <Step transition="scale">
                                    {({accomplished}) => (
                                        <div style={progressStyle}
                                             className={'d-flex justify-content-center align-items-center'}
                                        >
                                            <img
                                                style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                                                className={'position-absolute w-75 h-75'}
                                                src={Check}
                                            />
                                        </div>
                                    )}
                                </Step>
                                <Step transition="scale">
                                    {({accomplished}) => (
                                        <div style={progressStyle}
                                             className={'d-flex justify-content-center align-items-center'}
                                        >
                                            <img
                                                style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                                                className={'position-absolute w-75 h-75'}
                                                src={Check}
                                            />
                                        </div>
                                    )}
                                </Step>
                                <Step transition="scale">
                                    {({accomplished}) => (
                                        <div style={progressStyle}
                                             className={'d-flex justify-content-center align-items-center'}
                                        >
                                            <img
                                                style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                                                className={'position-absolute w-75 h-75'}
                                                src={Check}
                                            />
                                        </div>
                                    )}
                                </Step>
                            </ProgressBar>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Fakultet</label>
                                <select
                                    className={'form-select'}
                                    required={true}
                                    name={'facultyId'}
                                    value={formValue.facultyId}
                                    onInvalid={e => e.target.setCustomValidity("Fakultetni  tanlang")}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                    onClick={getFaculty}
                                    defaultValue=""
                                >
                                    <option selected={true} value="0">Tanlang</option>
                                    {
                                        faculty && faculty.map((value, index) => <option key={index}
                                                                                         value={value.id}>{value.name}</option>)
                                    }
                                </select>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Bo'lim</label>
                                <select
                                    defaultValue=""
                                    className={'form-select'}
                                    required={true}
                                    name={'departmentId'}
                                    value={formValue.departmentId}
                                    onInvalid={e => e.target.setCustomValidity("Bo'limni  tanlang")}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                >
                                    <option selected={true} value="0">Tanlang</option>
                                    {
                                        department.map((value, index) => value.facultyId == facultyId &&
                                            <option value={value.id}>{value.nameUz}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Ta'lim turi</label>
                                <select
                                    defaultValue=""
                                    className={'form-select'}
                                    required={true}
                                    name={'typeOfEducation'}
                                    value={formValue.typeOfEducation}
                                    onInvalid={e => e.target.setCustomValidity("Ta'lim turini tanlang")}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                >
                                    <option selected={true} value="0">Tanlang</option>
                                    <option value="1">Kunduzgi</option>
                                    <option value="2">Kechgi</option>
                                    <option value="3">Sirtqi</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Ta'lim tili</label>
                                <select
                                    defaultValue=""
                                    className={'form-select'}
                                    required={true}
                                    name={'languageOfEducation'}
                                    value={formValue.languageOfEducation}
                                    onInvalid={e => e.target.setCustomValidity("Ta'lim tilini tanlang")}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                >
                                    <option selected={true} value="0">Tanlang</option>
                                    <option value="1">O'zbek</option>
                                    <option value="2">Rus</option>
                                    <option value="3">Ingliz</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Filial</label>
                                <select
                                    defaultValue=""
                                    className={'form-select'}
                                    required={true}
                                    name={'branchId'}
                                    value={formValue.branchId}
                                    onInvalid={e => e.target.setCustomValidity("Filialni tanlang")}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                >
                                    <option selected={true} value="0">Tanlang</option>
                                    <option value="1">Andijon viloyati</option>
                                    <option value="2">Toshkent shahar</option>
                                </select>
                            </div>
                        </Col>

                    </Row>
                    <hr/>
                    {/*<div className="col-lg-12">*/}
                    {/*    <div className="form-group payment__type online">*/}
                    {/*        <p>To'lov tizimini tanlang</p>*/}
                    {/*        <input type="radio" name="payment_sys" value="Payme"*/}
                    {/*               id="Payme"/>*/}
                    {/*        <label htmlFor="Payme"><img src={Payme} alt=""/></label>*/}
                    {/*        <input type="radio" name="payment_sys" value="Click"*/}
                    {/*               checked id="Click"/>*/}
                    {/*        <label htmlFor="Click"><img src={Click} alt=""/></label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </Container>
                <Col md={12}>
                    <button type="button" onClick={submitForm} className="btn btn-primary btn-lg float-right">
                        Keyingisi
                    </button>
                </Col>
                {/*<p className="forgot-password text-right">*/}
                {/*    Already registered <a href="/sign-in">sign in?</a>*/}
                {/*</p>*/}
            </form>
        </Container>
    )

}


export default FourthStep
