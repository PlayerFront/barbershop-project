import './_burger-menu-icon.scss';
import BurgerMenuSvg from '../../../../assets/icons/burger-menu-icon.svg';

const BurgerMenuIcon = ({ isOpen, onClick }) => {
    return (
        <button
            className={`burger-menu-icon ${isOpen ? 'burger-menu-icon--open' : ''}`}
            onClick={onClick}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
            <img
                src={BurgerMenuSvg}
                alt="Мею сайта"
                className="burger-menu__svg"
            />
        </button >
    );
};

export default BurgerMenuIcon;