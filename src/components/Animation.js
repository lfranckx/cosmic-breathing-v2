import React, {useState} from 'react';
import '../styles/Animation.scss';
import { motion } from 'framer-motion';

export default function Animation(props) {
    return (
        <div className='page-wrap'>
            <motion.div 
                className='content-wrap'
                initial={{ opacity: 0, scale: 0.5}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    duration: 4,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <motion.div 
                    className='hex-wrap left'
                    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360 }}
                    transition={{
                        duration: 4,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <svg className='hex' width="260" height="298" viewBox="0 0 260 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125 4.19616C128.094 2.40983 131.906 2.40982 135 4.19615L252.904 72.2679C255.998 74.0543 257.904 77.3555 257.904 80.9282V217.072C257.904 220.644 255.998 223.946 252.904 225.732L135 293.804C131.906 295.59 128.094 295.59 125 293.804L7.0962 225.732C4.00218 223.946 2.09619 220.644 2.09619 217.072V80.9282C2.09619 77.3556 4.00218 74.0543 7.09619 72.2679L125 4.19616Z" stroke="#E7B9B9" strokeOpacity="0.4" strokeWidth="4"/>
                    </svg>
                </motion.div>
                <motion.div 
                    className='hex-wrap top'
                    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360 }}
                    transition={{
                        duration: 4,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <svg className='hex' width="260" height="298" viewBox="0 0 260 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M135 4.19615L252.904 72.2679C255.998 74.0543 257.904 77.3555 257.904 80.9282V217.072C257.904 220.644 255.998 223.946 252.904 225.732L135 293.804C131.906 295.59 128.094 295.59 125 293.804L7.0962 225.732C4.00218 223.946 2.09619 220.644 2.09619 217.072V80.9282C2.09619 77.3556 4.00218 74.0543 7.09619 72.268L125 4.19616C128.094 2.40983 131.906 2.40982 135 4.19615Z" stroke="#000080" strokeOpacity="0.12" strokeWidth="4"/>
                    </svg>
                </motion.div>
                <motion.div 
                    className='hex-wrap right'
                    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360 }}
                    transition={{
                        duration: 4,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <svg className='hex' width="260" height="298" viewBox="0 0 260 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125 4.19616C128.094 2.40983 131.906 2.40982 135 4.19615L252.904 72.2679C255.998 74.0543 257.904 77.3555 257.904 80.9282V217.072C257.904 220.644 255.998 223.946 252.904 225.732L135 293.804C131.906 295.59 128.094 295.59 125 293.804L7.0962 225.732C4.00218 223.946 2.09619 220.644 2.09619 217.072V80.9282C2.09619 77.3556 4.00218 74.0543 7.09619 72.2679L125 4.19616Z" stroke="#B8D1CD" strokeOpacity="0.4" strokeWidth="4"/>
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    )
}