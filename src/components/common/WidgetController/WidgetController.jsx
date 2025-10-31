import { useState, useEffect } from "react";
import './_widget-controller.scss';

/**
 * Custom widget-controller (replaced YClients widget-controller)
 * Floating booking button appears on scroll
 * Integrate with YClients booking widget and respects cookies preferences
 * Shows only after user interacts with CookiesBanner 
 * Respect user's cookies preferences
 */

const WidgetController = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [cookiesAccepted, setCookiesAccepted] = useState(false);


    /**
     * Effect for cookies status check and event listeners
     * Checks if user has seen cookies banner and sets up change listeners
     */
    useEffect(() => {
        const checkCookiesStatus = () => {
            const cookiesValue = localStorage.getItem('cookies-accepted');
            const hasSeenBanner = cookiesValue !== null;
            setCookiesAccepted(hasSeenBanner);
        };

        const handleEvent = () => {
            checkCookiesStatus();
        };

        checkCookiesStatus();

        window.addEventListener('storage', handleEvent);
        window.addEventListener('cookiesChanged', handleEvent);

        return () => {
            window.removeEventListener('storage', handleEvent);
            window.removeEventListener('cookiesChanged', handleEvent);
        };
    }, []);


    /**
     * Effect for scroll detection and button visibility
     * Shows/hides button based on scroll position with debouncing
     */
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');

            if (header) {
                const headerHeight = header.offsetHeight;
                const shouldBeVisible = window.scrollY > headerHeight;

                if (shouldBeVisible !== isVisible) {
                    setIsVisible(shouldBeVisible);
                }
            }
        };

        let scrollTimeOut;
        const debouncedScroll = () => {
            clearTimeout(scrollTimeOut);
            scrollTimeOut = setTimeout(handleScroll, 100);
        };

        window.addEventListener('scroll', debouncedScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', debouncedScroll);
            clearTimeout(scrollTimeOut);
        }
    }, [isVisible]);

    /**
     * Handle booking button click - opens YClients widget modal
     */
    const handleBookingClick = () => {
        if (window.yWidget && window.yWidget.href) {
            window.yWidget.show(window.yWidget.href); // TODO: add fallback
        }
    };

    if (!cookiesAccepted) {
        return null;
    }
    return (
        <button
            className={`custom-booking-button ${isVisible ? 'button-visible' : 'button-hidden'}`}
            onClick={handleBookingClick}
            aria-label="Онлайн-запись"
        >
            <span className="custom-booking-button__text">Онлайн<br />запись</span>
        </button>
    );
};

export default WidgetController;