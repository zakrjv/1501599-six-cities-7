import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isFavorites: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
}).isRequired;
