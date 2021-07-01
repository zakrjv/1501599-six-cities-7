import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import {cities} from '../mocks/cities';

function useMap(mapRef, currentCity) {
  const [map, setMap] = useState(null);
  const initialCity = cities.find((city) => city.title === currentCity);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: initialCity.coordinates,
        zoom: initialCity.zoom,
      });

      instance.setView(initialCity.coordinates, initialCity.zoom);

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);

    } else {
      map.flyTo(initialCity.coordinates);
    }

  }, [mapRef, map, initialCity]);

  return map;
}

export default useMap;
