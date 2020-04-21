export const getSelectedCategories = (categories, categoryFilters) => {
  const {
    text = '',
    sortBy = 'titleAsc'
  } = categoryFilters;

  return categories.filter(category => {
    const textMatch = category.title.toLowerCase().includes(text.toLowerCase());
    return textMatch;
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
