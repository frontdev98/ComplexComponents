import { BrowserRouter, Routes, Route } from 'react-router';

import Cardset from './Cardset/Cardset';
import CarouselContainer from './CarouselNew/Carousel';

import Navigation from './layouts/Navigation';
import { Content } from './layouts/Content';

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
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigation />}>
          <Route index path='/start' />
          <Route element={<Content /> }>
            <Route path="/cardset" element={<Cardset cards={CARD_CONTENT} />} />
            <Route path="/carousel" element={<CarouselContainer images={[Pic1, Pic2, Pic3, Pic4, Pic5, Pic6]} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
