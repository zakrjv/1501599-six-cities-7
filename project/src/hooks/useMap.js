import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import {cities} from '../mocks/cities';

function useMap(mapRef, currentCity) {
  const [map, setMap] = useState(null);
  const cityName = cities.find((city) => city.title === currentCity);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: cityName.coordinates,
        zoom: cityName.zoom,
      });

      instance.setView(cityName.coordinates, cityName.zoom);

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
      map.flyTo(cityName.coordinates);
    }

  }, [mapRef, map, cityName]);

  return map;
}

export default useMap;
