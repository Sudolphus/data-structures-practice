import React from 'react';
import PropTypes from 'prop-types';
import * as d from './../../constants/display';

const Navigation = ({ onChangingPage }) => (
  <div className='nav-buttons'>
    <button type='button' className='link-button' onClick={() => onChangingPage(d.LINKEDLIST)}>Linked List</button>
  </div>
);

Navigation.propTypes = {
  onChangingPage: PropTypes.func
};

export default Navigation;