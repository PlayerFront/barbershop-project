import { useState, useEffect } from "react";

/**
 * Hook to detect mobile screen size
 * @param {number} breakpoint - Width breakpoint for mobile (default: 768px)
 * @returns {boolean} True if screen width is below breakpoint
 */
export const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        let timeoutId;

        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        checkMobile();

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkMobile, 100);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, [breakpoint]);

    return isMobile;
};

