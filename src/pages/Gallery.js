import ImageSlider from "../components/ImageSlider";
import { slides, slidesProjects } from "./Slides";
import "./Gallery.css"
import React from 'react'
import { useInView } from 'react-intersection-observer'



const Gallery = () => {

  
    const { ref, inView, entry } = useInView({threshold: 0,})

    return(
    <>
    <div className="slidingGallery">
      <div className='page-wrapper'></div>
      
    </div>
    <br/>
    <div className="containerAll">
    <h2>Galeria zdjęć zewnątrz oraz wewnątrz warsztatu</h2>
      <div className="containerStyles">
        <ImageSlider slides={slides} />
        
      </div>
    <br/>
    <br/>
    <br/>
    <h2>Galeria zdjęć ciekawych projektów</h2>
    <div className="containerStyles">
      <ImageSlider slides={slidesProjects} />
        
    </div>
    <br/>
    <br/>
    <br/>
    <div className = {inView ? "containerText active" : "containerText"}  ref={ref}>
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
    </div>
    

    </>
    );
  };
  
  export default Gallery;