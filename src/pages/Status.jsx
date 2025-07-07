import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Status() {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-800 text-white font-dot">
      <h2 className="text-2xl mb-4">すてーたす</h2>
      <div className="mb-4">
        <p>🧙 名前：おおしも せな</p>
        <p>💼 職業：かけだしエンジニア</p>
        <p>🎂 年齢：24</p>
        <p>🎮 趣味：体を動かすこと、特に野球・筋トレ・ゲーム・映画鑑賞</p>
      </div>

      <div className="mb-6">
        <p className="mb-2">🎭 アバター：</p>
        <img
          src={showPhoto ? "/photo_avatar.jpg" : "/dot_avatar.png"}
          alt="アバター"
          className="w-32 h-32 object-contain border-2 border-white mb-2"
        />
        <button
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 border border-white transition"
          onClick={() => setShowPhoto(!showPhoto)}
        >
          {showPhoto ? "ドット絵に切り替え" : "写真に切り替え"}
        </button>
      </div>

      <Link className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600" to="/">
        ホームに戻る
      </Link>
    </div>
  );
}
