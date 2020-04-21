export const getSelectedProducts = (products, productFilters) => {
  const {
    text = '',
    subcategoryId = '',
    sellerId = '',
    lowPrice = -Infinity,
    highPrice = Infinity,
    ratings = [],
    tags = [],
    sortBy = 'priceAsc',
  } = productFilters;

  return products.filter(product => {
    const textMatch = product.title.toLowerCase().includes(text.toLowerCase())
    const subcategoryIdMatch = product.subcategoryId.toLowerCase().includes(subcategoryId.toLowerCase());
    const sellerIdMatch = product.sellerId.toLowerCase().includes(sellerId.toLowerCase());
    const lowPriceMatch = typeof lowPrice !== 'number' || product.lowPrice >= lowPrice;
    const highPriceMatch = typeof highPrice !== 'number' || product.highPrice <= highPrice;
    let ratingsMatch = true;
    let tagsMatch = true;

    if(ratings.length !== 0){
      ratingsMatch = ratings.some(rating => rating === product.rating.avgRating);
    }
    if(tags.length !== 0){
      tagsMatch = tags.some(tag => product.tags.includes(tag));
    }

    return textMatch && subcategoryIdMatch &&
      sellerIdMatch && lowPriceMatch &&
      highPriceMatch && ratingsMatch &&
      tagsMatch;
  }).sort((a,b) => {
    if(sortBy === 'priceDesc'){
      return a.price < b.price ? 1 : -1;
    }
    else if(sortBy === 'priceAsc'){
      return a.price > b.price ? 1 : -1;
    }

    if(sortBy === 'titleAsc'){
      return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
    }
    else if(sortBy === 'titleDesc'){
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    }

    return 0;
  });
};
