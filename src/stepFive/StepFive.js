import React from 'react';
import './stepFive.css'
import Success from '../image/svgviewer-output.svg'
function Register() {

    return (
        <div className="main-container">
            <div className="check-container">
                <div className="check-background">
                    <img src={Success} alt=""/>
                </div>
                <div className="check-shadow"></div>

            </div>
            <div className={'d-flex justify-content-center align-items-center text-center '}>
                <h3 className={'card-title'}>Ro'yxatdan muvaffaqiyatli o'tdinggiz!</h3>
            </div>
            {/*<a href="/" className="btn btn-primary">Bosh sahifaga qaytish</a>*/}
        </div>
    );
}

export default Register;
