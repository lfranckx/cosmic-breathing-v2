import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Services.scss';
import david1 from '../images/david_hex-2.png';
import david2 from '../images/david_hex-3.png';
import david3 from '../images/david_hex-4.png';
import { motion } from "framer-motion";

export default function Services(props) {
    
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    const navigate = useNavigate();

    const handlePageTransition = () => {
        setActive(!active);
        setTimeout(() => {
            setActive(false);
            navigate('/connect');
        }, 1000)
    }

    const handleSetActives = (el) => {
        if (el === 1) {
            setActive1(!active1);
            setActive2(false);
            setActive3(false);
        }
        if (el === 2) {
            setActive1(false);
            setActive2(!active2);
            setActive3(false);
        }
        if (el === 3) {
            setActive1(false);
            setActive2(false);
            setActive3(!active3);
        }
    }

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <>
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                className='small-width'
            >
                <main id='services'>
                    <section className='content'>
                        <h2 className='h1'>Practice</h2>

                        <div className='accordion'>
                            <div className='item item-1'>
                                <button className='flex row' onClick={() => {handleSetActives(1)}}>
                                    <span className='h3'>Meditation Initiation</span>
                                    <div className='opener'>
                                        <div className={'wrap'}>
                                            <span className={active1 ? 'active line line-1' : 'line line-1'}></span>
                                            <span className={active1 ? 'active line line-2' : 'line line-2'}></span>
                                        </div>
                                    </div>
                                </button>

                                <div className={active1 ? 'item-content' : 'item-content hidden'}>
                                    <div className='content-wrap'>
                                        <div className='text-wrap'>
                                            <p>Meditation is essential to yoga, it allows us to access deep stillness, calm the mind, and nurture presence within our being.</p>
                                            <p>Utilizing a simple yet effective technique rooted in the Himalayan Vedantic Tradition, these teachings benefits all aspects of oneself and are accessible to practitioners of all experiences and newcomers like.</p>
                                            <p>Shared over a multi-session experience, we will discuss the foundations of meditation, practice the technique, and introduce a personalized mantra for your daily meditation practice.</p>
                                        </div>
                                        {/* <div className='image-wrap'>
                                            <img src={david1} alt='David sitting in a meditation stance' />
                                        </div> */}
                                    </div>

                                    <div className='btn-wrap'>
                                        <button onClick={()=> {handlePageTransition()}} className='btn' >Book Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className='item item-2'>
                                <button className='flex row' onClick={() => {handleSetActives(2)}}>
                                    <span className='h3'>Sadhana Development</span>
                                    <div className={'opener'}>
                                        <div className={'wrap'}>
                                            <span className={active2 ? 'active line line-1' : 'line line-1'}></span>
                                            <span className={active2 ? 'active line line-2' : 'line line-2'}></span>
                                        </div>
                                    </div>
                                </button>

                                <div className={active2 ? 'item-content' : 'item-content hidden'}>
                                    <div className='content-wrap'>
                                        <div className='text-wrap'>
                                            <p>Daily spiritual practice is essential to deepen our relationship with the divine and to realize our own internal divinity. In establishing consistent, intentional practices we begin to nurture this relationship and discover our limitless potential.</p>
                                            <p>Every Sadhana is custom designed based on the intentions and goals of each individual and is practiced for a specific duration of time.</p>
                                            <p>Shared over a multi-session experience, you will receive guidance and support, while we set intentions, and practice Himalayan Integrated techniques.</p>
                                        </div>
                                        {/* <div className='image-wrap'>
                                            <img src={david2} alt='David sitting in a meditation stance' />
                                        </div> */}
                                    </div>

                                    <div className='btn-wrap'>
                                        <button onClick={()=> {handlePageTransition()}} className='btn' >Book Now</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='item item-3'>
                                <button className='flex row' onClick={() => {handleSetActives(3)}}>
                                    <span className='h3'>Himalayan Integrated Practice</span>

                                    <div className={'opener'}>
                                        <div className={'wrap'}>
                                        <span className={active3 ? 'active line line-1' : 'line line-1'}></span>
                                            <span className={active3 ? 'active line line-2' : 'line line-2'}></span>
                                        </div>
                                    </div>
                                </button>

                                <div className={active3 ? 'item-content' : 'item-content hidden'}>
                                    <div className='content-wrap'>
                                        <div className='text-wrap'>
                                            <p>Through the tools of Kriya, Pranayama, Meditation, Mantra and Mudras our practices aim to bring about evolution, expansion, and liberation. As well as helping us to gain control over our breath in order to access the deeper, nuanced dimensions of our life-force energy.</p>
                                            <p>These practices are transformational and aid in establishing deep presence, relaxing the nervous system, reducing stress and anxiety of the mind and body, activating energy, overcoming limiting behaviors, and releasing ties to past trauma.</p>
                                            <p>Shared in a private one-on-one setting or in groups, a customized class structure is created and instructed to students to practice and experience these ancient practices for opening the heart and mind.</p>
                                        </div>
                                        {/* <div className='image-wrap'>
                                            <img src={david3} alt='David sitting in a meditation stance' />
                                        </div> */}
                                    </div>

                                    <div className='btn-wrap'>
                                        <button onClick={()=> {handlePageTransition()}} className='btn' >Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </motion.div>

            <div className={active ? 'page-transition grey active' : 'page-transition grey'}></div>
        </>
    );
}