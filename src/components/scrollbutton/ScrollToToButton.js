import React, { useState, useEffect } from 'react';
import './scroll.css'; 
import scroll from '../../assets/scroll.svg';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            className="scroll-to-top"
            onClick={scrollToTop}
            style={{ display: isVisible ? 'block' : 'none' }}
        >
           <img src={scroll} alt="scroll" />
        </button>
    );
};

export default ScrollToTopButton;
