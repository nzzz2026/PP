import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import '../styles/Blog.css';

const Blog: React.FC = () => {
  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortNewest, setSortNewest] = useState(true);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortNewest, search]);

  const filtered = blogPosts
    .filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortNewest) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const paginated = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / postsPerPage);

  return (
    <>
      <header
        className="blog-hero"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1587502536263-9296f9e7e63c?auto=format&fit=crop&w=1200&q=60)',
        }}
      >
        <div className="hero-content">
          <h1>Expert Pest Control Insights</h1>
          <p>News, tips and best practices for keeping London properties pest free.</p>
        </div>
      </header>
      <section className="intro container">
        <p>
          Welcome to our resource hub. Use the filters to navigate our latest posts.
        </p>
      </section>
      <section className="blog-layout container">
        <aside className="filters">
          <div className="filter-group">
            <h3>Search</h3>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search articles..."
            />
          </div>
          <div className="filter-group">
            <h3>Category</h3>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <h3>Sort</h3>
            <button onClick={() => setSortNewest(!sortNewest)}>
              {sortNewest ? 'Newest First' : 'Oldest First'}
            </button>
          </div>
        </aside>
        <div className="content-area">
          <div className="posts-grid">
            {paginated.map(post => (
              <article key={post.id} className="post-card">
                <Link
                  to={`/blog/${post.id}`}
                  className="image"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="content">
                  <span className="category">{post.category}</span>
                  <h2>{post.title}</h2>
                  <p className="meta">{new Date(post.date).toLocaleDateString()}</p>
                  <p>{post.excerpt}</p>
                  <Link className="read-more" to={`/blog/${post.id}`}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="pagination">
              <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={currentPage === i + 1 ? 'active' : ''}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
