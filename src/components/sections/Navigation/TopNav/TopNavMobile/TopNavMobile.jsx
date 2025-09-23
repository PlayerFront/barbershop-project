import { useState } from 'react';
import './_top-nav-mobile.scss';
import LogoAccent from '../../../../ui/Logo/LogoAccent/LogoAccent';
import BurgerMenuIcon from '../../../../ui/BurgerMenu/BurgerMenuIcon/BurgerMenuIcon';
import BurgerMenuWindow from '../../../../ui/BurgerMenu/BurgerMenuWindow/BurgerMenuWindow';

const TopNavMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <div className="top-nav-mobile">
            <LogoAccent />
            <BurgerMenuIcon isOpen={isMenuOpen} onClick={toggleMenu} />
            <BurgerMenuWindow isOpen={isMenuOpen} onClose={closeMenu} />
        </div>
    )
}
export default TopNavMobile;