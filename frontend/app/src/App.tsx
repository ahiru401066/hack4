import { Routes, Route, useNavigate } from 'react-router-dom';
import SelectionTop from './SelectionTop';
import Transition1 from './Transition1';
import Transition2 from './Transition2';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>タイパ重視（仮）</h1>
      <button onClick={() => navigate('/selection')}>開始</button>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selection" element={<SelectionTop />} />
      <Route path="/transition1" element={<Transition1 />} />
      <Route path="/transition2" element={<Transition2 />} />
    </Routes>
  );
}

export default App;
