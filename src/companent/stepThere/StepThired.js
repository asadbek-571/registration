import React, {useState} from 'react'
import InputMask from 'react-input-mask';
import {Col, Container, Row} from "react-bootstrap";
import "react-step-progress-bar/styles.css";
import {ProgressBar, Step} from "react-step-progress-bar";
import Check from '../../image/check.svg'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import {notify} from "../../notification";
import {ToastContainer} from "react-toastify";

const StepThird = () => {


    const labelStyle = {
        fontSize: "16px"
    }


    const navigate = useNavigate()
    const [formValue, setFormValue] = React.useState({
        certificateOrDiploma: '',
        yearOfGraduation: '',
        information: 0,
        code: 1,
    });

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });

    }

    const submitForm = async (e) => {
        if (formValue.information > 0 &&
            formValue.yearOfGraduation !== ''
        ) {
            try {
                await register(formValue)
                    .then(data => {

                    })
            } catch (e) {
                console.log("Error => " + e)
            }
        } else {
            notify(false,"Ma'lumotlar to'ldirilmagan")
        }
    }

    const register = async () => {
        const accessToken = ("Bearer " + localStorage.getItem("accessToken"))
        const response = await axios.post(
            'https://api.register.uniep.uz/api/v1/entrantDoc',
            formValue,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': accessToken,
                },
            }
        )

        if (response.data.success) {
            navigate('/pay')
        }
        if (!response.data.success) {
            notify(false, response.data.message)
        }
        return response;
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
            <ToastContainer/>
        </Container>
    )
}


export default StepThird
