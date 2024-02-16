import { useRef, useState, useEffect } from 'react';
import SliderItem from "./SliderItem";

import "./Slider.scss";

const Slider = ({ testimonialList }) => {
  //refs
  const sliderRef = useRef(null);
  const sliderContentRef = useRef(null);
  const sliderItemsRef = useRef([]);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  //Observer
  const observerFn = (entries, observer) => {
    entries.forEach(entry => {
        const slideItem =  entry.target;
        entry.isIntersecting ? slideItem.classList.add('active') : slideItem.classList.remove('active');

        if(prevBtnRef.current === null || nextBtnRef.current === null){
          return;
        }

        const prevButton = prevBtnRef.current;
        const nextButton = nextBtnRef.current;

        if(slideItem.classList.contains('active')){
            slideItem.previousElementSibling === null ? prevButton.classList.add('disabled') : prevButton.classList.remove('disabled');
            slideItem.nextElementSibling === null ? nextButton.classList.add('disabled') : nextButton.classList.remove('disabled');
        }
  });
};

useEffect(() => {
  if(sliderItemsRef.current !== null){
    const options = {
      root: sliderRef.current,
      threshold: 1, //in 1 100% of the content needs to be on the page
      rootMargin: '0px'
    };

    const slideItems = sliderItemsRef.current;
    const observer = new IntersectionObserver(observerFn, options);
    slideItems.forEach(slideItem => observer.observe(slideItem));
  }
}, [sliderItemsRef]);

  const getActiveSlideItem = () =>{

    const slideItems = sliderItemsRef.current;
    if(slideItems.length === 0){
      return null;
    }

    const activeSlideItem = slideItems.filter(item => {
      if(item === null){
        return false;
      }
      return item.classList.contains('active');
    });

    return activeSlideItem.length > 0 ? activeSlideItem[0] : null;
  };

  const prevButtonClickHandler = (e) => {
    e.preventDefault();

    const activeSlideItem = getActiveSlideItem();
    if(activeSlideItem === null){
      return;
    }

    const prevSiblingItem = activeSlideItem.previousElementSibling;
    if(prevSiblingItem === null || sliderContentRef.current === null){
        return;
    }

    sliderContentRef.current.scrollBy(-100, 0);
  };

  const nextButtonClickHandler = (e) => {
    e.preventDefault();

    const activeSlideItem = getActiveSlideItem();
    if(activeSlideItem === null){
      return;
    }

    const nextSiblingItem = activeSlideItem.nextElementSibling;
    if(nextSiblingItem === null || sliderContentRef.current === null){
        return;
    }

    sliderContentRef.current.scrollBy(100, 0);
  };

  return (
    <div id="TestimonialSlider" className="slider" ref={sliderRef}>
      <div className="slider-content" ref={sliderContentRef}>
        {testimonialList !== null &&
          testimonialList.map((item, index) => (
            <SliderItem
              key = {`slide_item_${index}`}
              isActive={index === 0}
              name={item.name}
              location={item.location}
              kapExperienceType={item.kapExperienceType}
              description={item.description} 
              ref={ref => !sliderItemsRef.current.includes(ref) && sliderItemsRef.current.push(ref)} />
          ))}
      </div>
      <div className="slider-controller">
        <button
          className="slider-button-prev me-2"
          type="button"
          aria-label="Previous Testimonial"
          data-target="#TestimonialSlider"
          ref={prevBtnRef}
          onClick={prevButtonClickHandler}></button>
        <button
          className="slider-button-next ms-2"
          type="button"
          aria-label="Next Testimonial"
          data-target="#TestimonialSlider"
          ref={nextBtnRef}
          onClick={nextButtonClickHandler}></button>
      </div>
    </div>
  );
};

export default Slider;
