import Button from '../../../ui/Button/Button';
import './_hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <h1 className="hero__title">ИСКУССТВО СТРИЖКИ <br className="hero__br-desktop" />ДЛЯ НАСТОЯЩИХ МУЖЧИН В Г. ЧУДОВО</h1>
            <p className="hero__guarantee">Гарантия на стрижку 3 дня</p>
            <Button
                variant='accent'
                size='large'
                href="https://b.estokoshko.ru/m/CM9JYUW"
                external={true}
            >
                Записаться
            </Button>
        </section>
    );
};

export default Hero;