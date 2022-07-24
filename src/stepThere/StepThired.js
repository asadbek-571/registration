import React, {useState, useEffect} from 'react'
import InputMask from 'react-input-mask';
import {Col, Container, Row, Toast} from "react-bootstrap";
import axios from "axios";
import "react-step-progress-bar/styles.css";
import {ProgressBar, Step} from "react-step-progress-bar";
import Check from '../image/check.svg'

const StepThird = () => {


    const labelStyle = {
        fontSize: "16px"
    }


    const [Variant, setVariant] = useState("");
    const [AlertText, setAlertText] = useState("");
    const [formValue, setFormValue] = React.useState({
        certificateOrDiploma: '',
        yearOfGraduation: '',
        information: 0,
        // code: 1,
    });

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });

    }

    const submitForm = async (e) => {

        try {
            await register(formValue)
                .then(data => {
                    console.log(data)
                    if (data.success === false) {
                        setAlertText(data.message)
                        setVariant("danger")
                    }
                    if (data.success === true) {
                        window.location='/pay'
                    }
                })
        } catch (e) {
            console.log("Error => " + e)
        }

    }
    const register = async (studentInfo) => {
        const accessToken = ("Bearer " + localStorage.getItem("accessToken"))
        const response = await fetch("http://localhost:8080/api/v1/entrantDoc", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken,
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(studentInfo) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects

    }


    function getDegree() {

    }

    const progressStyle = {
        width: '40px',
        height: "40px",
        borderRadius: '50%',
        background: "#090979",
        position: "relative",
    }
    const progressStyleNotActive = {
        width: '40px',
        height: "40px",
        borderRadius: '50%',
        background: "#E5E5E5",
        position: "relative",
    }
    return (
        <Container>
            <form>

                <Container className={'p-2'}>
                    <h3>Ro'yxatdan o'tish</h3>
                    <br/>
                    <Row>
                        <Col sm={12}>
                            <ProgressBar
                                percent={66}
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
                                        <div style={progressStyleNotActive}
                                             className={'d-flex justify-content-center align-items-center'}
                                        >
                                            <img
                                                style={{
                                                    filter: `grayscale(${accomplished ? 0 : 80}%)`,
                                                }}
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
                                <label style={labelStyle}>Ma'lumotingiz</label>
                                <select
                                    defaultValue={'0'}
                                    className={'form-select'}
                                    required={true}
                                    name={'information'}
                                    value={formValue.information}
                                    onInvalid={e => e.target.setCustomValidity("Ma'lumotinggizni  tanlang")}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                    onClick={getDegree}
                                >
                                    <option selected={true} value={'0'}>Tanlang</option>
                                    <option value="1">Shu yilgi maktab bitiruvchisiman</option>
                                    <option value="2">Umumiy o'rta ta'lim</option>
                                    <option value="3">O'rta maxsus</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Tomomlagan yilinggiz</label>
                                <InputMask
                                    className={"form-control"}
                                    name={'yearOfGraduation'}
                                    mask="9999"
                                    value={formValue.yearOfGraduation}
                                    required={true}
                                    onChange={handleChange}
                                    onInvalid={e => e.target.setCustomValidity('Tomomlagan yilinggizni kiriting')}
                                    onInput={e => e.target.setCustomValidity('')}
                                >
                                </InputMask>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Attestat / Diplom</label>
                                <InputMask
                                    type={'text'}
                                    className={"form-control"}
                                    name={'certificateOrDiploma'}
                                    placeholder={"serya raqami"}
                                    value={formValue.certificateOrDiploma}
                                    onChange={handleChange}
                                >
                                </InputMask>
                            </div>
                        </Col>
                    </Row>
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


export default StepThird
