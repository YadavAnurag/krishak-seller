import { createStore, combineReducers } from 'redux';
import categories from '../fixtures/category';

// actions

// category actions
// ADD_CATEGORY
const addCategory = (
  {
    name = '',
    description = '',
    image = {mobile: '', desktop: ''},
  } = {}
)=>({
  type: 'ADD_CATEGORY',
  category: {
    id: '1',
    name,
    description,
    image: {...image},
    status: { display: true },
    createdAt: 0
  }
});

// add fake category -> // TODO remove this action
const addFakeCategory = (
  {
    id = '',
    name = '',
    description = '',
    image = {mobile: '', desktop: ''},
  } = {}
)=>({
  type: 'ADD_CATEGORY',
  category: {
    id,
    name,
    description,
    image,
    status: { display: true },
    createdAt: 0
  }
});

// EDIT_CATEGORY
const editCategory = (
  categoryId = '', 
  updates = {}
)=>({
  type: 'EDIT_CATEGORY',
  categoryId,
  updates
});

// REMOVE_CATEGORY
const removeCategory = (
  categoryId = ''
)=>({
  type: 'REMOVE_CATEGORY',
  categoryId
});

// subcategory actions
// ADD_SUBCATEGORY
const addSubcategory = (
  {
    categoryId = '',
    name = '',
    description = '',
    image = {mobile: '', desktop: ''},
  } = {}
)=>({
  type: 'ADD_SUBCATEGORY',
  subcategory: {
    id: '1',
    categoryId,
    name,
    description,
    image,
    status: { display: true },
    createdAt: 0
  }
});
// ADD_FAKE_SUBCATEGORY //TODO remove this action
const addFakeSubcategory = (
  {
    id = '',
    categoryId = '',
    name = '',
    description = '',
    image = {mobile: '', desktop: ''},
  } = {}
)=>({
  type: 'ADD_SUBCATEGORY',
  subcategory: {
    id,
    categoryId,
    name,
    description,
    image,
    status: { display: true },
    createdAt: 0
  }
});

// EDIT_SUBCATEGORY
const editSubcategory = (
  categoryId,
  subcategoryId,
  updates = {}
) => ({
  type: 'EDIT_SUBCATEGORY',
  categoryId,
  subcategoryId,
  updates
});
// REMOVE_SUBCATEGORY
const removeSubcategory = (
  categoryId = '',
  subcategoryId = ''
)=>({
  type: 'REMOVE_SUBCATEGORY',
  categoryId,
  subcategoryId
});

// product actions
// ADD_PRODUCT
const addProduct = (
  categoryId,
  {
    subcategoryId = '',
    name = '',
    description = '',
    price = 0,
    sale = {price:0, saleEndAt:0},
    images = [],
    shipping = { 
      height: 0, weight: 0, 
      length: 0, width: 0
    },
    tags = [],
    count = 0,
  } = {}
)=>({
  type: 'ADD_PRODUCT',
  categoryId,
  product: {
    id: '',
    subcategoryId,
    name,
    description,
    rating: 0,
    price,
    sale: {
      price: sale.price,
      saleEndAt: sale.saleEndAt
    },
    images,
    shipping: {
      height: shipping.height, weight: shipping.weight,
      length: shipping.length, width: shipping.width
    },
    tags,
    count,
    createdAt: 0
  }
});

// ADD_FAKE_PRODUCT // TODO remove this action
const addFakeProduct = (
  categoryId,
  {
    id = '',
    subcategoryId = '',
    name = '',
    description = '',
    price = 100,
    sale = {price:0, saleEndAt:0},
    images = [],
    shipping = { 
      height: 0, weight: 0, 
      length: 0, width: 0
    },
    tags = [],
    count = 0
  } = {}
)=>({
  type: 'ADD_PRODUCT',
  categoryId,
  product: {
    id,
    subcategoryId,
    name,
    description,
    rating: 0,
    price,
    sale: {
      price: sale.price,
      saleEndAt: sale.saleEndAt
    },
    images,
    shipping: {
      height: shipping.height, weight: shipping.weight,
      length: shipping.length, width: shipping.width
    },
    tags,
    count,
    createdAt: 0
  }
});

// EDIT_PRODUCT
const editProduct = (
  categoryId,
  subcategoryId,
  productId,
  updates = {}
)=>({
  type: 'EDIT_PRODUCT',
  categoryId,
  subcategoryId,
  productId,
  updates
});

// REMOVE_PRODUCT
const removeProduct = (
  categoryId,
  subcategoryId,
  productId
)=>({
  type: 'REMOVE_PRODUCT',
  categoryId,
  subcategoryId,
  productId
});

// INCREASE_PRODUCT_RATING
const increaseProductRating = (
  categoryId = '',
  subcategoryId = '',
  productId = ''
)=>({
  type: 'INCREASE_PRODUCT_RATING',
  categoryId,
  subcategoryId,
  productId
});

// DECREASE_PRODUCT_RATING
const decreaseProductRating = (
  categoryId = '',
  subcategoryId = '',
  productId = ''
)=>({
  type: 'DECREASE_PRODUCT_RATING',
  categoryId,
  subcategoryId,
  productId
});

// user actions
// ADD_USER
const addUser = (
  {
    firstName = '',
    middleName = '',
    lastName = '',
    image = '',
    gender = '',
    email = '',
    contactNumber = '',
  } = {}
)=>({
  type: 'ADD_USER',
  user: {
    id: '1',
    firstName,
    middleName,
    lastName,
    image,
    gender,
    email,
    contactNumber,
    addresses: [],
    createdAt: 0
  }
});
// EDIT_USER
const editUser = (
  userId = '',
  updates = {}
)=>({
  type: 'EDIT_USER',
  userId,
  updates
});
// REMOVE_USER
const removeUser = (
  userId = ''
)=>({
  type: 'REMOVE_USER',
  userId
});
// ADD_ADDRESS
const addAddress = (
  userId = '',
  address = {}
)=>({
  type: 'ADD_ADDRESS',
  userId,
  address
});
// EDIT_ADDRESS
const editAddress = (
  userId = '',
  addressId = '',
  updates = {}
)=>({
  type: 'EDIT_ADDRESS',
  userId,
  addressId,
  updates
});
// REMOVE_ADDRESS
const removeAddress = (
  userId = '',
  addressId = ''
)=>({
  type: 'REMOVE_ADDRESS',
  userId,
  addressId
});

// cart actions
// ADD_PRODUCT_TO_CART
const addProductToCart = (
  userId,
  productId,
  subcategoryId,
  categoryId
)=>({
  type: 'ADD_PRODUCT_TO_CART',
  userId,
  productId,
  subcategoryId,
  categoryId
});
// REMOVE_PRODUCT_FROM_CART
const removeProductFromCart = (
  userId,
  productId,
  subcategoryId,
  categoryId
)=>({
  type: 'REMOVE_PRODUCT_FROM_CART',
  userId,
  productId,
  subcategoryId,
  categoryId
});

// INCREASE_PRODUCT_COUNT_OF_CART
const increaseProductCountOfCart = (
  userId,
  productId,
  subcategoryId,
  categoryId,
  count = 1
)=>({
  type: 'INCREASE_PRODUCT_COUNT_OF_CART',
  userId,
  productId,
  subcategoryId,
  categoryId,
  count
});
// DECREASE_PRODUCT_COUNT_OF_CART
const decreaseProductCountOfCart = (
  userId,
  productId,
  subcategoryId,
  categoryId,
  count = 1
)=>({
  type: 'DECREASE_PRODUCT_COUNT_OF_CART',
  userId,
  productId,
  subcategoryId,
  categoryId,
  count
});


// orders actions
// addOrder
const placeOrder = (
  user = {
    userId: '',
    addressId: '',
    deliveryNotes: '',
  },
  tracking = {
    trackingId: '',
    status: '',
    estimatedDelivery: 0
  },
  payment = {
    method: '',
    transactionId: ''
  },
  products = [
    {productId: '', subcategoryId: '', categoryId: '', count: 0}
  ]
)=>({
  type: 'PLACE_ORDER',
  order: {
    id: '',
    user: {
      userId: user.userId,
      addressId: user.addressId,
      deliveryNotes: user.deliveryNotes
    },
    tracking: {
      trackingId: tracking.trackingId,
      status: tracking.status,
      estimatedDelivery: tracking.estimatedDelivery
    },
    payment: {
      method: payment.method,
      transactionId: payment.transactionId
    },
    products: [...products],
    createdAt: 0
  }
});
// editOrder

// seller actions
// ADD_SELLER
// EDIT_SELLER
// REMOVE_SELLER


// faq actions
// ADD_FAQ_SECTION
// EDIT_FAQ_SECTION
// REMOVE_FAQ_SECTION
// ADD_FAQ
// EDIT_FAQ
// REMOVE_FAQ


// filter actions
// SET_TEXT_FILTER
const setTextFilter = (
  text = ''
)=>({
  type: 'SET_TEXT_FILTER',
  text
});
// SET_LOW_PRICE
const setLowPrice = (
  lowPrice = 0
)=>({
  type: 'SET_LOW_PRICE',
  lowPrice
});
// SET_HIGH_PRICE
const setHighPrice = (
  highPrice = 0
)=>({
  type: 'SET_HIGH_PRICE',
  highPrice
});
// UNSET_PRICE
const unsetPrice = ()=>({
  type: 'UNSET_PRICE'
});
// SET_START_DATE
const setStartDate = (
  startDate = 0
)=>({
  type: 'SET_START_DATE',
  startDate
});
// SET_END_DATE
const setEndDate = (
  endDate = 0
)=>({
  type: 'SET_END_DATE',
  endDate
});
// SORT_BY_DATE_ASC
const sortByDateAsc = ()=>({
  type: 'SORT_BY_DATE_ASC'
});
// SORT_BY_DATE_DESC
const sortByDateDesc = ()=>({
  type: 'SORT_BY_DATE_DESC'
});
// SORT_BY_PRICE_ASC
const sortByPriceAsc = ()=>({
  type: 'SORT_BY_PRICE_ASC'
});
// SORT_BY_PRICE_DESC
const sortByPriceDesc = ()=>({
  type: 'SORT_BY_PRICE_DESC'
});
// ADD_RATING_COUNT
const addRatingCount = (
  rating = 0
)=>({
  type: 'SORT_BY_RATING',
  rating
});
// REMOVE_RATING_COUNT
const removeRatingCount = (
  rating = 0
)=>({
  type: 'REMOVE_RATING_COUNT',
  rating
});

// SET_NAME_TEXT_FILTER
const setNameTextFilter = (
  name = ''
)=>({
  type: 'SET_NAME_TEXT_FILTER',
  name
});
// SET_EMAIL_TEXT_FILTER
const setEmailTextFilter = (
  email = ''
)=>({
  type: 'SET_EMAIL_TEXT_FILTER',
  email
});
// SET_GENDER_FILTER
const setGenderFilter = (
  gender = ''
)=>({
  type: 'SET_GENDER_FILTER',
  gender
});
// SET_CONTACT_NUMBER_TEXT_FILTER
const setContactTextFilter = (
  contactNumber = ''
)=>({
  type: 'SET_CONTACT_NUMBER_TEXT_FILTER',
  contactNumber
});

// SET_PIN_CODE_TEXT_FILTER
const setPinCodeTextFilter = (
  pinCode = ''
)=>({
  type: 'SET_PIN_CODE_TEXT_FILTER',
  pinCode
});
// SET_STATE_TEXT_FILTER
const setStateTextFilter = (
  state = ''
)=>({
  type: 'SET_STATE_TEXT_FILTER',
  state
});

// ---------- reducers ----------
// category reducer
const categoryReducerDefaultState = [];
const categoryReducer = (state = categoryReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_CATEGORY':
      return [...state, action.category];
    case 'EDIT_CATEGORY':
      return state.map(category => {
        if(category.id === action.categoryId){
          const image = {...category.image, ...action.updates.image};
          return {...category, ...action.updates, image};
        }else{
          return category;
        }
      });
    case 'REMOVE_CATEGORY':
      return state.filter(({ id }) => (id !== action.categoryId));
    default:
      return state;
  }
};
// subcategory reducer
const subcategoryReducerDefaultState = [];
const subcategoryReducer = (state = subcategoryReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_SUBCATEGORY':
      return [...state, action.subcategory];
    case 'EDIT_SUBCATEGORY':
      return state.map(subcategory => {
        if(subcategory.id === action.subcategoryId){
          const image = {...subcategory.image, ...action.updates.images};
          return {...subcategory, ...action.updates, image};
        }else{
          return subcategory;
        }
      });
    case 'REMOVE_SUBCATEGORY':
      return state.filter(({ id }) => (id !== action.subcategoryId));
    default:
      return state;
  }
};
// TODO
// productReducer
const productReducerDefaultState = [];
const productReducer = (state = productReducerDefaultState, action)=>{
  switch(action.type){
    default: 
      return state;
  }
};
// user reducer
const userReducerDeafultState = [];
const userReducer = (state = userReducerDeafultState, action)=>{
  switch(action.type){
    case 'ADD_USER':
      return [...state, action.user];
    case 'EDIT_USER':
      return state.map(user => {
        if(user.id === action.userId){
          return {...user, ...action.updates};
        }else{
          return user;
        }
      });
    case 'REMOVE_USER':
      return state.filter(({ id }) => id !== action.userId);
    case 'ADD_ADDRESS':
      return state.map(user=> {
        if(user.id === action.userId){
          const addresses = user.addresses.concat(action.address);
          return {...user, addresses};
        }else{
          return user;
        }
      });
    case 'EDIT_ADDRESS':
      return state.map(user => {
        if(user.id === action.userId){
          const addresses = user.addresses.map(address => {
            if(address.id === action.addressId){
              return {...address, ...action.updates};
            }else{
              return address;
            }
          });
          return {...user, addresses};
        }else{
          return user;
        }
      });
    case 'REMOVE_ADDRESS':
      return state.map(user => {
        if(user.id === action.userId){
          const addresses = user.addresses.filter(({id}) => id !== action.addressId);
          return {...user, addresses};
        }else{
          return user;
        }
      });
    default:
      return state;
  }
};
// order reducer
// seller reducer


//---------- filters ----------

// categoryFilterReducer
const categoryFilterReducerDefaultState = {
  text: '',
  startDate: 0,
  endDate: 0,
  sortByDate: 'dateDesc'
};
const categoryFilterReducer = (state = categoryFilterReducerDefaultState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    case 'SORT_BY_DATE_DESC':
      return {...state, sortByDate: 'dateDesc'};
    case 'SORT_BY_DATE_ASC':
      return {...state, sortByDate: 'dateAsc'};
    default:
      return state;
  }
};
// subcategoryFilterReducer
const subcategoryFilterReducerDefaultState = {
  text: '',
  startDate: 0,
  endDate: 0,
  sortByDate: 'dateDesc'
};
const subcategoryFilterReducer = (state = subcategoryFilterReducerDefaultState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    case 'SORT_BY_DATE_DESC':
      return {...state, sortByDate: 'dateDesc'};
    case 'SORT_BY_DATE_ASC':
      return {...state, sortByDate: 'dateAsc'};
    default:
      return state;
  } 
};
// productFilterReducer
const productFilterReducerDefaultState = {
  text: '',
  startDate: 0,
  endDate: 0,
  sortByDate: 'dateDesc',
  sortByPrice: 'priceAsc',
  lowPrice: 0,
  highPrice: 0,
  ratings: []
};
const productFilterReducer = (state = productFilterReducerDefaultState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    case 'SORT_BY_DATE_DESC':
      return {...state, sortByDate: 'dateDesc'};
    case 'SORT_BY_DATE_ASC':
      return {...state, sortByDate: 'dateAsc'};
    case 'SORT_BY_PRICE_DESC':
      return {...state, sortByPrice: 'priceDesc'};
    case 'SORT_BY_PRICE_ASC':
      return {...state, sortByPrice: 'priceAsc'};
    case 'ADD_RATING_COUNT':
      const afterAddRatings = state.ratings.concat(action.rating);
      return {...state, ratings: afterAddRatings};
    case 'REMOVE_RATING_COUNT':
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
const userFilterReducer = (state = userFilterReducerDefaultState, action)=>{
  switch(action.type){
    case 'SET_NAME_TEXT_FILTER':
      return {...state, name: action.name};
    case 'SET_GENDER_FILTER':
      return {...state, gender: action.gender};
    case 'SET_EMAIL_TEXT_FILTER':
      return {...state, gender: action.email};
    case 'SET_CONTACT_NUMBER_TEXT_FILTER':
      return {...state, gender: action.contactNumber};
    case 'SET_PIN_CODE_TEXT_FILTER':
      return {...state, pinCode: action.pinCode};
    case 'SET_STATE_TEXT_FILTER':
      return {...state, state: action.state};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    case 'SORT_BY_DATE_DESC':
      return {...state, sortByDate: 'dateDesc'};
    case 'SORT_BY_DATE_ASC':
      return {...state, sortByDate: 'dateAsc'};
    default:
      return state;
  }
};

// TODO
// sellerFilterReducer


// store creation 
const store = createStore(
  combineReducers({
    categories: categoryReducer,
    categoryFilters: categoryFilterReducer,

    subcategories: subcategoryReducer,
    subcategoryFilters: subcategoryFilterReducer,

    products: productReducer,
    productFilters: productFilterReducer,

    users: userReducer,
    userFilters: userFilterReducer
  })
);


const state = store.getState();
console.log('intialState',state);
const unsubscribe = store.subscribe(()=>{
  const state = store.getState();
  console.log(state.subcategory);
  console.log(state);
});

// dispatching
const firstCat = {
  name: 'first category', 
  description: 'first cat desc', 
  image: {
    desktop: 'https://picsum',
    mobile: 'https'
  }
};
const firstCategory = store.dispatch(addCategory(firstCat));
const updates = {
  name: 'first update category', 
  description: 'first cat desc', 
  image: {
    desktop: '',
    mobile: ''
  },
  status: { display: false }
};
store.dispatch(editCategory(firstCategory.category.id, updates));
store.dispatch(removeCategory(firstCategory.category.id));

categories.forEach(category => {
  store.dispatch(addFakeCategory(category));
});

const firstSubcat = {
  id: '1',
  categoryId: '1',
  name: 'First sub category',
  description: 'first sub category description',
  image: {
    mobile: 'https://picsum.photos/300', 
    desktop: 'https://picsum.photos/500'
  },
  status: { display: true },
  createdAt: 0
};
const firstSubcategory = store.dispatch(addSubcategory(firstSubcat));

