import PropTypes from 'prop-types';

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  coordinates: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
}).isRequired;
