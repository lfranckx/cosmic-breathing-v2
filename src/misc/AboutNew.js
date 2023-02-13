import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import mountain from '../images/mountain_hex_1.png';
import david from '../images/david_hex_1.png';
import girl from '../images/girl_hex_1.png';
import '../styles/AboutNew.scss';

export default function AboutNew(props) {

    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [select1, toggleSelection1] = useState(false);
    const [select2, toggleSelection2] = useState(false);
    const [select3, toggleSelection3] = useState(false);

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const handlePageTransition = () => {
        setActive(!active);
        setTimeout(() => {
            setActive(false);
            navigate('/services');
        }, 1000)
    }

    const handleContentOpener = (selection) => {
        if (selection === 1) {
            toggleSelection1(!select1);
            toggleSelection2('');
            toggleSelection3(false);
        }
        if (selection === 2) {
            toggleSelection1(false);
            toggleSelection2(!select2);
            toggleSelection3(false);
        }
        if (selection === 3) {
            toggleSelection1(false);
            toggleSelection2(false);
            toggleSelection3(!select3);
        }
    }

    return (
        <>
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                className='page-width'
            >
                <main id='about'>
                    <h2 className='h1'>About</h2>
                    <section className='content'>
                        <ul className='list-images'>
                            <li className='list-item'>
                                <div className='img-wrap'>
                                    <img 
                                        className={select1 ? 'active' : ''}
                                        onClick={() => {handleContentOpener(1)}}
                                        src={mountain} 
                                        alt='Himalayan Mountain Peak'
                                    />
                                </div>
                            </li>
                            <li className='list-item'>
                                <div className='img-wrap'>
                                    <img 
                                        className={select2 ? 'active' : ''}
                                        onClick={() => {handleContentOpener(2)}}
                                        src={david} 
                                        alt='David meditating on the beach'
                                    />
                                </div>
                                <div className={select2 ? 'active text-wrap' : 'text-wrap'}>
                                <p>The practices of Cosmic Breathing have their roots in the Vedantic lineage of the Himalayas. The great yogic masters passed down the traditions and wisdom over thousands of years verbally until recording them in writing in the Vedas, Upanishads and other sacred yogic scriptures. These teachings are holistic, ever-expanding, and offer transformation to every aspect of the mind, body, and soul. There are no dogmatic beliefs, the teachings are compatible with all faiths, and this wisdom is available to every human being regardless of race, gender expression, or sexuality. Integrating and applying these teachings to our lives allows us radical transformation, trust, fearlessness, compassion, healing and exponential growth.</p>
                                </div>
                            </li>
                            <li className='list-item'>
                                <div className='img-wrap'>
                                    <img 
                                        className={select3 ? 'active' : ''}
                                        onClick={() => {handleContentOpener(3)}}
                                        src={girl} 
                                        alt='Girl meditating in nature'
                                    />
                                </div>
                            </li>
                        </ul>
                    </section>
                </main>
            </motion.div>
        </>
    )
}