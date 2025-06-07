// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectionTop from './SelectionTop';
import Transition1 from './Transition1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectionTop />} />
        <Route path="/transition1" element={<Transition1 />} />
        {/* 他にもページがあればここに追加 */}
      </Routes>
    </Router>
  );
}

export default App;
