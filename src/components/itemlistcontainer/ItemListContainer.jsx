import React from 'react';
import './itemlistcontainer.css';


//ItemListContainer con la props enviadas desde la APP.
export const ItemListContainer = ({greeting}) => {
  return (
    <div className='itemlistcontainer'>{greeting}</div>
  )
}
