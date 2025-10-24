import { useState, useEffect } from "react";
import './_cookies-banner.scss';
import Button from "../../ui/Button/Button";

const CookiesBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookies-accepted');
        if (!cookiesAccepted) {
            setIsVisible(true);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem('cookies-accepted', 'all');
        setIsVisible(false);
        window.dispatchEvent(new Event('cookiesChanged'));
        console.log('Dispatching cookiesChanged event');
        window.dispatchEvent(new CustomEvent('cookiesChanged', {
            detail: { key: 'cookies-accepted', value: 'all' }
        }));
    }
    const relectAll = () => {
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
                        onClick={relectAll}
                    >
                        Нет, спасибо
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CookiesBanner;