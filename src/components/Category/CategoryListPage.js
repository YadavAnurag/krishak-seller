import React from 'react';

import CategoryFilter from './CategoryFilter';
import CategoryList from './CategoryList';

import categories from '../../fixtures/category';
import { connect } from 'react-redux';


const CategoryListPage = () => {
  return (
    <div>
      <CategoryFilter />
      <CategoryList categories={categories} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.category.categories
});
export default connect(mapStateToProps)(CategoryListPage);
