import './Home.css'
import React from 'react';
import {Link} from "react-router-dom"
const Home = () => {

    return (
      <>
      <div className="slidingGallery">
          <h1>IW-Tour<br/>
            Mechanika Pojazdowa
          </h1>
          <div className='page-wrapper'></div>
          
      </div>
      <div className='descriptionText'>
        <div className='TextContainer'>
          
          Nasza firma zajmuje się szeroko pojętą mechaniką pojazdową oraz wulkanizacją kół samochodowych.<br/><br/>
          W naszej ofercie usług znajdują się:<br/>
        <ul>
          <li>naprawy mechaniczne samochodów osobowych</li>
          <li>montaż kół samochodowych</li>
          <li>naprawa opon samochodowych</li>
          <li>chiptuning</li>
          <li>dynamiczna wymiana oleju w skrzyniach automatycznych</li>
          <li>remonty silników samochodowych</li>
        </ul>
          <Link to="/oferta">Czytaj więcej</Link>
          
        
        </div>
        
        {/*<img src="./pexels-mike-bird-190574.jpg" alt='Silnik'/>*/}
      
        </div>
      </>
      
      


    )
    
  };
  
  export default Home;