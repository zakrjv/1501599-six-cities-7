const adaptOffersToClient = (offer) => {
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
  delete adaptedOffer.host['avatar_url'];
  delete adaptedOffer.host['is_pro'];

  return adaptedOffer;
};

const adaptReviewToClient = (review) => {
  const adaptedReview = Object.assign(
    {},
    review,
    {
      comment: review.comment,
      date: review.date,
      id: review.id,
      rating: review.rating,
      user: {
        id: review.user.id,
        name: review.user.name,
        avatarUrl: review.user['avatar_url'],
        isPro: review.user['is_pro'],
      },
    });

  delete adaptedReview.user['avatar_url'];
  delete adaptedReview.user['is_pro'];

  return adaptedReview;
};

const adaptUserToClient = (userData) => {
  const adaptedUser = Object.assign(
    {},
    userData,
    {
      avatarUrl: userData['avatar_url'],
      email: userData.email,
      id: userData.id,
      isPro: userData['is_pro'],
      name: userData.name,
      token: userData.token,
    });

  delete adaptedUser['avatar_url'];
  delete adaptedUser['is_pro'];

  return adaptedUser;
};


export {
  adaptOffersToClient,
  adaptReviewToClient,
  adaptUserToClient
};
