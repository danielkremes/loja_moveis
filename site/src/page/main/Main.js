import React, { useState } from 'react';
import './Main.css';

const Main = () => {
    // State for carousel indexes in each section
    const [currentIndex, setCurrentIndex] = useState({
        section1: 0,
        section2: 0,
        section3: 0,
    });

    const images1 = ['./1.jpeg', './2.jpeg', './3.jpeg'];  // Images for section 1
    const images2 = ['./4.jpeg', './5.jpeg', './6.jpeg'];  // Images for section 2
    const images3 = ['./7.jpeg', './8.jpeg', './9.jpeg'];  // Images for section 3

    // Function to move to the next slide
    const nextSlide = (section) => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex[section] + 1) % imagesForSection(section).length;
            return {
                ...prevIndex,
                [section]: nextIndex,
            };
        });
    };

    // Function to move to the previous slide
    const prevSlide = (section) => {
        setCurrentIndex((prevIndex) => {
            const prevIndexValue = (prevIndex[section] - 1 + imagesForSection(section).length) % imagesForSection(section).length;
            return {
                ...prevIndex,
                [section]: prevIndexValue,
            };
        });
    };

    // Function to return the images for each section
    const imagesForSection = (section) => {
        switch (section) {
            case 'section1':
                return images1;
            case 'section2':
                return images2;
            case 'section3':
                return images3;
            default:
                return [];
        }
    };

    return (
        <main className="container-main">
            {/* Section 1 */}
            <section className="container-child-main">
                <h1>GUARDA ROUPAS CASAL 6 PORTAS DEMARTEZ ÁTRICE - Seção 1</h1>

                <div className="slider">
                    <div
                        className="slider-container"
                        style={{ transform: `translateX(-${currentIndex.section1 * 100}%)` }}
                    >
                        {imagesForSection('section1').map((src, index) => (
                            <img key={index} src={src} alt={`Imagem ${index + 1}`} />
                        ))}
                    </div>

                    <button className="prev" onClick={() => prevSlide('section1')}>
                        &#10094;
                    </button>
                    <button className="next" onClick={() => nextSlide('section1')}>
                        &#10095;
                    </button>
                </div>
                <p> TO Guarda Roupa Atrice traz em seu design a união da beleza, funcionalidade e versatilidade, devido as diversas configurações e disposição de portas, sendo todas em espelho ou simplesmente em madeira. A harmonia de cores, disposição de puxadores, juntamente com o fechamento total das molduras envolventes embelezam o produto e o ambiente.</p>
            </section>

            {/* Section 2 */}
            <section className="container-child-main">
                <h1>GUARDA ROUPAS CASAL 6 PORTAS DEMARTEZ ÁTRICE - Seção 2</h1>


                <div className="slider">
                    <div
                        className="slider-container"
                        style={{ transform: `translateX(-${currentIndex.section2 * 100}%)` }}
                    >
                        {imagesForSection('section2').map((src, index) => (
                            <img key={index} src={src} alt={`Imagem ${index + 1}`} />
                        ))}
                    </div>

                    <button className="prev" onClick={() => prevSlide('section2')}>
                        &#10094;
                    </button>
                    <button className="next" onClick={() => nextSlide('section2')}>
                        &#10095;
                    </button>
                </div>

                <p> TO Guarda Roupa Atrice traz em seu design a união da beleza, funcionalidade e versatilidade, devido as diversas configurações e disposição de portas, sendo todas em espelho ou simplesmente em madeira. A harmonia de cores, disposição de puxadores, juntamente com o fechamento total das molduras envolventes embelezam o produto e o ambiente.</p>
            </section>

            {/* Section 3 */}
            <section className="container-child-main">
                <h1>GUARDA ROUPAS CASAL 6 PORTAS DEMARTEZ ÁTRICE - Seção 3</h1>

                <div className="slider">
                    <div
                        className="slider-container"
                        style={{ transform: `translateX(-${currentIndex.section3 * 100}%)` }}
                    >
                        {imagesForSection('section3').map((src, index) => (
                            <img key={index} src={src} alt={`Imagem ${index + 1}`} />
                        ))}
                    </div>

                    <button className="prev" onClick={() => prevSlide('section3')}>
                        &#10094;
                    </button>
                    <button className="next" onClick={() => nextSlide('section3')}>
                        &#10095;
                    </button>
                </div>
                <p> TO Guarda Roupa Atrice traz em seu design a união da beleza, funcionalidade e versatilidade, devido as diversas configurações e disposição de portas, sendo todas em espelho ou simplesmente em madeira. A harmonia de cores, disposição de puxadores, juntamente com o fechamento total das molduras envolventes embelezam o produto e o ambiente.</p>
            </section>

               {/* Section 3 */}
               <section className="container-child-main">
                <h1>GUARDA ROUPAS CASAL 6 PORTAS DEMARTEZ ÁTRICE - Seção 3</h1>

                <div className="slider">
                    <div
                        className="slider-container"
                        style={{ transform: `translateX(-${currentIndex.section3 * 100}%)` }}
                    >
                        {imagesForSection('section3').map((src, index) => (
                            <img key={index} src={src} alt={`Imagem ${index + 1}`} />
                        ))}
                    </div>

                    <button className="prev" onClick={() => prevSlide('section3')}>
                        &#10094;
                    </button>
                    <button className="next" onClick={() => nextSlide('section3')}>
                        &#10095;
                    </button>
                </div>
                <p> TO Guarda Roupa Atrice traz em seu design a união da beleza, funcionalidade e versatilidade, devido as diversas configurações e disposição de portas, sendo todas em espelho ou simplesmente em madeira. A harmonia de cores, disposição de puxadores, juntamente com o fechamento total das molduras envolventes embelezam o produto e o ambiente.</p>
            </section>

            <section className="container-child-main">
                <h1>GUARDA ROUPAS CASAL 6 PORTAS DEMARTEZ ÁTRICE - Seção 3</h1>

                <div className="slider">
                    <div
                        className="slider-container"
                        style={{ transform: `translateX(-${currentIndex.section3 * 100}%)` }}
                    >
                        {imagesForSection('section3').map((src, index) => (
                            <img key={index} src={src} alt={`Imagem ${index + 1}`} />
                        ))}
                    </div>

                    <button className="prev" onClick={() => prevSlide('section3')}>
                        &#10094;
                    </button>
                    <button className="next" onClick={() => nextSlide('section3')}>
                        &#10095;
                    </button>
                </div>
                <p> TO Guarda Roupa Atrice traz em seu design a união da beleza, funcionalidade e versatilidade, devido as diversas configurações e disposição de portas, sendo todas em espelho ou simplesmente em madeira. A harmonia de cores, disposição de puxadores, juntamente com o fechamento total das molduras envolventes embelezam o produto e o ambiente.</p>
            </section>
            
        </main>
    );
};

export default Main;
