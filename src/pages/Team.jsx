import { Link } from 'react-router-dom';

export default function Team() {
  const allies = [
    'ゼミ',
    '開発合宿',
    'GitHub',
    'Figma',
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-800 text-white">
      <h2 className="text-2xl mb-4">パーティー</h2>
      <ul className="mb-8 space-y-2 list-disc list-inside">
        {allies.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
      <Link className="px-4 py-2 bg-gray-700 rounded" to="/">ホームに戻る</Link>
    </div>
  );
}
