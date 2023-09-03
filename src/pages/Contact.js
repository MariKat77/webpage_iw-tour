import './Contact.css'


const Contact = () => {
    return(
      <>
        <div className="slidingGallery">
          <div className='page-wrapper'></div>
        </div>
        <div className='contactContainer'>
          <h1>Kontakt</h1>
          <div className='containerWorkHours'>
            <h2>Godziny otwarcia</h2>
            <p>
                Poniedziałek - Piątek: 8:00 - 17:00<br/> 
                Sobota: 8:00 - 14:00<br/>
                Niedziela: Nieczynne
            </p>
          </div>
          <div className='containerAdress'>
            <h2>Adres</h2>
            <p>
            ul. Główna 48,<br/> 
            42-620, Nakło Śląskie<br/>
            Tel: +48 508 369 998
            </p>
          </div>
          <div className='containerNavigation'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10164.760736695622!2d18.906417299999998!3d50.4375581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47112bc7ddfc86b3%3A0x282035f6e6188e12!2sIw-Tour%20mechanika%20samochodowa!5e0!3m2!1spl!2spl!4v1692985642182!5m2!1spl!2spl" 
            style={{border:0}} title='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
        </div>
      </>
    
    ); 
  };
  
  export default Contact;