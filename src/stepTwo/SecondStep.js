import React ,{useState}from 'react'
import InputMask from 'react-input-mask';
import {Col, Container, Row, Toast} from "react-bootstrap";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import Check from '../image/check.svg'

const SecondStep = () => {


    const [Variant, setVariant] = useState("");
    const [AlertText, setAlertText] = useState("");
    const [formValue, setFormValue] = React.useState({
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

    const register = async (studentInfo) => {

        const response = await fetch("http://localhost:8080/api/v1/public/auth/verify", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(studentInfo) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects

    }

    const submitForm = async (e) => {
        try {
            if (formValue.verificationCode.length===6) {
                await register(formValue)
                    .then(data => {
                        console.log(data)
                        if (data.success === false) {
                            setAlertText(data.message)
                            setVariant("danger")
                        }
                        if (data.success === true) {
                            localStorage.setItem("accessToken", data.data.accessToken)
                            localStorage.setItem("refreshToken", data.data.refreshToken)
                            window.location = '/degree'
                        }
                    })
            }else {
                setAlertText("Tasdiqlash ko'dini kiriting")
                setVariant("danger")
            }
        } catch (e) {
            console.log("Error => "+e)
        }

    }

    const progressStyle={
        width:'40px',
        height:"40px",
        borderRadius:'50%',
        background:"#090979",
        position:"relative",
    }
    const progressStyleNotActive={
        width:'40px',
        height:"40px",
        borderRadius:'50%',
        background:"#E5E5E5",
        position:"relative",
    }
    return (
        <Container>
            <form >
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
                                    <div style={progressStyleNotActive}
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
                                    <div style={progressStyleNotActive }
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
                        <button type="button"  onClick={submitForm} className="btn btn-primary btn-lg float-right">
                            Keyingisi
                        </button>
                    </Col>
                    {/*<p className="forgot-password text-right">*/}
                    {/*    Already registered <a href="/sign-in">sign in?</a>*/}
                    {/*</p>*/}
                </Container>
            </form>
        </Container>
    )
}


export default SecondStep
