import { useState } from 'react';
import './_top-nav.scss';
import LogoAccent from '../../../ui/Logo/LogoAccent/LogoAccent';
import BurgerMenuIcon from '../../../ui/BurgerMenu/BurgerMenuIcon/BurgerMenuIcon';
import BurgerMenuWindow from '../../../ui/BurgerMenu/BurgerMenuWindow/BurgerMenuWindow';

const TopNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <div className="top-nav">
            <LogoAccent />
            <BurgerMenuIcon isOpen={isMenuOpen} onClick={toggleMenu} />
            <BurgerMenuWindow isOpen={isMenuOpen} onClose={closeMenu} />
        </div>
    )
}
export default TopNav;