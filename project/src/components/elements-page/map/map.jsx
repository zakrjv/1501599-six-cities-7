import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../hooks/useMap';
import placeCardProp from '../../../props/place-card.prop';
import citiesProp from '../../../props/cities.prop';
import {MapMarker} from '../../../const';
import {connect} from 'react-redux';

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

function Map({offers, activeOfferId, cities, currentCity}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cities, currentCity);

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

      markersLayer.addTo(map);
    }

    return () => markersLayer.removeFrom(map);
  }, [map, offers, activeOfferId]);


  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(placeCardProp),
  activeOfferId: PropTypes.number,
  cities: PropTypes.arrayOf(citiesProp),
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  cities: state.cities,
});

// export default Map;
export default connect(mapStateToProps)(Map);
