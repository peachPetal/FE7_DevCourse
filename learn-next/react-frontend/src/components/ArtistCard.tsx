import type { Artist } from '../types/Artist';

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  const { name, genre, bio, imageUrl } = artist;

  return (
    <div className="artist-card">
      <figure className="h-48 bg-base-200">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-6xl">🎵</span>
          </div>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-secondary">{genre}</div>
        <p className="text-sm opacity-70 line-clamp-3">{bio}</p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm">View Details</button>
        </div>
      </div>
    </div>
  );
}