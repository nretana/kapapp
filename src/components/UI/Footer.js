import Translate from '../Translate';
import './Footer.scss';

const Footer = ({ componentLabels }) => {

    if(componentLabels === undefined){
        throw new Error('Component labels not found. Please verify the file is loaded properly.');
    }

    const footerLabels = componentLabels;

    return(
        <footer className="footer-content">
        <div className="container">
            <div className="row">
            <div className="col-12 col-xl-2">
                    <a className="logo" aria-label="The Inner Fuel Logo" href="/"></a>
                </div>
                <div className="col-12 col-xl-7">
                    <hr className="line-separator" />
                    <nav className="footer-nav">
                        <div className="row g-0">
                            <div className="col-6 col-lg-4">
                                <h4 className="title">{footerLabels.footerSectionServicesTitle}</h4>
                                <ul>
                                    <li className="nav-item"><a className="link-dark" href="/">{footerLabels.footerHomeLink}</a></li>
                                    <li className="nav-item"><a className="link-dark" href="/">{footerLabels.footerKapLink}</a></li>
                                    <li className="nav-item"><a className="link-dark" href="/">{footerLabels.footerBookingLink}</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-4">
                                <h4 className="title">{footerLabels.footerSectionCompanyTitle}</h4>
                                <ul>
                                    <li className="nav-item"><a className="link-dark" href="/">{footerLabels.footerAboutUsLink}</a></li>
                                    <li className="nav-item"><a className="link-dark" href="/">{footerLabels.footerContactLink}</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                                <h4 className="title">{footerLabels.footerSectionMoreInformationTitle}</h4>
                                <ul>
                                    <li className="nav-item"><a className="link-dark" href="/">{footerLabels.footerResourcesLink}</a></li>
                                    <li className="nav-item"><a className="link-dark" href="/">{footerLabels.footerPrivacyPolicyLink}</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-12 col-xl-3">
                    <hr className="line-separator" />
                    <div className="d-flex">
                        <div>
                            <a className="icon-box" href="https://www.instagram.com/theinnerfuel/" target="_blank" aria-label="Instagram"><span className="icon icon-instagram" aria-hidden="true"></span></a>
                            <a className="icon-box" href="https://www.facebook.com/theinnerfuel" target="_blank" aria-label="Facebook"><span className="icon icon-facebook" aria-hidden="true"></span></a>
                            <a className="icon-box" href="https://www.youtube.com/channel/UC02JzBASZSg3jESU0Uu8WKQ" target="_blank" aria-label="Youtube"><span className="icon icon-youtube" aria-hidden="true"></span></a>
                        </div>
                        <div className="icon-box-2">
                            <div className="icon-telegram"></div>
                            <span className="text">Telegram QR</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-content">
            <span className="copyright-text">© The Inner Fuel LLC {new Date().getFullYear()}</span>
        </div>
    </footer>
    )
};

export default Translate(Footer, 'Footer');