const getVisibleProducts = (products, productFilters) => {
  const {
    text = '',
    subcategoryId = '',
    sellerId = '',
    startDate = 0,
    endDate = 0,
    lowPrice = -Infinity,
    highPrice = Infinity,
    ratings = [],
    tags = [],
    sortByPrice = 'priceAsc',
  } = productFilters;

  return products.filter(product => {
    const textMatch = product.title.toLowerCase().includes(text.toLowerCase())
    const subcategoryIdMatch = product.subcategoryId.toLowerCase().includes(subcategoryId.toLowerCase());
    const sellerIdMatch = product.sellerId.toLowerCase().includes(sellerId.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || product.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || product.createdAt <= endDate;
    const lowPriceMatch = typeof lowPrice !== 'number' || product.lowPrice >= lowPrice;
    const highPriceMatch = typeof highPrice !== 'number' || product.highPrice <= highPrice;
    const ratingsMatch = true;
    const tagsMatch = true;

    if(ratings.length !== 0){
      ratingsMatch = ratings.some(rating => rating === product.rating.avgRating);
    }
    if(tags.length !== 0){
      tagsMatch = tags.some(tag => product.tags.includes(tag));
    }

    return textMatch && subcategoryIdMatch &&
      sellerIdMatch && startDateMatch &&
      endDateMatch && lowPriceMatch &&
      highPriceMatch && ratingsMatch &&
      tagsMatch;
  }).sort((a,b) => {
    if(sortByPrice === 'priceDesc'){
      return a.price < b.price ? 1 : -1;
    }
    if(sortByPrice === 'priceAsc'){
      return a.price > b.price ? 1 : -1;
    }
  });
};

export default getVisibleProducts;
