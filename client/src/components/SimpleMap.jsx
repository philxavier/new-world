import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import google_api from '../../../google_api.js'
import {SmileyHappy} from "styled-icons/boxicons-solid/SmileyHappy"
import {Building} from "styled-icons/boxicons-solid/Building"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: google_api.key}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}

          <SmileyHappy 
          lat={59.955413}
          lng={30.337844}
           size="23" color="red"
           />

          <Building 
            lat={58.955413}
            lng={30.337844}
            size="34"
          />

          
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;