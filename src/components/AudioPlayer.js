import React, { useState, useRef, useContext, useEffect } from 'react';
import music from '../misc/cosmic-audio.mp3';
import { useLocation } from 'react-router';
import { ApplicationContext } from '../context';

export default function AudioPlayer(props) {

    const location = useLocation();
    const homeTextColor = location.pathname === '/' ? 'p1' : 'p1';
    const aboutTextColor = location.pathname === '/about' ? 'p1 bronze' : 'p1';
    const servicesTextColor = location.pathname === '/services' ? 'p1' : 'p1';
    const connectTextColor = location.pathname === '/connect' ? 'p1' : 'p1';

    const { active } = useContext(ApplicationContext);
    const activeMenuTextColorHome = location.pathname === '/' ? 'cream' : 'p1';
    const activeMenuTextColorServices = location.pathname === '/services' ? 'cream' : 'p1';

    const audioRef = useRef(null);
    const { isMuted, setIsMuted } = useContext(ApplicationContext);
    const { isPlaying, setIsPlaying } = useContext(ApplicationContext);

    // useEffect(() => {
    //    togglePlaying(true);
    // }, []);

    const toggleMute = () => {
        setIsMuted(!isMuted);
        audioRef.current.muted = !isMuted;
    }

    const togglePlaying = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
    };

    return (
        <div className='page-width audio-wrap'>
            <audio id='music' ref={audioRef} src={music} controls loop/>
            {active ?   <button onClick={togglePlaying} 
                            className={`btn-mute ${activeMenuTextColorHome} ${activeMenuTextColorServices}`}
                        >
                            {isPlaying ? "Pause" : "Play"}
                            <div className={`border-bottom ${activeMenuTextColorHome} ${activeMenuTextColorServices}`}></div>
                        </button>
                    :   <button onClick={togglePlaying} 
                            className={`btn-mute ${homeTextColor} ${aboutTextColor} ${servicesTextColor} ${connectTextColor}`}
                        >
                            {isPlaying ? "Pause" : "Play"}
                            <div className={location.pathname === '/about' ? 'border-bottom bronze' : 'border-bottom'}></div>
                        </button>}
        </div>
    );
}