import { useEffect, useState } from "react";
import './_widget-controller.scss';

const WidgetController = () => {
    const [isVisible, setIsVisible] = useState(false);

    // появление при скролле
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (header) {
                const headerHeight = header.offsetHeight;
                setIsVisible(window.scrollY > headerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    // стили кнопки "Онлайн-запись"
    useEffect(() => {
        const applyWidgetStyles = () => {
            const widgetBg = document.querySelector('.yButtonBackground');
            if (widgetBg) {
                widgetBg.style.background = '#00EAF';
            }

            const widgetText = document.querySelector('.yButtonText');
            if (widgetText) {
                widgetText.style.fontFamily = 'Roboto Condensed, sans-serif';
                widgetText.style.fontSize = '16px';
                widgetText.style.color = '#2C2C2C';
                widgetText.style.fontWeight = '400';
            }
        }

        // видимость кнопки
        const widgetButton = document.querySelector('.yButton');
        if (widgetButton) {
            widgetButton.style.opacity = isVisible ? '1' : '0';
            widgetButton.style.pointerEvents = isVisible ? 'auto' : 'none';
            widgetButton.style.transition = 'right 0.4s ease-in-out, transform 0.4s ease-in-out';

            if (isVisible) {
                widgetButton.style.transform = 'translateX(0)';
            } else {
                widgetButton.style.transform = 'translateX(100%)';
            }
        }

        applyWidgetStyles();

        const timers = [
            setTimeout(applyWidgetStyles, 1000),
            setTimeout(applyWidgetStyles, 3000)
        ];

        return () => timers.forEach(timer => clearTimeout(timer));
    }, [isVisible]);
}
export default WidgetController;