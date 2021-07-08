export const adaptToClient = (offer) => {
  const adaptedOffer = Object.assign(
    {},
    offer,
    {
      id: offer.id,
      title: offer.title,
      rating: offer.rating,
      price: offer.price,
      type: offer.type,
      isFavorites: offer['is_favorite'],
      isPremium: offer['is_premium'],
      previewImage: offer['preview_image'],
      bedrooms: offer.bedrooms,
      maxAdults: offer['max_adults'],
      description: offer.description,
      goods: offer.goods,
      city: {
        name: offer.city.name,
        location: {
          latitude: offer.city.location.latitude,
          longitude: offer.city.location.longitude,
          zoom: offer.city.location.zoom,
        },
      },
      host: {
        avatarUrl: offer.host['avatar_url'],
        id: offer.host.id,
        isPro: offer.host['is_pro'],
        name: offer.host.name,
      },
      images: offer.images,
      location: {
        latitude: offer.location.latitude,
        longitude: offer.location.longitude,
        zoom: offer.location.zoom,
      },
    });

  delete adaptedOffer['is_favorite'];
  delete adaptedOffer['is_premium'];
  delete adaptedOffer['preview_image'];
  delete adaptedOffer['max_adults'];

  return adaptedOffer;
};
