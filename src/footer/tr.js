import React from 'react';

function Tr(props) {
    return (
        <div id="setting">
            <div className="setting-container">

                <div className="d-flex align-items-center gap-3">
                    <div className="symbols">
                        <div className="symbol-img">
                            <a href="pages/uz/bayroq.html">
                                <img src="assets/uz-flag.png" alt="uniep"/>
                            </a>
                        </div>
                        <div className="symbol-img">
                            <a href="pages/uz/madhiya.html">
                                <img src="assets/music.png" alt="uniep"/>
                            </a>
                        </div>
                        <div className="symbol-img">
                            <a href="pages/uz/gerb.html">
                                <img src="assets/gerb.png" alt="uniep"/>
                            </a>
                        </div>
                        <div className="symbol-img">
                            <a href="pages/uz/logo.html">
                                <img src="assets/LOGO-SVG.svg" alt="uniep"/>
                            </a>
                        </div>
                    </div>
                    <div className="switch-lang">
                        <div className="current-lang">
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Uzbekistan.png"
                                alt="uniep"
                                className="lang-flag"
                            />
                                <a className="lang-text" href="index.html">
                                    O'zbek
                                </a>
                        </div>
                        <div className="lang-dropdown">
                            <div className="selecting-lang">
                                <img
                                    src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Russia.png"
                                    alt="uniep"
                                    className="lang-flag"/>
                                    <a className="lang-text" href="pages/ru/index.html">
                                        Русский
                                    </a>
                            </div>
                            <div className="selecting-lang">
                                <img
                                    src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_United_Kingdom.png"
                                    alt="uniep"
                                    className="lang-flag"/>
                                    <a className="lang-text" href="pages/en/index.html">
                                        English
                                    </a>
                            </div>
                            <div className="selecting-lang">
                                <img
                                    src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Uzbekistan.png"
                                    alt="uniep"
                                    className="lang-flag"/>
                                    <a href="pages/oz/index.html" className="lang-text">
                                        Ўзбек
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tr;
