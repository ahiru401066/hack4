import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/selection');
  };

  return (
    <>
      <h1>タイパ重視（仮）</h1>
      <button onClick={handleStart}>開始</button>
    </>
  );
}

export default App;
