import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Transition1.css';

const Transition1 = () => {
    const location = useLocation();
    const selectedName = location.state?.selectedName as string | undefined;
    const navigate = useNavigate();

    // ボタンがクリックされたときの処理
    const handleClick = (name: string) => {
        navigate('/transition2', { state: { selectedName: name } });
    };

    // サブカテゴリーのダミーデータ
    const subcategoriesMap: { [key: string]: string[] } = {
        '食事': ['和食', '洋食', '中華', 'スイーツ'],
        '映画': ['アクション', '恋愛', 'ホラー', 'コメディ'],
        '運動': ['サッカー', 'バスケ', 'ランニング', 'ヨガ']
    };

    return (
        <div>
            <h1>{selectedName}</h1>
            {selectedName && subcategoriesMap[selectedName] ? (
                <div>
                    {subcategoriesMap[selectedName].map((subcategory, index) => (
                        <button
                            className="category-button"
                            key={index}
                            onClick={() => handleClick(subcategory)}
                        >
                            {subcategory}
                        </button>
                    ))}
                </div>
            ) : (
                <p>サブカテゴリーがありません。</p>
            )}
        </div>
    );
};

export default Transition1;
