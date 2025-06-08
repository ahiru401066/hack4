import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Transition2.css'; 

const Transition2 = () => {
  const location = useLocation();
  const selectedName = location.state?.selectedName as string | undefined;

  const [timeLeft, setTimeLeft] = useState(10); // 10秒カウントダウン
  const [selected, setSelected] = useState<string | null>(null);

  // 例: 中華料理のサブカテゴリー
  const options = ['ラーメン', 'チャーハン', '餃子', '麻婆豆腐'];

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleSelect = (option: string) => {
    setSelected(option);
    alert(`${option} を選びました！`);
  };

  return (
    <div className="center-container">
      <h1 className="category-h1">AIによる提案</h1>
      <p>{selectedName ? `${selectedName}の中から選んでください` : '中華料理の中から選んでください'}</p>
      <p>残り時間: {timeLeft} 秒</p>

      <div className="button-container">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className="category-button"
          >
            {option}
          </button>
        ))}
      </div>

      {selected && <p>選んだ料理: {selected}</p>}
    </div>
  );
};

export default Transition2;