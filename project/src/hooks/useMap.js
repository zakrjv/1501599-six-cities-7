import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useMap(mapRef, coordinates, zoom) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: coordinates,
        zoom: zoom,
      });

      instance.setView(coordinates, zoom);

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
      map.flyTo(coordinates);
    }

  }, [mapRef, map, coordinates, zoom]);

  return map;
}

export default useMap;
