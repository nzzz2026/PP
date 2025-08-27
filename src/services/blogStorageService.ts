import { BlogPost } from './blogService';
import { blogPosts as defaultPosts } from './defaultBlogPosts';

const STORAGE_KEY = 'pestpro_blog_posts';

export class BlogStorageService {
  // Get all posts from localStorage, fallback to default posts if none exist
  static getPosts(): BlogPost[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Error parsing stored posts:', e);
        return defaultPosts;
      }
    }
    return defaultPosts;
  }

  // Save posts to localStorage
  static savePosts(posts: BlogPost[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }

  // Add a new post
  static addPost(post: BlogPost): void {
    const posts = this.getPosts();
    posts.unshift(post); // Add to beginning
    this.savePosts(posts);
  }

  // Update an existing post
  static updatePost(postId: string, updatedPost: Partial<BlogPost>): void {
    const posts = this.getPosts();
    const index = posts.findIndex(p => p.id === postId);
    if (index !== -1) {
      posts[index] = { ...posts[index], ...updatedPost, updatedDate: new Date().toISOString() };
      this.savePosts(posts);
    }
  }

  // Delete a post
  static deletePost(postId: string): void {
    const posts = this.getPosts();
    const filtered = posts.filter(p => p.id !== postId);
    this.savePosts(filtered);
  }

  // Get single post by ID
  static getPostById(postId: string): BlogPost | undefined {
    const posts = this.getPosts();
    return posts.find(p => p.id === postId);
  }

  // Reset to default posts
  static resetToDefaults(): void {
    localStorage.removeItem(STORAGE_KEY);
  }

  // Check if using custom posts
  static hasCustomPosts(): boolean {
    return localStorage.getItem(STORAGE_KEY) !== null;
  }
}