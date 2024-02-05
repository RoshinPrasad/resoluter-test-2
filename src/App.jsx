import React from 'react';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App bg-gray-900 h-screen">
      <Navbar />
      <main>
        <ProductList />
      </main>
    </div>
  );
};

export default App;
