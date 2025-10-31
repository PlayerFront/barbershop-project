import './_yclients-icon.scss';
import YClientsSvg from '../../../assets/icons/yclients-icon.svg'
const YClientsIcon = () => {
    return (
        <a
            href="https://n1763817.yclients.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Записаться на стрижку"
        >
            <img
                src={YClientsSvg}
                alt="YClients icon"
                className="yclients-icon"
            />
        </a>
    )
}

export default YClientsIcon; 