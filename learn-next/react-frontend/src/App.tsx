import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistsPage from './pages/ArtistsPage';


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-base-100">
        {/* Navigation */}
        <nav className="navbar bg-base-300 shadow-lg">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost text-xl">🎵 Artist Hub</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a href="/">Home</a></li>
              <li><a href="/artists">Artists</a></li>
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artists" element={<ArtistsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;