// actions

// category actions
// ADD_CATEGORY
const addCategory = (
  {
    name = '',
    description = '',
    images = [],
  } = {}
)=>({
  type: 'ADD_CATEGORY',
  category: {
    id: '1',
    name,
    description,
    images,
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
    images = [],
  } = {}
)=>({
  type: 'ADD_CATEGORY',
  category: {
    id,
    name,
    description,
    images,
    status: { display: true },
    createdAt: 0
  }
});

// EDIT_CATEGORY
const editCategory = (
  id, 
  updates = {}
)=>({
  type: 'EDIT_CATEGORY',
  id,
  updates
});

// REMOVE_CATEGORY
const removeCategory = (
  id = ''
)=>({
  type: 'REMOVE_CATEGORY',
  id
});

// subcategory actions
// ADD_SUBCATEGORY
const addSubcategory = (
  {
    categoryId = '',
    name = '',
    description = '',
    images = []
  } = {}
)=>({
  type: 'ADD_SUBCATEGORY',
  subcategory: {
    id: 0,
    categoryId,
    name,
    description,
    images,
    status: { display: true },
    createdAt: 0
  }
});
// ADD_FAKE_SUBCATEGORY //TODO remove this action
const addSubcategory = (
  {
    id = '',
    categoryId = '',
    name = '',
    description = '',
    images = []
  } = {}
)=>({
  type: 'ADD_SUBCATEGORY',
  subcategory: {
    id,
    categoryId,
    name,
    description,
    images,
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
    price = 100,
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
    shipping = {
      height: shipping.height, weight: shipping.weight,
      length: shipping.length, width: shipping.width
    },
    tags,
    count,
    createdAt: 0
  }
});

// ADD_FAKE_PRODUCT // TODO remove this action
const addProduct = (
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
    shipping = {
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
// EDIT_USER
// REMOVE_USER

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

// contact actions
// about actions
// tac actions