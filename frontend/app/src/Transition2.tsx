import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Transition2 = () => {
  const location = useLocation();
  const selectedSubcategory = location.state?.selectedSubcategory as string | undefined;

  const [timeLeft, setTimeLeft] = useState(10); // 10秒カウントダウン
  const [selected, setSelected] = useState<string | null>(null);

  const options = ['ラーメン', 'チャーハン', '餃子', '麻婆豆腐']; // 仮データ

  useEffect(() => {
    if (timeLeft > 0 && !selected) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }

    if (timeLeft === 0 && !selected && options.length > 0) {
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomChoice = options[randomIndex];
      setSelected(randomChoice);
      alert(`${randomChoice} を自動で選びました！`);
    }
  }, [timeLeft, selected, options]);

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);
    alert(`${option} を選びました！`);
  };

  return (
    <div>
      <h1>チョイス！！！</h1>
      <p>{selectedSubcategory ? `${selectedSubcategory}の中から選んでください` : '料理の中から選んでください'}</p>
      <p>残り時間: {timeLeft} 秒</p>

      <ul>
        {options.map(option => (
          <li key={option}>
            <button onClick={() => handleSelect(option)} disabled={!!selected}>
              {option}
            </button>
          </li>
        ))}
      </ul>

      {selected && <p>選んだ料理: {selected}</p>}
    </div>
  );
};

export default Transition2;
