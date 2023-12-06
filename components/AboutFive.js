import React, { Component } from 'react';

export default class AboutFive extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='about-five'>
        <div className='container'>
          <img
            src='/assets/images/resources/about-moc-1-1.png'
            className='about-five__moc'
            alt=''
          />
          <div className='row'>
            <div className='col-lg-6'>
              <div className='about-five__content'>
                <i className='about-five__icon vimns-icon-shopping-online'></i>
                <div className='block-title text-left'>
                  <p>Stay Home & Save Yourself From Coronavirus </p>
                  <h3>Purchase What You Need Online</h3>
                </div>
                <p>
                  FOR RELIABLE AND QUICK MEDICINE DELIVERY IN PHILIPPINES,
                  CHOOSE COVIDWATCH
                </p>

                <ul className='list-unstyled about-one__list'>
                  <li>
                    <i className='vimns-icon-tick'></i> Medical Information,
                    Food Health Tips, Beauty & Fitness Tips
                  </li>
                  <li>
                    <i className='vimns-icon-tick'></i> Just Upload your
                    Prescription We will take of the Rest
                  </li>
                  <li>
                    <i className='vimns-icon-tick'></i> Reliable and Quick
                    Medicine Delivery in Philippines
                  </li>
                </ul>
                <a href='#' className='thm-btn about-five__btn'>
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
