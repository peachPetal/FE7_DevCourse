import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white mb-4">
            🎵 Artist Hub
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Discover amazing artists powered by Strapi API
          </p>
          <Link to="/artists" className="btn btn-primary btn-lg">
            Browse Artists
          </Link>
        </div>
      </div>
    </div>
  );
}