import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './_about-certificates-mobile.scss';
import CarouselButton from '../../../../ui/CarouselButton/CarouselButton';

import cert1 from '../../../../../assets/images/certs/certificate-1.webp';
import cert2 from '../../../../../assets/images/certs/certificate-2.webp';
import cert3 from '../../../../../assets/images/certs/certificate-3.webp';
import cert4 from '../../../../../assets/images/certs/certificate-4.webp';
import cert5 from '../../../../../assets/images/certs/certificate-5.webp';
import cert6 from '../../../../../assets/images/certs/certificate-6.webp';
import prevBtn from '../../../../../assets/icons/previous-button.svg';
import nextBtn from '../../../../../assets/icons/next-button.svg';


const AboutCertificatesMobile = () => {
    const certificates = [cert1, cert2, cert3, cert4, cert5, cert6];

    return (
        <div className="about-certificates-mobile">
            <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                loop={true}
                speed={400} // Задать скорость всем анимациям
                slidesPerView={1}
                navigation={{
                    nextEl: '.about-certificates-mobile__btn--next',
                    prevEl: '.about-certificates-mobile__btn--prev',
                }}
                className="about-certificates-mobile__swiper"
            >
                {certificates.map((cert, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={cert}
                            alt={`Сертификат ${index + 1}`}
                            className="about-certificates-mobile__image"
                            loading="lazy"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="about-certificates-mobile__controls">
                <CarouselButton
                    direction="prev"
                    icon={prevBtn}
                    ariaLabel="Предыдущий слайд"
                    swiperTarget="about-certificates-mobile__btn--prev"
                />
                <CarouselButton
                    direction="next"
                    icon={nextBtn}
                    ariaLabel="Следующий слайд"
                    swiperTarget="about-certificates-mobile__btn--next"
                />
            </div>
        </div>
    )
}

export default AboutCertificatesMobile;