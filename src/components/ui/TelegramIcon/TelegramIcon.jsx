import './_telegram-icon.scss';
import TelegramSvg from '../../../assets/icons/telegram-icon.svg'; // ПОМЕНЯТЬ ВСЕ

const TelegramIcon = () => {
    return (
        <a
            href="https://n1763817.yclients.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={TelegramSvg}
                alt="Telegram icon"
                className="telegram-icon"
            />
        </a>
    )
}

export default TelegramIcon;