import { Link } from 'react-router-dom';

export default function Status() {
  const skills = [
    { name: 'React', level: 7 },
    { name: 'Unity', level: 8 },
    { name: 'Tailwind CSS', level: 6 },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-800 text-white">
      <h2 className="text-2xl mb-4">ステータス</h2>
      <ul className="mb-8 space-y-2">
        {skills.map((s) => (
          <li key={s.name} className="border-b border-gray-600 pb-1">
            {s.name} Lv.{s.level}
          </li>
        ))}
      </ul>
      <Link className="px-4 py-2 bg-gray-700 rounded" to="/">ホームに戻る</Link>
    </div>
  );
}
