import './_vk-icon.scss';
import VkSvg from '../../../assets/icons/vk-icon.svg';

const VkIcon = () => {
    return (
        <img
            src={VkSvg}
            alt="Vk icon"
            className="vk-icon"
        />
    );
};

export default VkIcon;