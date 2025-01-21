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
    Главный компонент карусели. 
    name - имя компонента, с помощью которого строятся id слайдов;
    images - компоненты изображений;
*/
function Carousel({name, images}) { 
    const content = [...generateContentData(`${name}-slide-`, images)];

    // состояние карусели: первый id из списка (первый слайд)
    const [activeSlide, setActiveSlide] = useState(content[0].htmlId);

    const ref = useRef(null);

    // фокус на активный слайд карусели после обновления DOM;
    // фокус только после ПОЛНОЙ загрузки документа для избежания рывков
    useEffect(() => {
        if (document.readyState == 'complete')
            ref.current.querySelector('#' + activeSlide).focus();
    });

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