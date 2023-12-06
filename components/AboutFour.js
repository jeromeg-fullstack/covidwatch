import React, { Component } from 'react';

export default class AboutFour extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='about-four'>
        <img
          src='/assets/images/shapes/virus-shape-1-2.png'
          className='about-four__shape'
          alt=''
        />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='about-four__image'>
                <img src='/assets/images/resources/about-3-1.png' alt='' />
                <div className='about-four__image-content'>
                  <p>
                    Call for any <br /> emergencies
                  </p>
                  <h3>
                    <a href='tel:666-888-0000'>0947 705 2000</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='about-four__content'>
                <div className='block-title text-left'>
                  <p>About Coronavirus</p>
                  <h3>More Know About Coronavirus</h3>
                </div>
                <p>
                  The latest information about the novel coronavirus identified
                  in Wuhan, China, and advice on how pharmacists can help
                  concerned patients and the public.
                </p>
                <div className='about-two__icon-wrap'>
                  <div className='about-two__icon-single'>
                    <div className='about-two__icon'>
                      <i className='vimns-icon-infected'></i>
                    </div>
                    <div className='about-two__icon-text'>
                      <h3>
                        4684,200 people <br /> Infected
                      </h3>
                    </div>
                  </div>
                  <div className='about-two__icon-single'>
                    <div className='about-two__icon'>
                      <i className='vimns-icon-washing-hands'></i>
                    </div>
                    <div className='about-two__icon-text'>
                      <h3>
                        Daily <br /> Wash Hands
                      </h3>
                    </div>
                  </div>
                </div>
                <p>
                  A novel strain of coronavirus — SARS-CoV-2 — was first
                  detected in December 2019 in Wuhan, a city in China’s Hubei
                  province with a population of 11 million, after an outbreak of
                  pneumonia without an obvious cause. The virus has now spread
                  to over 200 countries and territories across the globe, and
                  was characterised as a pandemic by the World Health
                  Organization (WHO) on 11 March 2020.
                </p>
                <a href='#' className='thm-btn about-four__btn'>
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
