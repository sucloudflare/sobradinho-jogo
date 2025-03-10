import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tourism } from './pages/Tourism';
import { History } from './pages/History';
import { Dam } from './pages/Dam';
import { Schools } from './pages/Schools';
import { Quiz } from './pages/Quiz';
import { News } from './pages/News';
import { Chat } from './pages/Chat';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/turismo" element={<Tourism />} />
      <Route path="/historia" element={<History />} />
      <Route path="/barragem" element={<Dam />} />
      <Route path="/escolas" element={<Schools />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/noticias" element={<News />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}