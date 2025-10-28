import { useState, useEffect } from "react";
import './_widget-controller.scss';

/**
 * Custom widget-controller (replaced YClients widget-controller)
 * Floating booking button appears on scroll
 * Integrate with YClients booking widget and respects cookies preferences
 * Shows only after user interacts with CookiesBanner and booking widget is loaded
 */

const WidgetController = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [widgetReady, setWidgetReady] = useState(false);

    // FIXED: show widget-contrpller button only after user has seen cookies banner
    const [cookiesAccepted, setCookiesAccepted] = useState(true);


    /**
     * Main initialization effect - handles cookies check  and widget readiness
     * Sets up event listeners for cookies changes and widget detection
     */
    useEffect(() => {

        /**
         * Checks if user has interacted with CookiesBanner
         * Banner sets 'cookies-accepted' in local storage when user makes the choice
         * Doesn't matter what user clicked - just they saw it
         */
        const checkCookiesStatus = () => {
            const cookiesValue = localStorage.getItem('cookies-accepted');
            const hasSeenBanner = cookiesValue !== null;
            setCookiesAccepted(hasSeenBanner);
        };

        /**
         * Checks if YClients widget is available 
         * Supports both variavle names 'yWidget' and 'ywidget' for compatibility
         */
        const checkWidget = () => {
            if (window.yWidget || window.ywidget) {
                setWidgetReady(true);
                return true;
            }
            return false;
        };
        const handleEvent = () => {
            console.log('Cookies event received');
            checkCookiesStatus();
        }
        checkCookiesStatus();

        // Fallback: if widget doesn't load in 3 seconds, show button anyway. If widget is ready, clear the fallback timer
        const widgetTimer = setTimeout(() => {
            setWidgetReady(true);
        }, 3000);
    
        checkWidget();
    

        window.addEventListener('storage', handleEvent);
    window.addEventListener('cookiesChanged', handleEvent);


    return () => {
        clearTimeout(widgetTimer);
        window.removeEventListener('storage', handleEvent);
        window.removeEventListener('cookiesChanged', handleEvent);
    };
}, []);

/**
 * Scroll detection effect, shows and hides button, based on scroll position
 * Uses debouncing for performance and calculates header height for threshold
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
 * Falls back gracefully if widget isn't available
 */
const handleBookingClick = () => {
    if (window.yWidget && window.yWidget.href) {
        window.yWidget.show(window.yWidget.href); // TODO: add fallback
    }
};

useEffect(() => {
    console.log('isVisible changed:', isVisible);
}, [isVisible]);

// if (!widgetReady || !cookiesAccepted) {
//     console.log('NOT rendering - condition failed'); // !!!!!!! 
//     return null;
// } FIX: !widgetReady
return (
    <button
        className={`custom-booking-button ${isVisible ? 'button-visible' : 'button-hidden'}`}
        onClick={handleBookingClick}
        aria-label="Онлайн-запись"
    >
        <span className="custom-booking-button__text">Онлайн<br />запись</span>
    </button>
)
}

export default WidgetController;