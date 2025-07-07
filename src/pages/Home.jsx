import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800">
      <h1 className="text-6xl mb-8 font-bold">The Journey of Sena</h1>
      <nav className="space-y-4">
        <Link className="block px-4 py-2 bg-gray-700 rounded hover:bg-gray-600" to="/status">すてーたす</Link>
        <Link className="block px-4 py-2 bg-gray-700 rounded hover:bg-gray-600" to="/skill">とくぎ</Link>
        <Link className="block px-4 py-2 bg-gray-700 rounded hover:bg-gray-600" to="/record">ぼうけんのきろく</Link>
        <Link className="block px-4 py-2 bg-gray-700 rounded hover:bg-gray-600" to="/contact">れんらく</Link>
      </nav>
    </div>
  );
}
