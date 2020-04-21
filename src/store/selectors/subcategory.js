export const getSelectedSubcategories = (subcategories, subcategoryFilters) => {
  const {
    categoryId = '',
    text = '',
    sortBy = 'titleAsc'
  } = subcategoryFilters;

  return subcategories.filter(subcategory => {
    const categoryIdMatch = subcategory.categoryId.toLowerCase().includes(categoryId.toLowerCase());
    const textMatch = subcategory.title.toLowerCase().includes(text.toLowerCase());
    return categoryIdMatch && textMatch;
  }).sort((a,b) => {
    if(sortBy === 'titleAsc'){
      return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
    }
    else if(sortBy === 'titleDesc'){
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    }

    return 0;
  });
};
