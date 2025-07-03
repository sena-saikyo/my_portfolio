import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800">
      <h1 className="text-4xl mb-8 font-bold">The Journey of Sena</h1>
      <nav className="space-y-4">
        <Link className="block px-4 py-2 bg-gray-700 rounded hover:bg-gray-600" to="/status">ステータス</Link>
        <Link className="block px-4 py-2 bg-gray-700 rounded hover:bg-gray-600" to="/projects">冒険の記録</Link>
        <Link className="block px-4 py-2 bg-gray-700 rounded hover:bg-gray-600" to="/team">パーティー</Link>
        <Link className="block px-4 py-2 bg-gray-700 rounded hover:bg-gray-600" to="/contact">連絡する</Link>
      </nav>
    </div>
  );
}
