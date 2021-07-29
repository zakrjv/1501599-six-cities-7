import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../hooks/useMap';
import placeCardProp from '../../../props/place-card.prop';
import {MapMarker} from '../../../const';
import {cities} from '../../../mocks/cities';
import {useSelector} from 'react-redux';
import {getCurrentCity} from '../../../store/reducer/main/selectors';
import {getOffers} from "../../../store/reducer/data/selectors";

const defaultCustomIcon = leaflet.icon({
  iconUrl: MapMarker.URL_MARKER_DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const activeCustomIcon = leaflet.icon({
  iconUrl: MapMarker.URL_MARKER_ACTIVE,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map({offers, activeOfferId, currentPage}) {
  const ads = useSelector(getOffers);
  const currentCity = useSelector(getCurrentCity);
  const pointCity = cities.find((city) => city.title === currentCity);
  const mapRef = useRef(null);
  const map = useMap(mapRef, pointCity.coordinates, pointCity.zoom);

  useEffect(() => {
    const markersLayer = new leaflet.LayerGroup();

    if (map) {
      offers.forEach(({id, location}) => {
        const marker = leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          }, {
            icon: id === activeOfferId ? activeCustomIcon : defaultCustomIcon,
          });
        markersLayer.addLayer(marker);
      });

      ads.filter((ad) => ad.id === activeOfferId).forEach(({location}) => {
        const mainMarker = leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          }, {
            icon: activeCustomIcon,
          });
        markersLayer.addLayer(mainMarker);
      })

      markersLayer.addTo(map);
    }

    return () => markersLayer.removeFrom(map);
  }, [map, offers, activeOfferId, currentPage]);


  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
      data-testid='map'
    >
    </div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(placeCardProp).isRequired,
  activeOfferId: PropTypes.number.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default Map;
