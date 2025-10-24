import { useState, useEffect } from "react";
import './_widget-controller.scss';

const WidgetController = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [widgetReady, setWidgetReady] = useState(false);
    const [cookiesAccepted, setCookiesAccepted] = useState(true); // тут пока true

    useEffect(() => {
        const checkCookiesStatus = () => {
            const cookiesAccepted = localStorage.getItem('cookies-accepted');
            const hasSeenBanner = cookiesAccepted !== null;
            setCookiesAccepted(hasSeenBanner);
        };

        const checkWidget = () => {
            if (window.yWidget || window.ywidget) {
                setWidgetReady(true);
                return true;
            }
            return false;
        };
        const handleEvent = () => checkCookiesStatus();


        checkCookiesStatus();

        const widgetTimer = setTimeout(() => setWidgetReady(true), 3000);
        if (checkWidget()) clearTimeout(widgetTimer);

        window.addEventListener('storage', handleEvent);
        window.addEventListener('cookiesChanged', handleEvent);


        return () => {
            clearTimeout(widgetTimer);
            window.removeEventListener('storage', handleEvent);
            window.removeEventListener('cookiesChanged', handleEvent);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');

            if (header) {
                const headerHeight = header.offsetHeight;
                setIsVisible(window.scrollY > headerHeight);
            }
        };

        let scrollTimeOut;
        const debouncedScroll = () => {
            clearTimeout(scrollTimeOut);
            scrollTimeOut = setTimeout(handleScroll, 10);
        };

        window.addEventListener('scroll', debouncedScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', debouncedScroll);
            clearTimeout(scrollTimeOut);
        }
    }, []);

    const handleBookingClick = () => {
        if (window.yWidget && window.yWidget.href) {
            window.yWidget.show(window.yWidget.href);
        }
    };

    if (!widgetReady || !cookiesAccepted) {
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
    )
}

export default WidgetController;