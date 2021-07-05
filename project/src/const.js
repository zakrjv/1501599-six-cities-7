const selectedRating = {
  1: '20%',
  2: '40%',
  3: '60%',
  4: '80%',
  5: '100%',
};

const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/room',
};

const Page = {
  FAVORITES: 'favorites',
  OFFER: 'offer',
  MAIN: 'main',
};

const MapMarker = {
  URL_MARKER_DEFAULT: 'img/pin.svg',
  URL_MARKER_ACTIVE: 'img/pin-active.svg',
};

const Options = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam','Hamburg', 'Dusseldorf'];

export {
  selectedRating,
  AppRoute,
  Page,
  MapMarker,
  CITIES,
  Options
};
