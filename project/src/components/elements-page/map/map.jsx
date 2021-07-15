import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../hooks/useMap';
import placeCardProp from '../../../props/place-card.prop';
import {MapMarker, Page} from '../../../const';
import {connect} from 'react-redux';
import {filtersOffersByCity} from '../../../utils';

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

function Map({offers, activeOfferId, cities, currentPage}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cities.coordinates, cities.zoom);

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
  }, [map, offers, activeOfferId, currentPage]);


  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(placeCardProp).isRequired,
  activeOfferId: PropTypes.number.isRequired,
  cities: PropTypes.object.isRequired,
  currentPage: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA, MAIN}, props) => {
  let offers;
  switch (props.currentPage) {
    case Page.MAIN:
      offers = filtersOffersByCity(DATA.offers, MAIN.currentCity);
      break;
    case Page.OFFER:
      offers = DATA.offersNearby;
      break;
    case Page.FAVORITES:
      offers = DATA.offers;
      break;
    default:
      break;
  }

  return {
    offers,
    cities: DATA.cities.find((city) => city.title === MAIN.currentCity),
  };
};

// export default Map;
export default connect(mapStateToProps)(Map);
