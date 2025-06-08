import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Category = {
  id: number;
  name: string;
};

const SelectionTop = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  // ダミーデータを設定するためのuseEffect
  useEffect(() => {
    const dummyData: Category[] = [
      { id: 1, name: '食事' },
      { id: 2, name: '映画' },
      { id: 3, name: '運動' }
    ];
    setCategories(dummyData);
  }, []);

  // ボタンがクリックされたときの処理
  const handleClick = (name: string) => {
    navigate('/transition1', { state: { selectedName: name } });
  };

  return (
    <div>
      <h1>選択画面</h1>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleClick(category.name)}
          style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default SelectionTop;
