import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
  return <GoogleMap 
    defaultZoom={10}
    defaultCenter={{lat: 21.027763, lng: 105.834160}}
  />
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
