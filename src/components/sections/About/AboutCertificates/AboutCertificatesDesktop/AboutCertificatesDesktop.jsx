import './_about-certificates-desktop.scss';

import cert1 from '../../../../../assets/images/certs/certificate-1.webp';
import cert2 from '../../../../../assets/images/certs/certificate-2.webp';
import cert3 from '../../../../../assets/images/certs/certificate-3.webp';
import cert4 from '../../../../../assets/images/certs/certificate-4.webp';
import cert5 from '../../../../../assets/images/certs/certificate-5.webp';
import cert6 from '../../../../../assets/images/certs/certificate-6.webp';

const AboutCertificatesDesktop = () => {
    const certificates = [cert1, cert2, cert3, cert4, cert5, cert6];

    return (
        <div className="about-certificates-desktop">
            {certificates.map((cert, index) => (
                <div key={index} className="about-certificates-desktop__item">
                    <img
                        src={cert}
                        alt={`Сертификат ${index + 1}`}
                        className="about-certificates-desktop__image"
                    />
                </div>
            ))}
        </div>
    );
};

export default AboutCertificatesDesktop;