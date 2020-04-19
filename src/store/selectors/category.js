const getVisibleCategories = (categories, categoryFilters) => {
  const {
    text = '',
    startDate = 0,
    endDate = 0,
    sortByDate = 'dateDesc'
  } = categoryFilters;

  return categories.filter(category => {
    const startDateMatch = typeof startDate !== 'number' || category.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || category.createdAt <= endDate;
    const textMatch = category.title.toLowerCase().includes(text.toLowerCase());

    // console.log(startDateMatch, endDateMatch, textMatch);
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if(sortByDate === 'dateDesc'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if(sortByDate === 'dateAsc'){
      return a.createdAt > b.createdAt ? 1 : -1;
    }
  });
};

export default getVisibleCategories;
