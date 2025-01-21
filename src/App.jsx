import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Cardset from './Cardset/Cardset';
import Carousel from './Carousel/Carousel';
import { useState } from 'react'
import Pic1 from './assets/carousel-1.jpg';
import Pic2 from './assets/carousel-2.jpg';
import Pic3 from './assets/carousel-3.jpg';
import Pic4 from './assets/carousel-4.jpg';
import Pic5 from './assets/carousel-5.jpg';
import Pic6 from './assets/carousel-6.jpg';
import Pic7 from './assets/carousel-7.jpg';

const CARD_CONTENT = [
  {header: 'The card', img: Pic1, content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius inventore tempora aperiam rem vitae labore saepe, maiores vel pariatur sint? Inventore dolorem qui ipsa assumenda, excepturi nesciunt hic atque.'},
  {header: 'The card', img: Pic2, content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius inventore tempora aperiam rem vitae labore saepe, maiores vel pariatur sint? Inventore dolorem qui ipsa assumenda, excepturi nesciunt hic atque.'},
  {header: 'The card', img: Pic3, content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius inventore tempora aperiam rem vitae labore saepe, maiores vel pariatur sint? Inventore dolorem qui ipsa assumenda, excepturi nesciunt hic atque.'},
  {header: 'The card', img: Pic4, content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius inventore tempora aperiam rem vitae labore saepe, maiores vel pariatur sint? Inventore dolorem qui ipsa assumenda, excepturi nesciunt hic atque.'},
  {header: 'The card', img: Pic5, content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius inventore tempora aperiam rem vitae labore saepe, maiores vel pariatur sint? Inventore dolorem qui ipsa assumenda, excepturi nesciunt hic atque.'},
  {header: 'The card', img: Pic6, content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius inventore tempora aperiam rem vitae labore saepe, maiores vel pariatur sint? Inventore dolorem qui ipsa assumenda, excepturi nesciunt hic atque.'},
  {header: 'The card', img: Pic7, content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius inventore tempora aperiam rem vitae labore saepe, maiores vel pariatur sint? Inventore dolorem qui ipsa assumenda, excepturi nesciunt hic atque.'},
];

function App() {
  const [state, setState] = useState({
      sidebar: false,
  });

  const toggleSidebar = () => 
    setState((prev) => Object.assign({}, prev, {sidebar: !prev.sidebar}));

  return (
    <>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isActive={state.sidebar} toggleSidebar={toggleSidebar} />
        <main className='content'>
          <Cardset cards={CARD_CONTENT} />
          <Carousel name="carousel" images={CARD_CONTENT.map((card) => card.img)} />
        </main>
    </>
  )
}

export default App