import { useState, useEffect } from "react";
import './_cookies-banner.scss';
import Button from "../../ui/Button/Button";

/**
 * Cookies Banner component - displays cookies consent banner
 * Shows when no cookies preference is set in local storage
 * Dispatches custom events for other components to react to user choice
 */
const CookiesBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    // check if user has already made cookies choice
    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookies-accepted');
        if (!cookiesAccepted) {
            setIsVisible(true);
        }
    }, []);

    //handle accept all cookies - set prefernce and notifies other components (widgetController) and hides banner
    const acceptAll = () => {
        localStorage.setItem('cookies-accepted', 'all');
        setIsVisible(false);
        window.dispatchEvent(new Event('cookiesChanged'));
        window.dispatchEvent(new CustomEvent('cookiesChanged', {
            detail: { key: 'cookies-accepted', value: 'all' }
        }));
    }

    // handle reject all cookies  - set preference and hides banner
    const rejectAll = () => {
        localStorage.setItem('cookies-accepted', 'none');
        setIsVisible(false);
        window.dispatchEvent(new Event('cookiesChanged'));
    }

    return (
        <div className={`cookies-banner ${isVisible ? 'cookies-banner-visible' : 'cookies-banner-hidden'}`}>
            <div className='cookies-banner__content'>
                <h3 className='cookies-banner__title'>Мы используем файлы cookie</h3>
                <p className='cookies-banner__text'>Мы используем cookies для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с этим. </p>
                <div className='cookies-banner__buttons'>
                    <Button
                        variant='accent'
                        size='small'
                        onClick={acceptAll}
                    >
                        Принять всё
                    </Button>
                    <Button
                        variant='bg'
                        size='small'
                        onClick={rejectAll}
                    >
                        Нет, спасибо
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CookiesBanner;