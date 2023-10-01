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
            <li>serwis głowic silnikowych i kolektorów ssących (mycie podzespołów w wannie ultradźwiękowej)</li>
            <li>chiptuning</li>
            <li>serwis klimatyzacji</li>
            <li>naprawa manualnych skrzyń biegów</li>
            <li>dynamiczna wymiana oleju w automatycznych skrzyniach biegów</li>
            <ol>
              <li>skrzynie SHP-Audi i BMW</li>
              <li>9GTronic Mercedes</li>
              <li>DSG i S-Tronic (OB5 i OCK) grupy VW Audi</li>
            </ol>
            
          </ul>

          </div>
          <div className="animationTiresOffer">
          <h2>Wulkanizacja, felgi oraz sprzedaż opon</h2>
            <ul>
            <li>
              sprzedaż oraz montaż opon samochodowych wraz z ich wyważeniem
            </li>
            <li>spawanie oraz prostowanie felg samochodowych (aluminiowych i stalowych)</li>
            <li>polerowanie felg i wytaczanie</li>
            <li>malowanie proszkowe felg aluminiowych i stalowych</li>
            <li>regeneracja felg samochodowych</li>
            <li>programowanie i montaż czujników TPMS (wszystkie marki)</li>
            <li>pełna gama akcesorii do felg (naklejki, delkielki, śruby, zawory i pierścienie centrujące do wszystkich rodzajów felg)</li>
          </ul>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Offer;
