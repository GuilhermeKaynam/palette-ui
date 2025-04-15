import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Colors } from './pages/Colors';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cores" element={<Colors />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;