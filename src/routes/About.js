import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mountain from '../images/mountain_hex_1.png';
import david from '../images/david_hex_1.png';
import grass from '../images/grass_hex_1.png';
import '../styles/About.scss';
import { motion } from "framer-motion";

export default function About(props) {

    const [active, setActive] = useState(false);
    const navigate = useNavigate();

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
    
    return (
        <>
            <div className='page-width'
            >
                <main id='about'>
                    <section className='content'>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants} 
                            className='images'
                        >
                            <div className='image_wrap left'>
                                <img className='left' src={mountain} alt='Himalayan Mountain' />
                            </div>

                            <div className='image_wrap absolute'>
                                <img className='relative top animate' 
                                    src={david} alt='David Meditating on the beach' />
                            </div>

                            <div className='image_wrap relative right'>
                                <img className='right' src={grass} alt='Painting of tall grass' />
                            </div>
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            className='text_wrap'
                        >
                            <h2 className='h1'>About</h2>
                            <p className='cream'>The practices of Cosmic Breathing have their roots in the Vedantic lineage of the Himalayas. The great yogic masters passed down the traditions and wisdom over thousands of years verbally until recording them in writing in the Vedas, Upanishads and other sacred yogic scriptures. These teachings are holistic, ever-expanding, and offer transformation to every aspect of the mind, body, and soul. There are no dogmatic beliefs, the teachings are compatible with all faiths, and this wisdom is available to every human being regardless of race, gender expression, or sexuality. Integrating and applying these teachings to our lives allows us radical transformation, trust, fearlessness, compassion, healing and exponential growth.</p>
                            <p className='cream'>David is a lover of learning and expression, a forever student. From this place of curiosity he discovered yoga in many modalities in southern California where he has practiced for the last decade. After multiple journeys to the foothills of the Himalayas in India to submerge himself in the ancient wisdom, along with years of consistent, devotional practice, David has welcomed the role of sharing these transformational teachings with others.</p>
                            <p className='cream'>The life-altering effects of these practices are undeniable, truly limitless and can be seen all throughout his life. The power of the breath, the deep silence of meditation, and the activation of untapped energy are all at the foundation of his own practice and how he teaches. It is from a place of gratitude and deep honor that he opens his heart and Self to share with anyone who seeks.</p>

                            <div className='link_wrap text-center'>
                                <button 
                                    onClick={()=> {handlePageTransition()}}
                                    className='uppercase grey link' 
                                >
                                    Practice With Me
                                    <div className='border-bottom text-center'></div>
                                </button>
                            </div>
                        </motion.div>
                    </section>
                </main>
            </div>
            <div className={active ? 'page-transition grey active' : 'page-transition grey'}></div>
        </>
    );
}