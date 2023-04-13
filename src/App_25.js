import React from 'react';

import { useGlobalContext_25 } from './Context_25';

// components
import Navbar_25 from './components/Navbar_25';
import CartContainer_25 from './components/CartContainer_25';
// items

const App_25 = () => {
  const { loading, cart } = useGlobalContext_25();
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar_25 />
      <CartContainer_25 />
    </main>
  );
};

export default App_25;
