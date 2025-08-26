import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import '../styles/Blog.css';

const Blog: React.FC = () => {
  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortNewest, setSortNewest] = useState(true);

  const filtered = blogPosts
    .filter(post => selectedCategory === 'All' || post.category === selectedCategory)
    .sort((a, b) => {
      if (sortNewest) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

  return (
    <section className="container blog-container">
      <aside className="blog-sidebar">
        <div>
          <h3>Filter</h3>
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <h3>Sort</h3>
          <button onClick={() => setSortNewest(!sortNewest)}>
            {sortNewest ? 'Newest First' : 'Oldest First'}
          </button>
        </div>
      </aside>
      <div className="blog-posts">
        {filtered.map(post => {
          const excerpt = post.content.split(' ').slice(0, 40).join(' ') + '...';
          return (
            <article key={post.id} className="blog-card">
              <h2>{post.title}</h2>
              <p className="text-sm" style={{color: '#4B5563'}}>{new Date(post.date).toLocaleDateString()} • {post.category}</p>
              <p>{excerpt}</p>
              <Link to={`/blog/${post.id}`}>Read More</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
