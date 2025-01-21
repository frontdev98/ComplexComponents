/*
    Карусель; точка входа.
*/

import Content from "./Content";
import BottomNavigation from "./BottomNavigation";
import SideNavigation from "./SideNavigation";
import './css/Carousel.css'
import { useEffect, useRef, useState } from "react";

/*
    Генератор данных для карусели вида 
    [
        {htmlId: 'id-0', img: <image-obj>},
        {htmlId: 'id-1', img: <image-obj>},
        ...
    ]
*/
function* generateContentData(idPrefix, images) {
    for (let i = 0; i <= images.length-1; i++) {
        yield {htmlId: idPrefix + i, img: images[i]}
    }
}

/*
    Обработчик обнаружения карусели в области просмотра пользователя.
    Скроллит содержимое карусели к определенному .carousel__slide
    по его id тогда, когда пользователь физически видит 80% компонента.
*/
function scrollCarouselWhenViewied(carouselRef, slideId) {

    const observer = new IntersectionObserver((entries, observer) => {
        const activeSlide = document.getElementById(slideId);

        entries.forEach((entry) => {
            console.log(entry);
            if (entry.intersectionRatio == 1.0) {
                activeSlide.scrollIntoView({
                    behavior: "smooth",
                    block: "start", 
                    inline: "center"
                });

                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(carouselRef);
}

/*
    Главный компонент карусели. 
    name - имя компонента, с помощью которого строятся id слайдов;
    images - компоненты изображений;
*/
function Carousel({name, images}) { 
    const content = [...generateContentData(`${name}-slide-`, images)];

    // состояние карусели: первый id из списка (первый слайд)
    const [activeSlide, setActiveSlide] = useState(content[0].htmlId);

    const ref = useRef(null);

    // фокус на активный слайд карусели после обновления DOM.
    // из-за архитектуры приложения, каждый раз после перерисовки компонента,
    // происходит фокус на карусель, скролля всю страницу.
    // решение: скроллить слайды только если пользователь физически видит карусель.
    useEffect(() => scrollCarouselWhenViewied(ref.current, activeSlide));

    return (
        <div ref={ref} id={name} className="carousel">
            <Content contentData={content} /> 
            <SideNavigation setActiveSlide={setActiveSlide} />
            <BottomNavigation
                contentData={content}
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
            />
        </div>
    )
}

export default Carousel