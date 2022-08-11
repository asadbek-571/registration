import React from 'react';
import {Step} from "react-step-progress-bar";
import Check from "../../image/check.svg";

function Register(props) {
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
    const array=[props.size? props.size : 4]
    return (
        array.map((value, index) => <Step key={index} transition="scale">
                {({accomplished}) => (
                    <div style={progressStyle} className={'d-flex justify-content-center align-items-center'}>
                    <img
                    style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                    className={'position-absolute w-75 h-75'}
                    src={Check}
                    />
                    </div>

                )}
            </Step>
        )
    );
}

export default Register;
