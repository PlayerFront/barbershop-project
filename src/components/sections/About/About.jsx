import './_about.scss';
import AboutCertificatesDesktop from './AboutCertificates/AboutCertificatesDesktop/AboutCertificatesDesktop';
import AboutCertificatesMobile from './AboutCertificates/AboutCertificatesMobile/AboutCertificatesMobile';
import AboutContent from './AboutContent/AboutContent';

const About = () => {
    return (
        <section className="about" id="about">
            <h2 className="about__title">Обо мне</h2>
            <div className="about__container">
                <AboutContent />
                <AboutCertificatesMobile />
                <AboutCertificatesDesktop />
            </div>
        </section>
    );
};

export default About;