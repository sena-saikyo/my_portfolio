import { Link } from 'react-router-dom';

export default function Projects() {
  const quests = [
    'VR酔い軽減アプリ',
    '筋トレ姿勢アプリ',
    'AIじゃんけん',
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-800 text-white">
      <h2 className="text-2xl mb-4">冒険の記録</h2>
      <ul className="mb-8 space-y-2 list-disc list-inside">
        {quests.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
      <Link className="px-4 py-2 bg-gray-700 rounded" to="/">ホームに戻る</Link>
    </div>
  );
}
