import './_telegram-icon.scss';
import TelegramSvg from '../../../assets/icons/telegram-icon.svg';

const TelegramIcon = () => {
    return (
        <a
            href="https://b.estokoshko.ru/m/CM9JYUW"
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