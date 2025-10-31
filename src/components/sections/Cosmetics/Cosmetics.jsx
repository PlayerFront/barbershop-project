import './_cosmetics.scss';
import CosmeticsGallery from './CosmeticsGallery/CosmeticsGallery';

const Cosmetics = () => {
    return (
        <section className="cosmetics" id="cosmetics">
            <h2 className="cosmetics__title">Косметика</h2>
            <div className="cosmetics__container">
                <div className="cosmetics__description">
                    <p className="cosmetics__text">В своей работе я использую косметические продукты от брендов Nishman, Rebel, Morgans, Volcano*. Основные преимущества данной косметики состоят в том, что они изготовлены из высококачественных компонентов, что обеспечивает надёжность и эффективность. Они подходят для всех типов волос и кожи, что делает их универсальными.Также Nishman, Rebel, Morgans и Volcano предлагают широкий ассортимент продукции — от гелей и восков до масел и спреев. Это позволяет клиентам выбрать именно то,что им необходимо. Продукты легко наносятся и быстро высыхают, что упрощает процесс укладки. Каждый из брендов имеет уникальный и привлекательный аромат, который останется с клиентом на протяжении всего дня.</p>
                    <hr />
                    <span className="cosmetics-disclaimer"><i>* Данный сайт не является магазином,
                        вся продукция приобретена у официальных представителей</i></span>
                </div>
                <CosmeticsGallery />
            </div>
        </section>
    );
};

export default Cosmetics;