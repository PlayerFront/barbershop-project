import './_burger-menu-window.scss';

const BurgerMenuWindow = ({ isOpen, onClose}) => {
    return (
        <nav className={`burger-menu-window ${isOpen ? 'burger-menu-window-open' : ''}`}>
            <div className="burger-menu-window__content">
                <a href="#about" className="burger-menu-window__link" onClick={onClose}>Обо мне</a>
                <a href="#services" className="burger-menu-window__link" onClick={onClose}>Услуги и цены</a>
                <a href="#cosmetics" className="burger-menu-window__link" onClick={onClose}>Косметика</a>
                <a href="#reviews" className="burger-menu-window__link" onClick={onClose}>Отзывы</a>
                <a href="#contacts" className="burger-menu-window__link" onClick={onClose}>Контакты</a>
            </div>
        </nav>
    );
};

export default BurgerMenuWindow;