import { useRef, useEffect } from 'react';
import Translate from './Translate';

import Section from "./UI/Section";
import CardList from './UI/CardList';
import Slider from "./UI/Slider";
import Form from './UI/Form';

import './Home.scss';

import kapKeyImg from "../assets/imgs/pexels-anete-lusina-5240733.jpg";
import kapSessionImg from "../assets/imgs/pexels-arina-krasnikova-6998273.jpg";
import kapFacilitatorImg from "../assets/imgs/pexels-arina-krasnikova-6998271.jpg";
import kapWorkplaceImg from "../assets/imgs/frames-for-your-heart-3jztLhBPrUo-unsplash.jpg";
import kapMediaImg from "../assets/imgs/sean-oulashin-KMn4VEeEPR8-unsplash.jpg";
import kapTestimonialImg from "../assets/imgs/pexels-polina-kovaleva-6019746.jpg";

const Home = ({ componentLabels }) => {

  const sectionListRef = useRef([]);

  if(componentLabels === undefined){
    throw new Error('Component labels not found. Please verify the file is loaded properly.');
  }

  useEffect(() => {
    if(sectionListRef.current !== null){
      const sectionOptions = {
        root: null,
        threshold: 0,
        rootMargin: "0px",
      };

      const sectionObserverFn = (entries, observer) => {
        entries.forEach((entry) => {
          const target = entry.target;
          entry.isIntersecting && target.classList.add("fade-in");
        });
      };

      const sectionObserver = new IntersectionObserver(
        sectionObserverFn,
        sectionOptions
      );

      const sections = sectionListRef.current;
      sections.forEach((section) => sectionObserver.observe(section));

    }
  }, [sectionListRef]);

  const homePageLabels = componentLabels;
  const heroSectionLabels = homePageLabels.homeHeroSection;
  const kapStatementSectionLabels = homePageLabels.homeKapStatementSection;
  const KapSessionSectionLabels = homePageLabels.homeKapSessionSection;
  const KapFacilitatorSectionLabels = homePageLabels.homeKapFacilitatorSection;
  const KapWorkplaceSectionLabels = homePageLabels.homeKapWorkplaceSection;
  const KapServiceSectionLabels = homePageLabels.homeKapServiceSection;
  const KapTestimonialSectionLabels = homePageLabels.homeKapTestimonialSection;
  const KapMediaSectionLabels = homePageLabels.homeKapMediaSection;
  const KapSubscriptionSectionLabels = homePageLabels.homeKapSubscriptionSection;

  return (
    <>
      <Section sectionClass='sc-top'>
        <div className="col-lg-6">
          <div className='justify-content-start hero-content'>
            <h1>{heroSectionLabels.homeHeaderTitle}</h1>
            <p className="display-3 italic mt-3">
              {heroSectionLabels.homeHeaderSubtitle}
            </p>
            <a className="button button-dark mt-3" href="/">
              {heroSectionLabels.homeHeaderButton}
            </a>
          </div>
        </div>
      </Section>
      <Section sectionClass='sc sc-kap-statement fade-in' ref={(section) => (sectionListRef.current.push(section))}>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="animated-content">
            <span className="non-animated-text display-2 text-dark">KAP</span>
            <div className="text-wrapper">
              <span className="animated-text display-2">Kundalini</span>
              <span className="animated-text display-2">Activation</span>
              <span className="animated-text display-2">Process</span>
            </div>
          </div>
        </div>
      </Section>
      <Section sectionClass='sc sc-primary sc-kap-key' ref={(section) => (sectionListRef.current.push(section))}>
        <div className="col-12 col-lg-6">
          <div className="info-container">
            <div>
              <div className="icon-lotus-flower"></div>
              <p className="display-2 normal italic text-dark mt-5">
                {kapStatementSectionLabels.homeKapStatement}
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="img-wrapper">
            <img
              className="img img-fluid"
              src={kapKeyImg}
              alt={kapStatementSectionLabels.homeKapStatementImgDescription}
              loading="lazy"
            />
            <div className="img-frame"></div>
          </div>
        </div>
      </Section>
      <Section sectionClass='sc sc-secondary sc-kap-session' ref={(section) => (sectionListRef.current.push(section))}>
        <div className="col-12 col-lg-6">
          <div className="img-wrapper">
            <img
              className="img img-fluid"
              src={kapSessionImg}
              alt={KapSessionSectionLabels.homeKapSessionImgDescription}
              loading="lazy"
            />
            <div className="img-frame"></div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="info-container">
            <div>
              <div className="icon-lotus-flower"></div>
              <h2 className="mt-5">
                {KapSessionSectionLabels.homeKapSessionTitlte}
              </h2>
              <p className="mt-4">
                {KapSessionSectionLabels.homeKapSessionDescription1}
              </p>
              <p className="mt-3">
                {KapSessionSectionLabels.homeKapSessionDescription2}
              </p>
              <a className="button button-dark mt-5" href="/">
                {KapSessionSectionLabels.homeKapSessionButton}
              </a>
            </div>
          </div>
        </div>
      </Section>
      <Section sectionClass='sc sc-primary sc-facilitator' ref={(section) => (sectionListRef.current.push(section))}>
        <div className="col-12 col-lg-6">
          <div className="info-container">
            <div>
              <div className="icon-lotus-flower"></div>
              <h2 className="mt-5">{KapFacilitatorSectionLabels.homeKapFacilitatorTitle}</h2>
              <p className="mt-4">
                {KapFacilitatorSectionLabels.homeKapFacilitatorDescription1}
              </p>
              <p className="mt-3">
                {KapFacilitatorSectionLabels.homeKapFacilitatorDescription2}
              </p>
              <a className="button button-dark mt-5" href="/">
                {KapFacilitatorSectionLabels.homeKapFacilitatorButton}
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="img-wrapper">
            <img
              className="img img-fluid"
              src={kapFacilitatorImg}
              alt={KapFacilitatorSectionLabels.homeKapFacilitatorImgDescription}
              loading="lazy"
            />
            <div className="img-frame"></div>
          </div>
        </div>
      </Section>
      <Section sectionClass='sc sc-secondary sc-workplace' ref={(section) => (sectionListRef.current.push(section))}>
        <div className="col-12 col-lg-6">
          <div className="img-wrapper">
            <img
              className="img img-fluid"
              src={kapWorkplaceImg}
              alt={KapWorkplaceSectionLabels.homeKapWorkplaceImgDescription}
              loading="lazy"
            />
            <div className="img-frame"></div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="info-container">
            <div>
              <div className="icon-lotus-flower"></div>
              <h2 className="mt-5">{KapWorkplaceSectionLabels.homeKapWorkplaceTitle}</h2>
              <p className="mt-4">{KapWorkplaceSectionLabels.homeKapWorkplaceDescription3}</p>
              <p className="mt-3">
                {KapWorkplaceSectionLabels.homeKapWorkplaceDescription3}
              </p>
              <p className="mt-3">
                {KapWorkplaceSectionLabels.homeKapWorkplaceDescription3}
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section sectionClass='sc sc-services' title={KapServiceSectionLabels.homeKapServicesTitle}
               containerClass='text-center' rowClass='align-items-stretch mt-4 mx-0' 
               ref={(section) => (sectionListRef.current.push(section))}>
        <div className="col-12 d-flex justify-content-between p-0">
          <CardList kapServiceList={KapServiceSectionLabels.homeKapServiceList} />
        </div>
      </Section>
      <Section sectionClass='sc sc-testimonial' title={KapTestimonialSectionLabels.homeKapTestimonialTitle}
               containerClass='text-center' rowClass='align-items-stretch mt-4'
               ref={(section) => (sectionListRef.current.push(section))}>
        <div className="col-12 col-lg-4">
          <div className="img-wrapper">
            <img
              className="img-fluid"
              src={kapTestimonialImg}
              alt={KapTestimonialSectionLabels.homeKapTestimonialImgDescription}
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <Slider testimonialList={KapTestimonialSectionLabels.homeKapTestimonialList} />
        </div>
      </Section>
      <Section sectionClass='sc sc-primary sc-media' ref={(section) => (sectionListRef.current.push(section))}>
        <div className="col-12 col-lg-5">
          <div className="info-container">
            <div>
              <div className="icon-lotus-flower"></div>
              <h2 className="mt-5">{KapMediaSectionLabels.homeKapMediaTitle}</h2>
              <p className="mt-4">{KapMediaSectionLabels.homeKapMediaDescription1}</p>
              <p className="mt-3">{KapMediaSectionLabels.homeKapMediaDescription2}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <div className="img-wrapper">
            <img
              className="img img-fluid"
              src={kapMediaImg}
              alt={KapMediaSectionLabels.homeKapMediaImgDescription}
              loading="lazy"
            />
            <div className="img-frame"></div>
          </div>
        </div>
      </Section>
      <Section sectionClass='sc sc-subscribe' ref={(section) => (sectionListRef.current.push(section))}>
        <div className="col-12 d-flex justify-content-center text-center">
          <Form title={KapSubscriptionSectionLabels.homeKapSubscriptionTitle} description={KapSubscriptionSectionLabels.homeKapSubscriptionDescription} 
                inputPlaceholder={KapSubscriptionSectionLabels.homeKapSubscriptionInputPlaceholder} buttonLabel={KapSubscriptionSectionLabels.homeKapSubscriptionButton}/>
        </div>
      </Section>
    </>
  );
};

export default Translate(Home, 'Home');
