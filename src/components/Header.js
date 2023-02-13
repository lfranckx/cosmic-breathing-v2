import React, { useState, useContext } from 'react';
import { ApplicationContext } from '../context';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo-notext.png';
import '../styles/Header.scss';
import { motion } from 'framer-motion';

export default function Header(props) {
    const { active, setActive } = useContext(ApplicationContext);
    const location = useLocation();

    const showMenu = active ? 'show' : 'close';

    const homeBgColor = location.pathname === '/' ? 'black' : '';
    const aboutBgColor = location.pathname === '/about' ? 'white' : '';
    const servicesBgColor = location.pathname === '/services' ? 'black' : '';
    const connectBgColor = location.pathname === '/connect' ? 'white' : '';

    const homeTextColor = location.pathname === '/' ? 'p1' : 'p1';
    const aboutTextColor = location.pathname === '/about' ? 'p1 bronze' : 'p1';
    const servicesTextColor = location.pathname === '/services' ? 'p1' : 'p1';
    const connectTextColor = location.pathname === '/connect' ? 'p1' : 'p1';

    const activeMenuTextColorHome = location.pathname === '/' ? 'cream' : 'p1';
    const activeMenuTextColorServices = location.pathname === '/services' ? 'cream' : 'p1';

    const homeLinkColor = location.pathname === '/' ? 'bronze' : '';
    const aboutLinkColor = location.pathname === '/about' ? 'black' : '';
    const servicesLinkColor = location.pathname === '/services' ? 'bronze' : '';
    const connectLinkColor = location.pathname === '/connect' ? 'black' : '';

    const variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };
    
    return (
        <>
            <div className='page-width header_wrap'>
                <header id='header'>
                    <div className='flex row'>
                        {/* <Link to={'/'}>
                            <div className='logo_text_wrap'>
                                {active ? <h1 className={`p1 top_layer ${activeMenuTextColorHome} ${activeMenuTextColorServices}`}>Cosmic Breathing</h1> 
                                        : <h1 className={`${homeTextColor} ${aboutTextColor} ${servicesTextColor} ${connectTextColor}`}>Cosmic Breathing</h1>}
                                <div className='logo_wrap'>
                                    <img src={logo} alt='Main logo for Cosmic Breathing' className='logo' />
                                </div>
                            </div>
                        </Link> */}

                        <button 
                            id='menu_button' 
                            className={active ? 'active' : ''}
                            onClick={() => {setActive(!active)}}
                        >
                            <div className={active ? 'active text_wrap' : 'text_wrap'}>
                                {active ? <span className={`menu_text ${activeMenuTextColorHome} ${activeMenuTextColorServices}`}>{active ? 'Close' : 'Menu'}</span>
                                        : <span className={`menu_text ${homeTextColor} ${aboutTextColor} ${servicesTextColor} ${connectTextColor}`}>{active ? 'Close' : 'Menu'}</span>}
                            </div>
                            
                            <div className='wrap'>
                                {active ? <span className={`slash ${activeMenuTextColorHome} ${activeMenuTextColorServices}`}></span>
                                        : <span className={`slash ${homeTextColor} ${aboutTextColor} ${servicesTextColor} ${connectTextColor}`}></span>}
                                {active ? <span className={`slash ${activeMenuTextColorHome} ${activeMenuTextColorServices}`}></span>
                                        : <span className={`slash ${homeTextColor} ${aboutTextColor} ${servicesTextColor} ${connectTextColor}`}></span>}
                            </div>
                        </button>
                    </div>
                </header>
            </div>
            <div id='menu' className={`${homeBgColor} ${aboutBgColor} ${servicesBgColor} ${connectBgColor} ${showMenu}`}>
                <div className='content'>
                    <motion.div className='link_wrap' variants={variants}>
                        <Link className={`h1 link ${homeLinkColor} ${aboutLinkColor} ${servicesLinkColor} ${connectLinkColor}`} to='/' onClick={() => {setActive(!active)}}>Index</Link>
                    </motion.div>
                    <motion.div className='link_wrap right' variants={variants}>
                        <Link className={`h1 link ${homeLinkColor} ${aboutLinkColor} ${servicesLinkColor} ${connectLinkColor}`} to='/about' onClick={() => {setActive(!active)}}>About</Link>
                    </motion.div>
                    <motion.div className='link_wrap' variants={variants}>
                        <Link className={`h1 link ${homeLinkColor} ${aboutLinkColor} ${servicesLinkColor} ${connectLinkColor}`} to='/services' onClick={() => {setActive(!active)}}>Practice</Link>
                    </motion.div>
                    <motion.div className='link_wrap left' variants={variants}>
                        <Link className={`h1 link ${homeLinkColor} ${aboutLinkColor} ${servicesLinkColor} ${connectLinkColor}`} to='/connect' onClick={() => {setActive(!active)}}>Connect</Link>
                    </motion.div>
                </div>
            </div>
        </>
    );
}