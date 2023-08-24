import { useState } from "react";

const slideS = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const leftArrowS = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

const rightArrowS = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderS = {
  position: "relative",
  height: "100%",
};

const dotSContainerS = {
  display: "flex",
  justifyContent: "center",
};

const dotS = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const dotSActive = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  color: "#14AD24"
};

const ImageSlider = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideSWidthBackground = {
    ...slideS,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const slideTextS = {
    position: "relative", 
    display: "flex",
    justifyContent: "center",
    fontSize: "20px",
    margin: "auto",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "grey",
    width: "50%",
    textAlign: "center"
  }

  return (
    <>
    <div style={sliderS}>
      <div>
        <div onClick={goToPrevious} style={leftArrowS}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowS}>
          ❱
        </div>
      </div>
      <div style={slideSWidthBackground}></div>
      <div style={dotSContainerS}>
        {slides.map((slide, slideIndex) => (
          <div
            style={currentIndex === slideIndex ? dotSActive : dotS}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
      <div style={slideTextS}>
      {slides[currentIndex].title}
      </div>
    </div>
    
    </>
  );
};

export default ImageSlider;