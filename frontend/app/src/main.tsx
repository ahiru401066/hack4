import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ← 追加
import './index.css';
import App from './App.tsx';
import SelectionTop from './SelectionTop.tsx'; // ← 追加

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/selection" element={<SelectionTop />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
