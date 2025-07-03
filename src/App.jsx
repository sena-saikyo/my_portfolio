import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Status from './pages/Status';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="status" element={<Status />} />
      <Route path="projects" element={<Projects />} />
      <Route path="team" element={<Team />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
