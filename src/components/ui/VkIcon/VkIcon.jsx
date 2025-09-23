import './_vk-icon.scss';
import VkSvg from '../../../assets/icons/vk-icon.svg';

const VkIcon = () => {
    return (
        <a
            href="https://vk.com/publickom1sx53"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={VkSvg}
                alt="Vk icon"
                className="vk-icon"
            />
        </a>
    );
};

export default VkIcon;