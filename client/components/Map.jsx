import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const key = process.env.MAPS_KEY

const containerStyle = {
  width: '500px',
  height: '400px'
  
};

const center = {
  lat: -41.314862,
  lng: 174.787172
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "MAPS_KEY"
  })

  // console.log(process.env.MAPS_KEY)

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)