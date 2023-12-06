import React, { Component } from 'react';

export default class ContactMap extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <iframe
        src='https://www.google.com/maps/d/embed?mid=10YLKdwnpuonKmNElA3bBAly21oc'
        width='640'
        height='480'
        className='google-map__contact'
        allowFullScreen></iframe>
    );
  }
}
