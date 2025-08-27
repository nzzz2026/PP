export interface Author {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  icon?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  images?: string[];
  category: BlogCategory;
  tags: string[];
  author: Author;
  publishedDate: string;
  lastModified?: string;
  readTime: number;
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  relatedPosts?: string[];
  views?: number;
  likes?: number;
}

export interface BlogFilters {
  category?: string;
  tags?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  searchQuery?: string;
  status?: 'draft' | 'published' | 'archived';
}

export interface BlogSettings {
  postsPerPage: number;
  enableComments: boolean;
  enableSharing: boolean;
  defaultView: 'grid' | 'list';
  featuredPostsCount: number;
}