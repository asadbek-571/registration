import React from 'react';
// import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import Instagram from "../../image/svg/Instagram-Logo.wine.svg"
import Facebook from "../../image/svg/Facebook-f_Logo-Blue-Logo.wine.svg"
import Telegram from "../../image/svg/Telegram_(software)-Logo.wine.svg"
import Youtube from "../../image/svg/YouTube-Icon-Full-Color-Logo.wine.svg"
import "./Footer.css"
export const Footer = () => {
    return (
        <footer>
            <div className="container  py-4">
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-12">
                        <p className="text-header">Bog'lanish</p>
                        <hr className="text-down"/>
                        <div className="contact mb-4">
                            <span className="contact-item d-block my-2"><b>Telefon: </b>(99895) 196-90-08 </span>
                            <span className="contact-item d-block my-2"><b>Faks: </b>(99895) 196-90-08 </span>
                            <span className="contact-item d-block my-2"><b>Email: univer@uniep.uz </b> </span>
                            <span
                                className="contact-item d-block my-2"><b>Ishonch telefoni: </b>(99897) 454-90-08 </span>
                        </div>
                        <p className="text-header">Ijtimoiy sahifalar</p>
                        <hr className="text-down"/>
                        <div className='social-links'>
                            <div id="instagram">
                                <a href="https://instagram.com/uniep.uz?igshid=YmMyMTA2M2Y="
                                   className="social-btn flex-center overflow-hidden">
                                    <div className={"d-flex justify-content-center align-items-center "} style={{
                                        width: "28px",
                                        height: "28px",
                                    }}>
                                        <img src={Instagram} style={{
                                            width:"100%",
                                            height:"100%",
                                        }} alt=""/>
                                    </div>
                                    <span>uep.uz</span>
                                </a>
                            </div>

                            <div id="facebook">
                                <a href="" className='social-btn flex-center overflow-hidden'>
                                    <div className={"d-flex justify-content-center align-items-center "} style={{
                                        width: "28px",
                                        height: "28px",
                                    }}>
                                        <img src={Facebook} style={{
                                            width:"100%",
                                            height:"100%",
                                        }} alt=""/>
                                    </div>
                                    <span>uep.uz</span>
                                </a>
                            </div>

                            <div id="telegram">
                                <a href="https://t.me/UniEP_uz" className='social-btn flex-center overflow-hidden'>
                                    <div className={"d-flex justify-content-center align-items-center "} style={{
                                        width: "28px",
                                        height: "28px",
                                    }}>
                                        <img src={Telegram} style={{
                                            width:"100%",
                                            height:"100%",
                                        }} alt=""/>
                                    </div>
                                    <span>uep.uz</span>
                                </a>
                            </div>

                            <div id="youtube">
                                <a href="https://www.youtube.com/channel/UCGjxiTZ9qU0WJELDjSV7LQA"
                                   className='social-btn flex-center overflow-hidden'>
                                    <div className={"d-flex justify-content-center align-items-center "} style={{
                                        width: "28px",
                                        height: "28px",
                                    }}>
                                        <img src={Youtube} style={{
                                            width:"100%",
                                            height:"100%",
                                        }} alt=""/>
                                    </div>
                                    <span>uep.uz</span>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12">
                        <p className="text-header">Manzil</p>
                        <hr className="text-down"/>
                        <div className="contact">
                            <span className="contact-item d-block my-2"><b>Manzil: </b>Andijon viloyati, Andijon shahar, A. Yuldashev ko'chasi 14 </span>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7343312803105!2d72.31876431540597!3d40.74587097932815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zNDDCsDQ0JzQ1LjEiTiA3MsKwMTknMTUuNCJF!5e0!3m2!1sru!2s!4v1648276472630!5m2!1sru!2s"
                            width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <p className="text-header">Murojaat</p>
                        <hr className="text-down"/>
                        <form action="#">
                            <input type="text" className="form-control bg-transparent my-2" placeholder="FISH"/>
                            <input type="email" className="form-control bg-transparent my-2"
                                   placeholder="Email"/>
                            <textarea className="form-control bg-transparent my-2"
                                      placeholder="Xabar"/>
                            <button className="btn btn-success w-100">Xabarni yuborish</button>

                        </form>
                    </div>

                </div>
            </div>
            <section>
                <div className="container text-center">
                    Copyright © 2022. Binary Orient Soft Solution
                </div>
            </section>
        </footer>
    );
};
