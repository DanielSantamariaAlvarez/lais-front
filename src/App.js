import Navbar from "./components/navbar/Navbar";
import "./assets/styles/style.scss";
import Carousel from "./components/carousel/Carousel.jsx";
import images from "./assets/images/images";

function App() {
  const imagesCarousel = [images.logo, images.dog]; 
  return (
    <div className="App">
      <Navbar />
      <Carousel images = {imagesCarousel} autoPlay = {true}  showButtons={true} time={3000}/>
    </div>
  );
}

export default App;
