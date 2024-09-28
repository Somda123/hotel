import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './ImageSlider.css'; // Make sure to add styling in a separate CSS file

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt={`Room ${currentIndex + 1}`} className="slider-image" />
      <div className="slider-controls">
        <IconButton onClick={handlePrevClick} aria-label="Previous Image">
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={handleNextClick} aria-label="Next Image">
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ImageSlider;
