import React from 'react';
import './footer.css';
import logo from "../../images/logo2.png";
import fb from '../../images/footer.png';
import {Link} from "react-router-dom";
import armPress from '../../Files/JSConfAM19_AM.pdf';
import enPress from '../../Files/JSConfAM19_EN.pdf';

const Footer = () => {
    return (
        <>
            <div className={'wrapperFooter'}>
                <div className={'footer'}>

                    <div className={'logo2'}>
                        <Link to={'/'}>
                            <img src={logo} alt="img"/>
                        </Link>
                    </div>

                    <div className={'social_items'}>
                        <a href="https://github.com/JSConfArmenia">
                            <div className="social-icon githubwhite"></div>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/jsconf.am/">
                            <div className="social-icon fbWhite"></div>
                        </a>
                        <a target="_blank" href="https://twitter.com/JSConfAM">
                            <div className="social-icon twWhite"></div>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/jsconf.am">
                            <div className="social-icon instwhite"></div>
                        </a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCkzEOKU959F6_T0OaQBH4VQ">
                            <div className="social-icon youtubeRed"></div>
                            </a>
                    </div>

                    <div className='press-realise'>
                        Press Release <a href={armPress} target='_blank' className="langArm">AM</a> / <a target='_blank' className="langEnglish" href={enPress}>EN</a>
                    </div>
                    <div className='design-and-branding'>
                        Design and branding by &nbsp;
                        <a target='_blank' href='https://www.behance.net/Davidtiger' className="orange">@davidtiger</a>, coded in React.js by &nbsp;
                        <a target='_blank' href='https://github.com/JSConfArmenia/conf-19/graphs/contributors' className="orange">our awesome collaborators</a>
                    </div>
                </div>
            </div>
            <div className={'footer_image'}>
                <img src={fb} alt="f"/>
            </div>
        </>
    );
};

export default Footer;
