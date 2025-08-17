import React from 'react';
import { personalInfo } from '@/data/portfolio';
import '@/styles/components/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id='about' className='hero'>
      <div className='hero__background'>
        <div className='hero__circle hero__circle--1'></div>
        <div className='hero__circle hero__circle--2'></div>
        <div className='hero__circle hero__circle--3'></div>
        <div className='hero__particles'></div>
      </div>

      <div className='container'>
        <div className='hero__content' data-aos='fade-up' data-aos-delay='200'>
          <p className='hero__greeting' data-aos='fade-up' data-aos-delay='300'>
            hey, i'm
          </p>
          <h1 className='hero__name' data-aos='fade-up' data-aos-delay='400'>
            {personalInfo.name}
          </h1>
          <p className='hero__title' data-aos='fade-up' data-aos-delay='500'>
            {personalInfo.title.toLowerCase()}
          </p>
          <p
            className='hero__description'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            {personalInfo.objective}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
