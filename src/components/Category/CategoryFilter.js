import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter } from '../../store/actions/filter';


const CategoryFilter = (props) => {

  const onTextChange = (e) => {
    props.setTextFilter(e.target.value);
  }

  return (
    <div>
      <input
        type='text'
        name='text'
        value={props.filters.text}
        onChange={onTextChange}
        placeholder='search category name'
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.categoryFilters
});
const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
