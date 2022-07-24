import React, {Component, useState, useEffect} from 'react'
import PhoneInput from "react-phone-number-input/react-hook-form-input-core";
import InputMask from 'react-input-mask';
import {Col, Container, Form, Row, Toast} from "react-bootstrap";
import axios from "axios";
import Click from '../image/click.svg'
import Payme from '../image/payme.svg'
import './FourthStep.css'
import {ProgressBar, Step} from "react-step-progress-bar";
import Check from "../image/check.svg";

const FourthStep = () => {


    const labelStyle = {
        fontSize: "16px"
    }
    const [district, setDistrict] = useState([]);
    const [region, setRegion] = useState([]);
    const [regionId, setRegionId] = useState();

    const [formValue, setFormValue] = React.useState({
        faculty: '',
        department: '',
        typeOfEducation: '',
        languageOfEducation: '',
        branch: '',
        code: 1,
    });

    const handleChange = (event) => {

        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });

    }


    function submitForm() {

        axios({

            // Endpoint to send files
            url: "http://localhost:8080/api/v1/user/registerForEntrant",
            method: "POST",
            headers: {
                contentType: "application/json",
                // Add any auth token here
                // authorization: "your token comes here",
            },

            // Attaching the form data
            data: formValue,
        })

            // Handle the response from backend here
            .then((res) => {
                window.location = "/verification"
            })

            // Catch errors if any
            .catch((err) => {
                console.log(err)
            });

    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/region/getRegions")
            .then(res => {
                localStorage.setItem("regions", JSON.stringify(res.data.data))
                setRegion(res.data.data)
            })
            .catch(error => console.log(error));

        axios
            .get("http://localhost:8080/api/v1/district/getDistrictList")
            .then(res => {
                localStorage.setItem("districts", JSON.stringify(res.data.data))
            })
            .catch(error => console.log(error));

    });


    function getFaculty() {

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
    const progressStyle={
        width:'40px',
        height:"40px",
        borderRadius:'50%',
        background:"#090979",
        position:"relative",
    }
    return (
        <Container >
            <form onSubmit={submitForm}>

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
                                    {({ accomplished }) => (
                                        <div style={progressStyle}
                                             className={'d-flex justify-content-center align-items-center'}
                                        >
                                            <img
                                                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                                className={'position-absolute w-75 h-75'}
                                                src={Check}
                                            />
                                        </div>
                                    )}
                                </Step>
                                <Step transition="scale">
                                    {({ accomplished }) => (
                                        <div style={progressStyle }
                                             className={'d-flex justify-content-center align-items-center'}
                                        >
                                            <img
                                                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                                className={'position-absolute w-75 h-75'}
                                                src={Check}
                                            />
                                        </div>
                                    )}
                                </Step>
                                <Step transition="scale">
                                    {({ accomplished }) => (
                                        <div style={progressStyle}
                                             className={'d-flex justify-content-center align-items-center'}
                                        >
                                            <img
                                                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                                className={'position-absolute w-75 h-75'}
                                                src={Check}
                                            />
                                        </div>
                                    )}
                                </Step>
                                <Step transition="scale">
                                    {({ accomplished }) => (
                                        <div style={progressStyle }
                                             className={'d-flex justify-content-center align-items-center'}
                                        >
                                            <img
                                                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
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
                                    name={'faculty'}
                                    value={formValue.faculty}
                                    onInvalid={e => e.target.setCustomValidity("Fakultetni  tanlang")}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                    onClick={getFaculty}
                                >
                                    <option selected={true} value="0">Tanlang</option>
                                    {/*{*/}
                                    {/*    region.map((value, index) => <option value={value.id}>{value.nameUz}</option>)*/}
                                    {/*}*/}
                                </select>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Bo'lim</label>
                                <select
                                    className={'form-select'}
                                    required={true}
                                    name={'department'}
                                    value={formValue.department}
                                    onInvalid={e => e.target.setCustomValidity("Bo'limni  tanlang")}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                    onClick={getFaculty}
                                >
                                    <option selected={true} value="0">Tanlang</option>
                                    {/*{*/}
                                    {/*    region.map((value, index) => <option value={value.id}>{value.nameUz}</option>)*/}
                                    {/*}*/}
                                </select>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Ta'lim turi</label>
                                <select
                                    className={'form-select'}
                                    required={true}
                                    name={'typeOfEducation'}
                                    value={formValue.typeOfEducation}
                                    onInvalid={e => e.target.setCustomValidity("Ta'lim turini tanlang")}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                    onClick={getFaculty}
                                >
                                    <option selected={true} value="0">Tanlang</option>
                                    {/*{*/}
                                    {/*    region.map((value, index) => <option value={value.id}>{value.nameUz}</option>)*/}
                                    {/*}*/}
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Ta'lim tili</label>
                                <select
                                    className={'form-select'}
                                    required={true}
                                    name={'languageOfEducation'}
                                    value={formValue.languageOfEducation}
                                    onInvalid={e => e.target.setCustomValidity("Ta'lim tilini tanlang")}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                    onClick={getFaculty}
                                >
                                    <option selected={true} value="0">Tanlang</option>
                                    {/*{*/}
                                    {/*    region.map((value, index) => <option value={value.id}>{value.nameUz}</option>)*/}
                                    {/*}*/}
                                </select>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Filial</label>
                                <select
                                    className={'form-select'}
                                    required={true}
                                    name={'branch'}
                                    value={formValue.branch}
                                    onInvalid={e => e.target.setCustomValidity("Filialni tanlang")}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                    onClick={getFaculty}
                                >
                                    <option selected={true} value="0">Tanlang</option>
                                    {/*{*/}
                                    {/*    region.map((value, index) => <option value={value.id}>{value.nameUz}</option>)*/}
                                    {/*}*/}
                                </select>
                            </div>
                        </Col>

                    </Row>
                    <hr/>
                    <div className="col-lg-12">
                        <div className="form-group payment__type online">
                            <p>To'lov tizimini tanlang</p>
                            <input type="radio" name="payment_sys" value="Payme"
                                   id="Payme"/>
                            <label htmlFor="Payme"><img src={Payme} alt=""/></label>
                            <input type="radio" name="payment_sys" value="Click"
                                   checked id="Click"/>
                            <label htmlFor="Click"><img src={Click} alt=""/></label>
                        </div>
                    </div>
                </Container>
                <Col md={12}>
                    <button type="submit" className="btn btn-primary btn-lg float-right">
                        To'lov
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
