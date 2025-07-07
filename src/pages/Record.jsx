import { Link } from 'react-router-dom';

export default function Record() {
  const research = [
    '学士研究：VAEを用いたMMFによるFashion-MNISTの復元',
    '修士研究：VR酔い軽減の研究（パススルー型VRによる視覚補正）',
  ];

  const works = [
    '家庭内通貨アプリ（Flutter）',
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-800 text-white font-dot">
      <h2 className="text-2xl mb-6">ぼうけんのきろく</h2>

      <section className="mb-8">
        <h3 className="text-xl underline mb-2">📘 しらべもの（研究）</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {research.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl underline mb-2">🛠️ つくったもの（成果物）</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {works.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <Link className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600" to="/">
        ホームに戻る
      </Link>
    </div>
  );
}
