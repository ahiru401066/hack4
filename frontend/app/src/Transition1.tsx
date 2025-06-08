import React from 'react';
import { useLocation } from 'react-router-dom';

const Transition1 = () => {
    const location = useLocation();
    const selectedName = location.state?.selectedName as string | undefined;

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
                            key={index}
                            style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
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
