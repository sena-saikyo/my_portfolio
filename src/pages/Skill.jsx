import { Link } from 'react-router-dom';

export default function Skill() {
  const techStack = [
    { category: '言語', items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C#', 'C', 'Dart'] },
    { category: 'フレームワーク / ライブラリ', items: ['React', 'Flutter', 'Tailwind CSS', 'Unity', 'TensorFlow'] },
    { category: 'ツール', items: ['Docker', 'GitHub', 'Vite'] },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-800 text-white font-dot">
      <h2 className="text-2xl mb-4">しようしたぎじゅつ</h2>
      <div className="space-y-6 mb-8">
        {techStack.map((section) => (
          <div key={section.category}>
            <h3 className="text-xl mb-2 underline">{section.category}</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              {section.items.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600" to="/">
        ホームに戻る
      </Link>
    </div>
  );
}
