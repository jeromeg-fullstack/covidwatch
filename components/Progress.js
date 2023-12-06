import React, { Component } from 'react';

export default class Progress extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='progress-one'>
        <img
          src='/assets/images/shapes/virus-shape-1-1.png'
          className='progress-one__virus'
          alt=''
        />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='progress-one__block'>
                <div className='block-title'>
                  <p>Location by Numbers</p>
                  <h3>
                    Coronavirus Cases Arround <br /> the Globe
                  </h3>
                </div>
                <p>
                  Covid-19 has spread around the planet, sending billions of
                  people into lockdown as health services struggle to cope. Find
                  out where the virus has spread, and where it has been most
                  deadly
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='progress-one__box-wrap'>
                <div className='progress-one__box'>
                  <h3>China</h3>
                  <p className='counter'>86000</p>
                  <span
                    className='wow slideInLeft'
                    data-wow-animation-duration='3000ms'
                    style={{ width: `80%` }}></span>
                </div>
                <div className='progress-one__box'>
                  <h3>Europe</h3>
                  <p className='counter'>4700</p>
                  <span
                    className='wow slideInLeft'
                    data-wow-duration='3000ms'
                    style={{ width: `70%` }}></span>
                </div>
                <div className='progress-one__box'>
                  <h3>Hong kong</h3>
                  <p className='counter'>3630</p>
                  <span
                    className='wow slideInLeft'
                    data-wow-duration='3000ms'
                    style={{ width: `40%` }}></span>
                </div>
                <div className='progress-one__box'>
                  <h3>UNited States</h3>
                  <p className='counter'>460</p>
                  <span
                    className='wow slideInLeft'
                    data-wow-duration='3000ms'
                    style={{ width: `30%` }}></span>
                </div>
                <div className='progress-one__box'>
                  <h3>Singapore</h3>
                  <p className='counter'>321</p>
                  <span
                    className='wow slideInLeft'
                    data-wow-duration='3000ms'
                    style={{ width: `23%` }}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
