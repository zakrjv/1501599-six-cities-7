const filtersOffersByCity = (offers, cityName) => offers.filter((offer) => (offer.city.name === cityName));

export {filtersOffersByCity};
