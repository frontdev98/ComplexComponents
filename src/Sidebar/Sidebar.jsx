import './Sidebar.scss';
import { SlArrowLeft } from "react-icons/sl";

const SIDEBAR_CONTENT = [
    'Products',
    'Services',
    'Our team',
    'About the company',
];

/*
    Демонстрация компонента "Боковая панель".

    Не имеет собственного состояния.

    Использует функцию-callback для изменения состояния <App />:
        1) Деактивировать <Sidebar />;

    props.toggleSidebar - callback-функция для изменения состояния <App />;
    props.isActive      - флаг активации компонента <Sidebar />;
*/
function Sidebar(props) {

    const toggleSidebar = props.toggleSidebar; // hide the sidebar
    const isActive = props.isActive;

    return <>
        <aside className={"sidebar" + ((isActive) ? ' sidebar_active' : '')}>
            <div className="sidebar__header">
                Site Map 
            </div>
            <span className='sidebar__arrow' onClick={toggleSidebar}>
                    <SlArrowLeft />  
            </span>
            <ul className="sidebar__content">
                {SIDEBAR_CONTENT.map((content, index) => <SidebarItem key={index} url='#' content={content} />)}
            </ul>
        </aside>;
    </>;
}

/*
    Компонент боковой панели (кликабельная ссылка).

    props.url     - адрес, доступный по ссылке;
    props.content - строка или SVG-иконка;
*/
function SidebarItem(props) {
    const url = props.url;
    const content = props.content;

    return <>
        <li className='sidebar__item'>
            <a href={url} className='sidebar__link'>{content}</a>
        </li>
    </>;
}

export default Sidebar;