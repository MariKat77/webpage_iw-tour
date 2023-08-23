import ImageSlider from "../components/ImageSlider";
import { slides, slidesProjects } from "./Slides";
import "./Gallery.css"
const Gallery = () => {


    return(
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h1>Galeria zdjęć zewnątrz oraz wewnątrz warsztatu</h1>
      <div className="containerStyles">
        <ImageSlider slides={slides} />
        
      </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h1>Galeria zdjęć ciekawych projektów</h1>
    <div className="containerStyles">
      <ImageSlider slides={slidesProjects} />
        
    </div>
    <br/>
    <br/>
    <br/>
    <br/> 
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="containerText">
      Powyższe zdjęcia pokazują tylko mały wycinek projektów jakie były realizowane w naszym warsztacie.<br/><br/>
      Z usług napraw mechanicznych często zajmujemy się zwykłym seriwisem samochodów, takie jak wymiana oleju, klocków hamulcowych itp., lecz dokonujemy także 
      remontów generalnych silników, napraw skrzyń biegów, dynamicznej wymiany oleju w automatycznych skrzyniach biegów oraz chiptuning'iem.<br/><br/>  
      Innymi bardzo ciekawymi projektami były:
      <ul>
        <li>naprawa skrzyni biegów CVT, która jest bardzo nietypową skrzynią jeśli chodzi o samochody osobowe</li>
        <li></li>
        <li></li>
      </ul>
    </div>

    </>
    );
  };
  
  export default Gallery;