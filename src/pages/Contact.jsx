import { Link } from 'react-router-dom';

export default function Contact() {
  const contacts = [
    { label: 'Email', value: 'example@example.com' },
    { label: 'GitHub', value: 'https://github.com/example' },
    { label: 'LinkedIn', value: 'https://linkedin.com/in/example' },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-800 text-white">
      <h2 className="text-2xl mb-4">連絡する</h2>
      <ul className="mb-8 space-y-2">
        {contacts.map((c) => (
          <li key={c.label}>
            <span className="font-semibold mr-2">{c.label}:</span>
            <a className="text-blue-400" href={c.value} target="_blank" rel="noopener noreferrer">
              {c.value}
            </a>
          </li>
        ))}
      </ul>
      <Link className="px-4 py-2 bg-gray-700 rounded" to="/">ホームに戻る</Link>
    </div>
  );
}
