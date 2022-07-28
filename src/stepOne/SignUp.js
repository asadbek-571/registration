import React, {useState, useEffect} from 'react'
import InputMask from 'react-input-mask';
import {Alert, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import "react-step-progress-bar/styles.css";
import {ProgressBar, Step} from "react-step-progress-bar";
import Check from '../image/check.svg'
// import {useHistory} from "react-router-dom";

const SignUp = () => {


    const labelStyle = {
        fontSize: "16px"
    }
    const [district, setDistrict] = useState([]);
    const [region, setRegion] = useState([]);
    const [regionId, setRegionId] = useState();
    const [Variant, setVariant] = useState("");
    const [AlertText, setAlertText] = useState("");
    const [formValue, setFormValue] = React.useState({
        firstName: '',
        lastName: '',
        fatherName: '',
        phoneNumber: '998',
        otherPhone: '998',
        passport: '',
        birthday: '',
        regionId: 0,
        districtId: 0,
        code: 1,
    });
    // const history = useHistory()
    const handleChange = (event) => {
        event.preventDefault()
        if (event.target.name === 'passport') {
            setFormValue({
                ...formValue,
                [event.target.name]: event.target.value.toUpperCase()
            });
        } else {
            setFormValue({
                ...formValue,
                [event.target.name]: event.target.value
            });
        }
    }


    const submitForm = async (e) => {
        if (formValue.phoneNumber.length === 16 &&
            formValue.passport.length === 10 &&
            formValue.firstName !== '' &&
            formValue.lastName !== '' &&
            formValue.fatherName !== '' &&
            formValue.birthday !== '' &&
            formValue.districtId > 0 &&
            formValue.regionId > 0
        ) {
            if (formValue.otherPhone === '998') {
                setFormValue({
                    ...formValue,
                    otherPhone: "null"
                });
            }
            if (formValue.otherPhone.startsWith("+")) {
                setFormValue({
                    ...formValue,
                    otherPhone: formValue.otherPhone.substring(1, formValue.otherPhone.length - 1)
                });
            }
            if (formValue.phoneNumber.startsWith("+")) {
                setFormValue({
                    ...formValue,
                    phoneNumber: formValue.phoneNumber.substring(1, formValue.phoneNumber.length - 1)
                });
            }

            try {
                await register(formValue)
                    .then(data => {
                        console.log(data)
                        if (data.success === false) {
                            setAlertText(data.message)
                            setVariant("danger")
                        }
                        if (data.success === true) {
                            window.location = '/verification'
                        }
                    })
            } catch (e) {
                console.log("Error => " + e)
            }
        } else {
            setAlertText("Ma'lumotlar to'ldirilmagan")
            setVariant("danger")
        }
    }
    const register = async (studentInfo) => {

        const response = await fetch("http://api.register.uniep.uz/api/v1/user/registerForEntrant", {
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

    const getRegionData = async () => {
        const response = await fetch(
            "http://api.register.uniep.uz/api/v1/region/getRegions"
        ).then((response) => response.json());
            localStorage.setItem("regions", JSON.stringify(response.data.data))
            setRegion(response.data.data)
    };

    useEffect(() => {
        const regionList = JSON.parse(localStorage.getItem("regions"))
        const districtList = JSON.parse(localStorage.getItem("districts"))
        if (regionList == null ) {
            axios
                .get("http://api.register.uniep.uz/api/v1/region/getRegions")
                .then(res => {
                    console.log(res)
                    localStorage.setItem("regions", JSON.stringify(res.data.data))
                    setRegion(res.data.data)
                })
                .catch(error => console.log(error));

        }
        if (districtList == null ) {
            axios
                .get("http://api.register.uniep.uz/api/v1/district/getDistrictList")
                .then(res => {
                    localStorage.setItem("districts", JSON.stringify(res.data.data))
                    setDistrict(res.data.data)
                })
                .catch(error => console.log(error));
        }

    }, []);

    function getRegions(event) {
        let id = event.target.value;
        setRegionId(id)

        console.log(regionId);

        const regionList = JSON.parse(localStorage.getItem("regions"))
        const districtList = JSON.parse(localStorage.getItem("districts"))
        if (regionList != null) {
            setRegion(regionList)
        }
        if (districtList != null) {
            setDistrict(districtList)
        }

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
        <Container className={'pt-4 '}>
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
                                percent={0}
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
                    <h3>Passport ma'lumotlaringizni kiriting</h3>
                    <Row>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Familya</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name={'lastName'}
                                    value={formValue.lastName}
                                    required={true}
                                    onInvalid={e => e.target.setCustomValidity('Familyani kiriting')}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Ism</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name={'firstName'}
                                    value={formValue.firstName}
                                    required={true}
                                    onInvalid={e => e.target.setCustomValidity('Isminggizni kiriting')}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Otanggizni ismi</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name={'fatherName'}
                                    value={formValue.fatherName}
                                    required={true}
                                    onInvalid={e => e.target.setCustomValidity('Otanggizni ismini kiriting')}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Telefon</label>
                                <InputMask
                                    className={"form-control"}
                                    name={'phoneNumber'}
                                    mask="999 99 999 99 99"
                                    value={formValue.phoneNumber}
                                    required={true}
                                    onChange={handleChange}
                                    onInvalid={e => e.target.setCustomValidity('Asosy telefon raqaminggizni kiriting')}
                                    onInput={e => e.target.setCustomValidity('')}
                                >
                                </InputMask>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Qo'shimmcha telefon raqam</label>
                                <InputMask
                                    className={"form-control"}
                                    name={'otherPhone'}
                                    mask="999 99 999 99 99"
                                    value={formValue.otherPhone}
                                    onChange={handleChange}>
                                </InputMask>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Passport serya raqam</label>
                                <InputMask
                                    className={"form-control"}
                                    name={'passport'}
                                    mask="aa 9999999"
                                    value={formValue.passport}
                                    onChange={handleChange}>
                                </InputMask>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Tug'ulgan sanasi</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name={'birthday'}
                                    value={formValue.birthday}
                                    required={true}
                                    onInvalid={e => e.target.setCustomValidity("Tug'ulgan kuninggizni kiriting")}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Viloyat</label>
                                <select
                                    className={'form-select'}
                                    required={true}
                                    name={'regionId'}
                                    value={formValue.regionId}
                                    onInvalid={e => e.target.setCustomValidity('Viloyatinggizni tanlang')}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                    onClick={getRegions}
                                    defaultValue={'0'}
                                >
                                    <option selected value="0">Viloyat tanlang</option>
                                    {
                                        region.map((value, index) => <option key={index}
                                                                             value={value.id}>{value.nameUz}</option>)
                                    }
                                </select>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="mb-3">
                                <label style={labelStyle}>Tuman</label>
                                <select
                                    className={'form-select'}
                                    required={true}
                                    name={'districtId'}
                                    value={formValue.districtId}
                                    onInvalid={e => e.target.setCustomValidity('Tumaninggizni tanlang')}
                                    onInput={e => e.target.setCustomValidity('')}
                                    onChange={handleChange}
                                    defaultValue={'0'}
                                >
                                    <option selected={true} value="0">Tumanni tanlang</option>
                                    {
                                        district.map((value, index) => value.regionId == regionId &&
                                            <option key={index} value={value.id}>{value.nameUz}</option>)
                                    }
                                </select>
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
            <Row>
                <Col>

                </Col>
            </Row>
        </Container>
    )
}


export default SignUp
