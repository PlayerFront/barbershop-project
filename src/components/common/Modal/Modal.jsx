import './_modal.scss';
import closeIcon from '../../../assets/icons/close-icon.svg';

const Modal = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className='modal'>
                <button
                    className='modal__close'
                    onClick={onClose}
                    aria-label='Закрыть'
                >
                    <img
                        src={closeIcon}
                        alt='Закрыть'
                        className='modal__icon'
                    />
                </button>
                <div className="modal__header">
                    {title && <h2 className='modal__title'>{title}</h2>}
                </div>
                <div className='modal__content'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;