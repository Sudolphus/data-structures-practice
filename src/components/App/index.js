import React, { useState } from 'react';
import Navigation from './../Navigation';
import LinkedListPage from './../LinkedList';
import * as d from './../../constants/display';

const App = () => {
  const [page, setPage] = useState(d.LINKEDLIST);

  const handleChangingPage = (newPage) => { setPage(newPage) };

  let pageToDisplay;
  if (page === d.LINKEDLIST) {
    pageToDisplay = <LinkedListPage />
  }

  return (
    <div className='view-field'>
      <Navigation onChangingPage={handleChangingPage} />
      {pageToDisplay}
    </div>
  )
}

export default App;