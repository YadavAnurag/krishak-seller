const getVisibleSubcategories = (subcategories, subcategoryFilters) => {
  const {
    categoryId = '',
    text = '',
    startDate = 0,
    endDate = 0,
    sortByDate = 'dateDesc'
  } = subcategoryFilters;

  return subcategories.filter(subcategory => {
    // console.log('this one',subcategory);
    const categoryIdMatch = subcategory.categoryId.toLowerCase().includes(categoryId.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || subcategory.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || subcategory.createdAt <= endDate;
    const textMatch = subcategory.title.toLowerCase().includes(text.toLowerCase());

    console.log(categoryIdMatch, startDateMatch, endDateMatch, textMatch);
    return categoryIdMatch && startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if(sortByDate === 'dateDesc'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if(sortByDate === 'dateAsc'){
      return a.createdAt > b.createdAt ? 1 : -1;
    }
  });
};

export default getVisibleSubcategories;
