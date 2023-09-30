import './Offer.css'
const Offer = () => {
    return(
      <>
      <div className="slidingGallery">
        <div className='page-wrapper'></div>
      </div>
      <div className="containerOffer">
      <h1>Oferta</h1>
      <div className="animationOffer">
        W naszym zakładzie oferujemy wiele różnych usług takich jak:
        <ul>
          <li>serwis samochodów osobowych (wymiany płynów eksploatacyjnych oraz naprawy eksploatacyjne)</li>
          <li>remonty generalne silników</li>
          <li>naprawa oraz remonty generalne silników samochodów retro (Polonez, Fiat 126p, Fiat 125p)</li>
          <li>serwis głowic silnikowych i kolektorów ssących</li>
          <li>wymiana oraz montaż opon samochodowych wraz z ich wyważeniem</li>
          <li>spawanie oraz prostowanie felg samochodowych</li>
          <li>chiptuning</li>
          <li>serwis klimatyzacji</li>
          <li>dynamiczna wymiana oleju w automatycznych skrzyniach biegów</li>
          <li>naprawa manualnych skrzyń biegów</li>
        </ul>
      </div>

      </div>
      

      </>
    ); 
  };
  
  export default Offer;