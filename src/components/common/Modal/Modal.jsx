import './_modal.scss';
import closeIcon from '../../../assets/icons/close-icon.svg';

/**
 * Resauble Modal component for displaying various content
 * Supports overlay click to close and accessible close button
 * Used for CookiesPolicy and PrivacyPolicy modals
 */

const Modal = ({ isOpen, onClose, children, title }) => {
    // early return if modal isn't open 
    if (!isOpen) return null;


    /**
     * Handle overlay click - close modal only when user's clicking on backdrop
     * Prevents accidental closing when clicking inside Modal content
     */
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