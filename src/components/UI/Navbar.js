import { useRef, useEffect } from 'react';
import Translate from '../Translate';

import DropDown from './DropDown';

import './Navbar.scss';

const Navbar = ({ componentLabels }) => {

    if(componentLabels === undefined){
        throw new Error('Component labels not found. Please verify the file is loaded properly.');
    }

    const navbarRef = useRef(null);
    const navbarMenuRef = useRef(null);

    useEffect(() => {
        if(navbarRef.current !== null && navbarMenuRef.current !== null){
            window.addEventListener('scroll', function(e) {
                const navbarElem = navbarRef.current;
                window.scrollY >= 1 ? navbarElem.classList.add('bg-scroll') : navbarElem.classList.remove('bg-scroll');
            })

            navbarMenuRef.current.addEventListener('show.bs.collapse', function () {
                navbarRef.current.classList.add('bg-scroll');
            });
        }
        
    }, [navbarRef, navbarMenuRef]);

    const navbarLabels = componentLabels;

    return (
        <nav className="navbar fixed-top navbar-expand-xl" ref={navbarRef}>
            <div className="container">
              <a className="logo" aria-label="The Inner Fuel Logo" href="/"></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavbarMenu" 
                                        aria-controls="NavbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                <div id="NavbarMenu" className="collapse navbar-collapse d-xl-flex justify-content-xl-end" ref={navbarMenuRef}>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="link-dark active" aria-current="page" href="/">{navbarLabels.navbarHomeLink}</a></li>
                        <li className="nav-item"><a className="link-dark" href="/kap">{navbarLabels.navbarKapLink}</a></li>
                        <li className="nav-item"><a className="link-dark" href="/aboutus">{navbarLabels.navbarAboutUsLink}</a></li>
                        <li className="nav-item"><a className="link-dark" href="/contact">{navbarLabels.navbarContactLink}</a></li>
                        <li className="nav-item"><a className="button button-dark" href="/booking">{navbarLabels.navbarBookingButton}</a></li>
                        <li className='nav-item'>
                            <DropDown />
                        </li>
                    </ul>
                </div>
              </div>
        </nav>
    )
};

export default Translate(Navbar, 'Navbar');