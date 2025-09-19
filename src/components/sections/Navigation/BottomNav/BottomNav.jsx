import './_bottom-nav.scss';
import LogoText from '../../../ui/Logo/LogoText/LogoText';
import PhoneIcon from '../../../ui/PhoneIcon/PhoneIcon';
import VkIcon from '../../../ui/VkIcon/VkIcon';

const BottomNav = () => {
    return (
        <div className="bottom-nav">
            <LogoText />
            <div className="bottom-nav__right">
                <PhoneIcon />
                <VkIcon />
            </div>
        </div>
    );
};

export default BottomNav;