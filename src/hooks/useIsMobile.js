import { useState, useEffect } from "react";

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

