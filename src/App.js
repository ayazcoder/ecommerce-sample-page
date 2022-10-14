import React, { useState, useEffect } from 'react';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import Navbar from './components/Navbar';



function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([])
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    //   <Router>
    //   <NavBar/>
    //   <Routes>
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/about" element={<About/>} />
    //     <Route path="/products" element={<Products />} />
    //     <Route path="/customers" element={<Customer />} />
    //   </Routes>
    // </Router>
    <>
    <React.Fragment>

      <Navbar setShow={setShow} size={cart.length} />
      {
        show ? (<Amazon handleClick={handleClick} />
          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />)}
    </React.Fragment>
    </>
  );
}

export default App;