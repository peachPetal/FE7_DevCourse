export interface Artist {
  id: number;
  documentId: string;
  name: string;
  genre: string;
  bio: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ArtistResponse {
  data: Artist[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}