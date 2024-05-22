import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import BookTable from 'components/BookTable'
import Header from 'components/Header'
import OurMenu from 'components/OurMenu'
import Slider from 'components/Slider'
// Images
import slide1 from 'images/pizza1.jpg'
import slide2 from 'images/pizza2.jpg'
import slide3 from 'images/pizza3.jpg'
import slide4 from 'images/pizza4.jpg'
import slide5 from 'images/pizza5.jpg'
import menu1 from 'images/menu1.jpg'
import menu2 from 'images/menu2.jpg'
import menu3 from 'images/menu3.jpg'
import menu4 from 'images/menu4.jpg'

function App() {
  const navItems = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About Us' },
    { id: 3, name: 'Contact' },
  ]

  const slides = [
    { id: 1, src: slide1, alt: 'slide1' },
    { id: 2, src: slide2, alt: 'slide2' },
    { id: 3, src: slide3, alt: 'slide3' },
    { id: 4, src: slide4, alt: 'slide4' },
    { id: 5, src: slide5, alt: 'slide5' },
  ]

  const ourMenus = [
    { id: 1, src: menu1, alt: 'menu1', title: 'Margherita Pizza', price: '$24.00', store: 'sale' },
    { id: 2, src: menu2, alt: 'menu2', title: 'Mushroom Pizza', price: '$25.00' },
    { id: 3, src: menu3, alt: 'menu3', title: 'Hawaiian Pizza', price: '$30.00', store: 'new' },
    { id: 4, src: menu4, alt: 'menu4', title: 'Pesto Pizza', price: '$530.00', store: 'sale' },
  ]

  const inputs = [
    { id: 1, type: 'text', placeholder: 'Your Name *' },
    { id: 2, type: 'text', placeholder: 'Your Email *' },
    { id: 3, type: 'number', placeholder: 'Select a Service *' },
  ]

  return (
    <div className="App bg-dark">
      <Header title="Pizza House" items={navItems} />
      <Slider
        slides={slides}
        title="Neapolitan Pizza"
        desc="If you are looking for a traditional Italian pizza, the Neapolitan
            is the best option."
      />
      <OurMenu menus={ourMenus} />
      <BookTable inputs={inputs} />
    </div>
  )
}

export default App
