import './css/Navbar.css';
import {SlBubble, SlUser, SlBasket, SlStar, SlMagnifier} from "react-icons/sl";
import { useState, useEffect, useRef, memo } from 'react';

const ICONS = [
    <SlBubble />, <SlUser />, 
    <SlBasket />, <SlStar />,
];

/*
    Демонстрация компонента "Навигацонная панель".

    Имеет собственное состояние. Оно отвечает за:
        1) Активировать/деактивировать <NavbarSearchForm />;
        2) Показазать/спрятать <NavbarSearchItem />;

    Использует функцию-callback для изменения состояния <App />, а именно:
        Активировать <Sidebar />;
    
    props.toggleSidebar - callback-функция для изменения состояния <App />.
*/
function Navbar(props) {
    const [state, setState] = useState({
        searchForm: false,  // is a form to search visible?
        searchItem: true,   // is an search item (icon) visible?
    });

    const toggleSidebar = props.toggleSidebar; // show a sidebar when logo will be clicked

    const showSearching = () => setState(
        Object.assign({}, state, {
            searchForm: true,   // show the form
            searchItem: false   // hide the icon
        })
    );

    const hideSearching = () => setState(
        Object.assign({}, state, {
            searchForm: false,  // hide the form
            searchItem: true    // show the icon
        })
    );

    return (
        <nav className="navbar">
            <div className="navbar__text-logo">
                <span onClick={toggleSidebar}>Components</span>
            </div>

            <NavbarSearchForm isActive={state.searchForm} onBlur={hideSearching} />
            
            <ul className="navbar__item-container">
                <NavbarSearchItem isActive={state.searchItem} onClick={showSearching} />
                {ICONS.map((icon, index) => <NavbarItem key={index} url='#' icon={icon} />)}
            </ul>
        </nav>
    );
}

/*
    Поле поиска в навигационной панели.

    Использует функцию-callback в обработчике onBlur для изменения состояния <Navbar />:
        1. Деактивировать <NavbarSearchForm />;
        2. Показать <NavbarSearchItem />;

    props.isActive - флаг активации компонента;
    props.onBlur   - callback-функция для изменения состояния <Navbar />;
*/
function NavbarSearchForm(props) {
    const isActive = props.isActive;
    const onBlur = () => {
        props.onBlur();
        // document.body.style.overflow = '';
    };

    const input = useRef(null);

    useEffect(() => {
        if (isActive)
            input.current.focus();
    });

    return <>
        <form className={'navbar__search' + ((isActive) ? ' navbar__search_active' : '')}>
            {/* <input ref={input} type='text' placeholder='Search...' onFocus={bodyScrollDisable} onBlur={onBlur}></input> */}
            <input ref={input} type='text' placeholder='Search...'  onBlur={onBlur}></input>
        </form>
    </>;
}

const bodyScrollDisable = () => document.body.style.overflow = 'hidden';

/*
    Кнопка поиска в навигационной панели.

    Использует callback-функцию в обработчике onClick для изменения состояния <Navbar />:
        1. Спрятать <NavbarSearchItem />;
        2. Активировать <NavbarSearchItem />;
        
    props.isActive - флаг активации компонента;
    props.onClick  - callback-функция для изменения состояния <Navbar />;
*/
function NavbarSearchItem(props) {
    const isActive = props.isActive;
    const onClick = props.onClick;

    return <>
        <li className='navbar__item'>
            <span className={'navbar__link' + ((!isActive) ? ' navbar__link_hide' : '')}
                onClick={onClick}> <SlMagnifier />
            </span>
        </li>
    </>;
}


/*
    Компонент навигационной панели (кликабельная ссылка).

    props.url     - адрес, доступный по ссылке;
    props.content - строка или SVG-иконка;
*/
const NavbarItem = memo(function NavbarItem(props) {
    const url = props.url;
    const icon = props.icon;

    return <>
        <li className='navbar__item'>
            <a href={url} className='navbar__link'>{icon}</a>
        </li>
    </>;
});

export default Navbar;