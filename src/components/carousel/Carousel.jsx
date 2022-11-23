import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
`;

const CarouselImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CarouselButton = styled.button`
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 8px;
  margin: 0 5px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  font-size: 10px;
  fonnt-weight: bold;
`;


export default function Carousel(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images);
      }, props.time);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, props.images);
  };
  return (
    <CarouselContainer>
      <CarouselImg
        src={selectedImage.src}
        alt={selectedImage.alt}
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />
      <CarouselButtonContainer>
        {props.showButtons ? (
          <>
            <CarouselButton onClick={previous}>{"<"}</CarouselButton>
            <CarouselButton onClick={next}>{">"}</CarouselButton>
          </>
        ) : (
          <></>
        )}
      </CarouselButtonContainer>
    </CarouselContainer>
  );
}