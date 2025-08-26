import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import '../styles/Blog.css';

const Blog: React.FC = () => {
  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortNewest, setSortNewest] = useState(true);
  const [search, setSearch] = useState('');

  const filtered = blogPosts
    .filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.content.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortNewest) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

  return (
    <>
      <section className="blog-hero">
        <h1>Expert Pest Control Insights</h1>
        <p>News, tips and best practices for keeping London properties pest free.</p>
      </section>
      <section className="container blog-container">
        <aside className="blog-sidebar">
          <div className="sidebar-group">
            <h3>Search</h3>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search articles..."
            />
          </div>
          <div className="sidebar-group">
            <h3>Category</h3>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="sidebar-group">
            <h3>Sort</h3>
            <button onClick={() => setSortNewest(!sortNewest)} className="sort-btn">
              {sortNewest ? 'Newest First' : 'Oldest First'}
            </button>
          </div>
        </aside>
        <div className="blog-posts">
          {filtered.map(post => {
            const excerpt = post.content.split(' ').slice(0, 30).join(' ') + '...';
            return (
              <article key={post.id} className="blog-card">
                <div className="card-image" style={{backgroundImage: `url(${post.image})`}} />
                <div className="card-content">
                  <span className="badge">{post.category}</span>
                  <h2>{post.title}</h2>
                  <p className="meta">{new Date(post.date).toLocaleDateString()}</p>
                  <p>{excerpt}</p>
                  <Link className="read-more" to={`/blog/${post.id}`}>Read More</Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blog;
