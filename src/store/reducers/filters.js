import * as actionTypes from '../actions/actionTypes';


// categoryFilterReducer
const categoryFilterReducerDefaultState = {
  text: '',
  startDate: 0,
  endDate: 0,
  sortByDate: 'dateDesc'
};
export const categoryFilterReducer = (state = categoryFilterReducerDefaultState, action)=>{
  switch(action.type){
    case actionTypes.SET_TEXT_FILTER:
      return {...state, text: action.text};
    case actionTypes.SET_START_DATE:
      return {...state, startDate: action.startDate};
    case actionTypes.SET_END_DATE:
      return {...state, endDate: action.endDate};
    case actionTypes.SORT_BY_DATE_DESC:
      return {...state, sortByDate: 'dateDesc'};
    case actionTypes.SORT_BY_DATE_ASC:
      return {...state, sortByDate: 'dateAsc'};
    default:
      return state;
  }
};


// subcategoryFilterReducer
const subcategoryFilterReducerDefaultState = {
  categoryId: '',
  text: '',
  startDate: 0,
  endDate: 0,
  sortByDate: 'dateDesc'
};
export const subcategoryFilterReducer = (state = subcategoryFilterReducerDefaultState, action)=>{
  switch(action.type){
    case actionTypes.SET_CATEGORY_ID:
      return {...state, categoryId: action.categoryId};
    case actionTypes.SET_TEXT_FILTER:
      return {...state, text: action.text};
    case actionTypes.SET_START_DATE:
      return {...state, startDate: action.startDate};
    case actionTypes.SET_END_DATE:
      return {...state, endDate: action.endDate};
    case actionTypes.SORT_BY_DATE_DESC:
      return {...state, sortByDate: 'dateDesc'};
    case actionTypes.SORT_BY_DATE_ASC:
      return {...state, sortByDate: 'dateAsc'};
    default:
      return state;
  }
};


// productFilterReducer
const productFilterReducerDefaultState = {
  text: '',
  subcategoryId: '',
  sellerId: '',
  startDate: 0,
  endDate: 0,
  sortByPrice: 'priceAsc',
  lowPrice: -Infinity,
  highPrice: Infinity,
  ratings: [],
  tags: []
};
export const productFilterReducer = (state = productFilterReducerDefaultState, action)=>{
  switch(action.type){
    case actionTypes.SET_TEXT_FILTER:
      return {...state, text: action.text};
    case actionTypes.SET_SUBCATEGORY_ID:
      return {...state, subcategoryId: action.subcategoryId};
    case actionTypes.SET_SELLER_ID:
      return {...state, sellerId: action.sellerId};
    case actionTypes.SET_START_DATE:
      return {...state, startDate: action.startDate};
    case actionTypes.SET_END_DATE:
      return {...state, endDate: action.endDate};
    case actionTypes.SORT_BY_PRICE_DESC:
      return {...state, sortByPrice: 'priceDesc'};
    case actionTypes.SORT_BY_PRICE_ASC:
      return {...state, sortByPrice: 'priceAsc'};
    case actionTypes.SET_LOW_PRICE:
      return {...state, lowPrice: action.lowPrice};
    case actionTypes.SET_HIGH_PRICE:
      return {...state, highPrice: action.highPrice};
    case actionTypes.UNSET_PRICE:
      return {...state, lowPrice: -Infinity, highPrice: Infinity};
    case actionTypes.ADD_RATING_COUNT:
      const afterAddRatings = state.ratings.concat(action.rating);
      return {...state, ratings: afterAddRatings};
    case actionTypes.REMOVE_RATING_COUNT:
      const afterRemoveRatings = state.ratings.filter(rating => rating !== action.rating);
      return {...state, ratings: afterRemoveRatings};
    default:
      return state;
  }
};


// userFilterReducer
const userFilterReducerDefaultState = {
  name: '',
  email: '',
  gender: '',
  contactNumber: '',
  pinCode: '',
  state: '',
  startDate: 0,
  endDate: 0,
  sortByDate: 'dateDesc',
};
export const userFilterReducer = (state = userFilterReducerDefaultState, action)=>{
  switch(action.type){
    case actionTypes.SET_NAME_TEXT_FILTER:
      return {...state, name: action.name};
    case actionTypes.SET_GENDER_FILTER:
      return {...state, gender: action.gender};
    case actionTypes.SET_EMAIL_TEXT_FILTER:
      return {...state, gender: action.email};
    case actionTypes.SET_CONTACT_NUMBER_TEXT_FILTER:
      return {...state, gender: action.contactNumber};
    case actionTypes.SET_PIN_CODE_TEXT_FILTER:
      return {...state, pinCode: action.pinCode};
    case actionTypes.SET_STATE_TEXT_FILTER:
      return {...state, state: action.state};
    case actionTypes.SET_START_DATE:
      return {...state, startDate: action.startDate};
    case actionTypes.SET_END_DATE:
      return {...state, endDate: action.endDate};
    case actionTypes.SORT_BY_DATE_DESC:
      return {...state, sortByDate: 'dateDesc'};
    case actionTypes.SORT_BY_DATE_ASC:
      return {...state, sortByDate: 'dateAsc'};
    default:
      return state;
  }
};


// order filter
// seller filter
// cart filter
