import React, { useState, createContext } from 'react';

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    const [active, setActive] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const value = {
        active: active,
        isMuted: isMuted,
        isPlaying: isPlaying,
        setActive: setActive,
        setIsMuted: setIsMuted,
        setIsPlaying: setIsPlaying
    };
    
    return (
        <ApplicationContext.Provider value={value}>
            {children}
        </ApplicationContext.Provider>
    );
}