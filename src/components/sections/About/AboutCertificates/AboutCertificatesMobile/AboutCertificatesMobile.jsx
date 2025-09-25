import { useEffect, useState } from 'react';
import "./_about-certificates-mobile.scss";
import cert1 from '../../../../../assets/images/certs/certificate-1.webp';
import cert2 from '../../../../../assets/images/certs/certificate-2.webp';
import cert3 from '../../../../../assets/images/certs/certificate-3.webp';
import cert4 from '../../../../../assets/images/certs/certificate-4.webp';
import cert5 from '../../../../../assets/images/certs/certificate-5.webp';
import cert6 from '../../../../../assets/images/certs/certificate-6.webp';
import prevBtn from '../../../../../assets/icons/previous-button.svg';
import nextBtn from '../../../../../assets/icons/next-button.svg';

const AboutCertificatesMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const certificates = [cert1, cert2, cert3, cert4, cert5, cert6];

    const infiniteCertificates = [...certificates, ...certificates];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    useEffect(() => {
        if (currentIndex >= certificates.length) {
            setTimeout(() => {
                setCurrentIndex(0);
            }, 300);
        }
        if (currentIndex < 0) {
            setTimeout(() => {
                setCurrentIndex(certificates.length - 1);
            }, 300);
        }
    }, [currentIndex]);



    return (
        <div className="about-certificates-mobile">
            <div className="about-certificates-mobile__carousel">
                <div
                    className="about-certificates-mobile__track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`
                    }}
                >
                    {infiniteCertificates.map((cert, index) => (
                        <div key={index} className="about-certificates-mobile__slide">
                            <img
                                src={cert}
                                alt={`Сертификат ${index + 1}`}
                                className="about-certificates-mobile__image"
                            />
                        </div>
                    ))};
                </div>
            </div>
            <div className="about-certificates-mobile__controls">
                <button
                    className="about-certificates-mobile__btn about-certificates-mobile__btn--prev"
                    onClick={prevSlide}
                    aria-label="Предыдущий сертификат"
                >
                    <img
                        src={prevBtn}
                        alt="previous button icon"
                        className="prevBtn-icon"
                    />
                </button>

                <button
                    className="about-certificates-mobile__btn about-certificates-mobile__btn--next"
                    onClick={nextSlide}
                    aria-label="Следующий сертификат"
                >
                    <img
                        src={nextBtn}
                        alt="next button icon"
                        className="nextBtn-icon"
                    />
                </button>
            </div>
        </div>
    );
};

export default AboutCertificatesMobile;