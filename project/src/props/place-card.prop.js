import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }),
  previewImage: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  maxAdults: PropTypes.number.isRequired,
  isFavorites: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
  goods: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.string),
}).isRequired;
