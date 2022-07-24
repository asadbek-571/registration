import React from 'react';
import '../css/navbar.css'
function TestF(props) {
    return (
        <section className="navigation">
            <div className="nav-container">
                <div className="brand">
                    <a href="index.html">
                        <img src="assets/LOGO-SVG.svg" alt="uniep" className="w-100"/>
                    </a>
                    <div className="university-name">
                        <p>University of Economics</p>
                        <p>and Pedagogy</p>
                    </div>
                </div>

                <nav>
                    <div className="nav-mobile"><a id="navbar-toggle" href="#"><span></span></a></div>
                    <ul className="nav-list">
                        <li>
                            <a href="#">Universitet</a>
                            <ul className="navbar-dropdown">
                                <li>
                                    <a href="pages/uz/ustav.html">Universitet nizomi</a>
                                </li>
                                <li>
                                    <a href="pages/uz/tuzilma.html">Universitet tuzilmasi</a>
                                </li>
                                <li>
                                    <a href="pages/uz/fakultetlar.html">Fakultetlar</a>
                                </li>
                                <li>
                                    <a href="pages/uz/kafedralar.html">Kafedralar</a>
                                </li>
                                <li>
                                    <a href="pages/uz/markaz-bolimlar.html">Markazlar va bo'limlar</a>
                                </li>
                                <li>
                                    <a href="pages/uz/rekvizitlar.html">Rekvizitlar</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="pages/uz/yangiliklar.html" onClick="clearPage()">Yangiliklar</a>
                        </li>
                        <li>
                            <a href="#">Faoliyat</a>
                            <ul className="navbar-dropdown">
                                <li>
                                    <a href="pages/uz/page/ilmiy.html" onClick="page('SCIENTIFIC_ACTIVITY')">Ilmiy
                                        faoliyat</a>
                                </li>
                                <li>
                                    <a href="pages/uz/page/ilmiy.html" onClick="page('FINANCIAL_ACTIVITY')">Moliyaviy
                                        faoliyat</a>
                                </li>
                                <li>
                                    <a href="pages/uz/page/ilmiy.html" onClick="page('CULTURAL_ACTIVITY')">Madaniy-ma'rifiy
                                        faoliyat</a>
                                </li>
                                <li>
                                    <a href="pages/uz/page/ilmiy.html" onClick="page('EDUCATIONAL_ACTIVITY')">O'quv-uslubiy
                                        faoliyat</a>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a href="#">Interaktiv xizmatlar</a>
                            <ul className="navbar-dropdown">
                                <li>
                                    <a href="https://fintech.uniep.uz/">Fintech-Jurnal</a>
                                </li>
                                <li>
                                    <a href="#">Student-HEMIS</a>
                                </li>
                                <li>
                                    <a href="#">Teacher-HEMIS</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="pages/uz/e-kutubxona.html">Elektron kutubxona</a>
                        </li>
                        <li>
                            <a href="#">Qabul-2022</a>
                            <ul className="navbar-dropdown">
                                <li>
                                    <a href="#">Magistratura</a>
                                </li>
                                <li>
                                    <a href="#">Bakalavriyat</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="menu-wrapper">
                <div className="menu">
                    <a href="https://t.me/UniEP_uz">
                    </a>
                    <a href="">

                    </a>
                    <a href="https://www.youtube.com/channel/UCGjxiTZ9qU0WJELDjSV7LQA">

                    </a>
                    <a href="https://instagram.com/uniep.uz?igshid=YmMyMTA2M2Y=">

                    </a>
                </div>
            </div>
        </section>
    );
}

export default TestF;
