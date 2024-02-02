import React from 'react';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className="App bg-gray-900 h-screen">
      <header className="bg-gray-800 text-white text-center p-4 flex flex-row">
        <h1 className="text-3xl font-semibold font-sans">TEST</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
};

export default App;
