import React, {useState} from 'react'
import InputMask from 'react-input-mask';
import {Col, Container, Row} from "react-bootstrap";
import "react-step-progress-bar/styles.css";
import {ProgressBar, Step} from "react-step-progress-bar";
import Check from '../../image/check.svg'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {notify} from "../../notification";
import {ToastContainer} from "react-toastify";

const SecondStep = () => {


    const navigate = useNavigate()
    const [formValue, setFormValue] = useState({
        verificationCode: '',
        // code: 1,
    });
    const labelStyle = {
        fontSize: "16px"
    }

    const handleChange = (event) => {

        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }


    const submitForm = async (e) => {
        try {
            if (formValue.verificationCode.length === 6) {
                await register(formValue)
                    .then(data => {
                        console.log(data)
                        if (data.success === true) {
                            localStorage.setItem("accessToken", data.data.accessToken)
                            localStorage.setItem("refreshToken", data.data.refreshToken)
                        }
                    })
            } else {
                notify(false, "Tasdiqlash ko'dini kiriting")
            }
        } catch (e) {
            notify(false, "Tasdiqlash ko'd noto'g'ri kiritilgan")
            console.log("Error => " + e)
        }
    }

    const register = async () => {

        const response = await axios.post(
            'https://api.register.uniep.uz/api/v1/public/auth/verify',
            formValue,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        if (response.status === 500) {
            notify(false, "Tasdiqlash ko'd noto'g'ri kiritilgan")
        }
        if (response.data.success) {
            let accessToken = response.data.data.accessToken;
            let refreshToken = response.data.data.refreshToken;
            localStorage.setItem("accessToken", accessToken)
            localStorage.setItem("refreshToken", refreshToken)
            navigate('/degree')
        }
        if (!response.data.success) {
            notify(false, response.data.message)
        }
        return response;
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
                <Container>
                    <h3>Ro'yxatdan o'tish</h3>
                    <br/>
                    <Row>
                        <Col sm={12}>
                            <ProgressBar
                                percent={33}
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
                                        <div style={progressStyleNotActive}
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
                    <Row className={'p-2'}>
                        <Col sm={12}>
                            <div className="mb-3">
                                <label style={labelStyle}>Tastdiqlash ko'di</label>
                                <InputMask
                                    className={"form-control w-50"}
                                    name={'verificationCode'}
                                    mask="999999"
                                    value={formValue.verificationCode}
                                    required={true}
                                    onChange={handleChange}
                                    onInvalid={e => e.target.setCustomValidity("Tastdiqlash ko'dini kiriting")}
                                    onInput={e => e.target.setCustomValidity('')}
                                >
                                </InputMask>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="mb-3">
                                <label style={labelStyle}>Tastdiqlash ko'di asosoiy raqaminggizga yuborildi.</label>
                            </div>
                        </Col>
                    </Row>

                    <Col md={12}>
                        <button type="button" onClick={submitForm} className="btn btn-primary btn-lg float-right">
                            Keyingisi
                        </button>
                    </Col>
                    {/*<p className="forgot-password text-right">*/}
                    {/*    Already registered <a href="/sign-in">sign in?</a>*/}
                    {/*</p>*/}
                </Container>
            </form>
            <ToastContainer/>
        </Container>
    )
}


export default SecondStep
