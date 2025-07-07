import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Status from './pages/Status';
import Skill from './pages/Skill';
import Record from './pages/Record';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="status" element={<Status />} />
      <Route path="skill" element={<Skill />} />
      <Route path="record" element={<Record />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
