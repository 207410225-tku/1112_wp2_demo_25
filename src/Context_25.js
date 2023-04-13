import React, { useState, useContext, useReducer, useEffect } from 'react';
import Reducer_25 from './Reducer_25';

//import cartItems from './data-0'

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext_25 = React.createContext();

const initialState = {
   loading: false,
   cart: [],
   amount: 4,
   total: 999.9
}

const AppProvider_25 = ({children}) => {
  const [state, dispatch] = useReducer(Reducer_25, initialState);

  useEffect(()=>{
    dispatch({ type: 'GET_TOTALS'});
  },[state.cart]);

  const clearCart = () => {
     dispatch({ type: 'CLEAR_CART' });
  }
  const increase = (id) => {
     dispatch({ type: 'INCREASE', payload: id });
  } 
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
 } 

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id});
  }

  const fetchData = async () => {
     dispatch({ type: 'LOADING'});
     const response = await fetch(url);
     const cart = await response.json();
     console.log('cart', cart);
     dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  }

  useEffect(()=>{
    fetchData();
  }, []);

return <AppContext_25.Provider value={{...state, clearCart, increase, decrease, remove}}>
     {children}
  </AppContext_25.Provider>
};

const useGlobalContext_25 = () => {
  return useContext(AppContext_25);
}

export { AppProvider_25, useGlobalContext_25};
