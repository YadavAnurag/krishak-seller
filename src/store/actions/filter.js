import * as actionTypes from './actionTypes';


// SET_TEXT_FILTER
export const setTextFilter = (
  text = ''
)=>({
  type: actionTypes.SET_TEXT_FILTER,
  text
});

// SET_CATEGORY_ID
export const setCategoryId = (
  categoryId = 0
) => ({
  type: actionTypes.SET_CATEGORY_ID,
  categoryId
});

// SET_START_DATE
export const setStartDate = (
  startDate = 0
)=>({
  type: actionTypes.SET_START_DATE,
  startDate
});

// SET_END_DATE
export const setEndDate = (
  endDate = 0
)=>({
  type: actionTypes.SET_END_DATE,
  endDate
});

// SORT_BY_DATE_ASC
export const sortByDateAsc = ()=>({
  type: actionTypes.SORT_BY_DATE_ASC
});

// SORT_BY_DATE_DESC
export const sortByDateDesc = ()=>({
  type: actionTypes.SORT_BY_DATE_DESC
});

// SET_SUBCATEGORY_ID
export const setSubcategoryId = (
  subcategoryId = 0
) => ({
  type: actionTypes.SET_SUBCATEGORY_ID,
  subcategoryId
});

// SET_SELLER_ID
export const setSellerId = (
  sellerId = 0
) => ({
  type: actionTypes.SET_SELLER_ID,
  sellerId
});

// SET_LOW_PRICE
export const setLowPrice = (
  lowPrice = 0
)=>({
  type: actionTypes.SET_LOW_PRICE,
  lowPrice
});

// SET_HIGH_PRICE
export const setHighPrice = (
  highPrice = 0
)=>({
  type: actionTypes.SET_HIGH_PRICE,
  highPrice
});

// UNSET_PRICE
export const unsetPrice = ()=>({
  type: actionTypes.UNSET_PRICE
});

// SORT_BY_PRICE_ASC
export const sortByPriceAsc = ()=>({
  type: actionTypes.SORT_BY_PRICE_ASC
});

// SORT_BY_PRICE_DESC
export const sortByPriceDesc = ()=>({
  type: actionTypes.SORT_BY_PRICE_DESC
});

// ADD_RATING_COUNT
export const addRatingCount = (
  rating = 0
)=>({
  type: actionTypes.ADD_RATING_COUNT,
  rating
});

// REMOVE_RATING_COUNT
export const removeRatingCount = (
  rating = 0
)=>({
  type: actionTypes.REMOVE_RATING_COUNT,
  rating
});

// SET_NAME_TEXT_FILTER
export const setNameTextFilter = (
  name = ''
)=>({
  type: actionTypes.SET_NAME_TEXT_FILTER,
  name
});

// SET_EMAIL_TEXT_FILTER
export const setEmailTextFilter = (
  email = ''
)=>({
  type: actionTypes.SET_EMAIL_TEXT_FILTER,
  email
});

// SET_GENDER_FILTER
export const setGenderFilter = (
  gender = ''
)=>({
  type: actionTypes.SET_GENDER_FILTER,
  gender
});

// SET_CONTACT_NUMBER_TEXT_FILTER
export const setContactTextFilter = (
  contactNumber = ''
)=>({
  type: actionTypes.SET_CONTACT_NUMBER_TEXT_FILTER,
  contactNumber
});

// SET_PIN_CODE_TEXT_FILTER
export const setPinCodeTextFilter = (
  pinCode = ''
)=>({
  type: actionTypes.SET_PIN_CODE_TEXT_FILTER,
  pinCode
});

// SET_STATE_TEXT_FILTER
export const setStateTextFilter = (
  state = ''
)=>({
  type: actionTypes.SET_STATE_TEXT_FILTER,
  state
});
