import "./Offer.css";
const Offer = () => {
  return (
    <>
      <div className="slidingGallery">
        <div className="page-wrapper"></div>
      </div>
      <div className="containerOffer">
        <h1>Oferta</h1>
        <div className="animationOffer">
          <p>W naszym zakładzie oferujemy wiele różnych usług takich jak:</p>
          <div className="animationMechanicOffer">
            <h2>Mechanika pojazdowa</h2>
            <ul>
            <li>
              serwis samochodów osobowych (wymiany płynów eksploatacyjnych oraz
              naprawy eksploatacyjne)
            </li>
            <li>remonty generalne silników</li>
            <li>
              naprawa oraz remonty generalne silników samochodów retro (Polonez,
              Fiat 126p, Fiat 125p)
            </li>
            <li>serwis głowic silnikowych i kolektorów ssących</li>
            <li>chiptuning</li>
            <li>serwis klimatyzacji</li>
            <li>naprawa manualnych skrzyń biegów</li>
            <li>dynamiczna wymiana oleju w automatycznych skrzyniach biegów</li>
            
          </ul>

          </div>
          <div className="animationTiresOffer">
          <h2>Wulkanizacja oraz sprzedaż opon</h2>
            <ul>
            <li>
              wymiana oraz montaż opon samochodowych wraz z ich wyważeniem
            </li>
            <li>spawanie oraz prostowanie felg samochodowych</li>
            <li>
              prostowanie felg aluminiowych oraz stalowych
            </li>
            <li>polerowanie felg i wytaczanie</li>
            <li>malowanie proszkowe felg aluminiowych i stalowych</li>
            <li>regeneracja felg samochodowych</li>
          </ul>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Offer;
