import { useState, useEffect } from "react";
import './_widget-controller.scss';

const WidgetController = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [widgetReady, setWidgetReady] = useState(false);
    const [cookiesAccepted, setCookiesAccepted] = useState(true); // тут пока true

    useEffect(() => {
        const checkCookiesStatus = () => {
            const cookiesAccepted = localStorage.getItem('cookies-accepted');
            setCookiesAccepted(cookiesAccepted && cookiesAccepted !== 'none');
        };

        const checkWidget = () => {
            if (window.yWidget) {
                setWidgetReady(true);
            }
        };

        checkCookiesStatus();
        checkWidget();

        const handleStorageChange = () => {
            checkCookiesStatus();
        };

        const widgetInterval = setInterval(() => {
            checkWidget();
            if (window.ywidget) clearInterval(widgetInterval);
        }, 500);

        window.addEventListener('storage', handleStorageChange);

        setTimeout(() => clearInterval(widgetInterval), 1000);

        return () => {
            clearInterval(widgetInterval);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');

            if (header) {
                const headerHeight =  header.offsetHeight;
                setIsVisible(window.scrollY > headerHeight);
            }
        };

        let scrollTimeOut;
        const debouncedScroll = () => {
            clearTimeout(scrollTimeOut);
            scrollTimeOut = setTimeout(handleScroll, 10);
        };

        window.addEventListener('scroll', debouncedScroll, {passive: true});
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
// || !isVisible
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