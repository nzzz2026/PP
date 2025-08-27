import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogService } from '../services/blogService';
import { format } from 'date-fns';
import '../styles/BlogNew.scss';

const BlogNew: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'popularity'>('date');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get data from service
  const categories = blogService.getCategories();
  const allTags = blogService.getAllTags();
  const featuredPosts = blogService.getFeaturedPosts(1);
  const recentPosts = blogService.getRecentPosts(3);

  // Filter posts
  const filteredPosts = useMemo(() => {
    const filters = {
      category: selectedCategory !== 'all' ? selectedCategory : undefined,
      tags: selectedTags.length > 0 ? selectedTags : undefined,
      searchQuery: searchQuery || undefined,
    };
    return blogService.getPosts(filters);
  }, [selectedCategory, selectedTags, searchQuery]);

  // SEO
  useEffect(() => {
    document.title = 'Pest Control Blog | Expert Advice & Industry Insights | PestPro London';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Expert pest control advice, industry insights, and practical guides for London property owners. Stay informed about pest prevention and management.'
      );
    }
  }, []);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedTags([]);
    setSearchQuery('');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedTags.length > 0 || searchQuery;

  return (
    <div className="blog-new-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Pest Control Insights & Expert Advice</h1>
            <p>Stay informed with the latest pest management strategies, industry updates, and practical guides for London properties</p>
            
            {/* Search Bar */}
            <div className="hero-search">
              <input
                type="text"
                placeholder="Search articles, topics, or pests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </div>

            {/* Quick Categories */}
            <div className="quick-categories">
              {categories.slice(0, 4).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`category-pill ${selectedCategory === cat.slug ? 'active' : ''}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      {featuredPosts.length > 0 && (
        <section className="featured-section">
          <div className="container">
            <div className="featured-header">
              <h2>Featured Article</h2>
              <div className="featured-badge">Editor's Pick</div>
            </div>
            <div className="featured-post">
              <div className="featured-image">
                <img src={featuredPosts[0].featuredImage} alt={featuredPosts[0].title} />
                <div className="featured-category">
                  {categories.find(c => c.slug === featuredPosts[0].category)?.name}
                </div>
              </div>
              <div className="featured-content">
                <h3>{featuredPosts[0].title}</h3>
                <p className="featured-excerpt">{featuredPosts[0].excerpt}</p>
                <div className="featured-meta">
                  <div className="author-info">
                    {featuredPosts[0].author.avatar && (
                      <img src={featuredPosts[0].author.avatar} alt={featuredPosts[0].author.name} className="author-avatar" />
                    )}
                    <div>
                      <p className="author-name">{featuredPosts[0].author.name}</p>
                      <p className="author-role">{featuredPosts[0].author.role}</p>
                    </div>
                  </div>
                  <div className="post-meta">
                    <span className="read-time">{featuredPosts[0].readTime} min read</span>
                    <span className="post-date">{format(new Date(featuredPosts[0].publishedDate), 'MMM d, yyyy')}</span>
                  </div>
                </div>
                <Link to={`/blog/${featuredPosts[0].slug}`} className="featured-link">
                  Read Full Article
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Content */}
      <section className="blog-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Categories Filter */}
              <div className="sidebar-section">
                <h3>Categories</h3>
                <div className="category-list">
                  <button
                    className={`category-item ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    <span>All Articles</span>
                    <span className="count">{blogService.getPosts().length}</span>
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      className={`category-item ${selectedCategory === cat.slug ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat.slug)}
                    >
                      <span>
                        {cat.icon && <span className="cat-icon">{cat.icon}</span>}
                        {cat.name}
                      </span>
                      <span className="count">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="sidebar-section">
                <h3>Popular Topics</h3>
                <div className="tags-cloud">
                  {allTags.slice(0, 12).map(tag => (
                    <button
                      key={tag}
                      className={`tag-pill ${selectedTags.includes(tag) ? 'active' : ''}`}
                      onClick={() => handleTagToggle(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="sidebar-section">
                <h3>Recent Articles</h3>
                <div className="recent-posts">
                  {recentPosts.map(post => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="recent-post-item">
                      <div className="recent-post-image">
                        <img src={post.thumbnailImage || post.featuredImage} alt={post.title} />
                      </div>
                      <div className="recent-post-content">
                        <h4>{post.title}</h4>
                        <p className="recent-post-date">
                          {format(new Date(post.publishedDate), 'MMM d, yyyy')}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="sidebar-section newsletter-cta">
                <h3>Stay Updated</h3>
                <p>Get pest control tips and industry news delivered to your inbox</p>
                <input type="email" placeholder="Your email address" className="newsletter-input" />
                <button className="newsletter-button">Subscribe</button>
              </div>
            </aside>

            {/* Blog Posts Grid/List */}
            <div className="blog-main">
              {/* Toolbar */}
              <div className="blog-toolbar">
                <div className="toolbar-left">
                  <p className="results-count">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                  </p>
                  {hasActiveFilters && (
                    <button onClick={clearFilters} className="clear-filters">
                      Clear filters
                    </button>
                  )}
                </div>
                <div className="toolbar-right">
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value as 'date' | 'popularity')}
                    className="sort-select"
                  >
                    <option value="date">Latest First</option>
                    <option value="popularity">Most Popular</option>
                  </select>
                  <div className="view-toggle">
                    <button
                      className={viewMode === 'grid' ? 'active' : ''}
                      onClick={() => setViewMode('grid')}
                      title="Grid view"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                      </svg>
                    </button>
                    <button
                      className={viewMode === 'list' ? 'active' : ''}
                      onClick={() => setViewMode('list')}
                      title="List view"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="3" y="4" width="18" height="2"/>
                        <rect x="3" y="11" width="18" height="2"/>
                        <rect x="3" y="18" width="18" height="2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters Display */}
              {hasActiveFilters && (
                <div className="active-filters">
                  {selectedCategory !== 'all' && (
                    <div className="filter-tag">
                      Category: {categories.find(c => c.slug === selectedCategory)?.name}
                      <button onClick={() => setSelectedCategory('all')}>×</button>
                    </div>
                  )}
                  {selectedTags.map(tag => (
                    <div key={tag} className="filter-tag">
                      {tag}
                      <button onClick={() => handleTagToggle(tag)}>×</button>
                    </div>
                  ))}
                  {searchQuery && (
                    <div className="filter-tag">
                      Search: "{searchQuery}"
                      <button onClick={() => setSearchQuery('')}>×</button>
                    </div>
                  )}
                </div>
              )}

              {/* Posts Grid/List */}
              <div className={`blog-posts ${viewMode}`}>
                {filteredPosts.length === 0 ? (
                  <div className="no-results">
                    <h3>No articles found</h3>
                    <p>Try adjusting your filters or search terms</p>
                  </div>
                ) : (
                  filteredPosts.map(post => {
                    const category = categories.find(c => c.slug === post.category);
                    return (
                      <article key={post.id} className="blog-card">
                        <Link to={`/blog/${post.slug}`} className="card-image-link">
                          <div className="card-image">
                            <img 
                              src={post.thumbnailImage || post.featuredImage} 
                              alt={post.title}
                            />
                            {post.featured && (
                              <div className="featured-indicator">Featured</div>
                            )}
                          </div>
                        </Link>
                        <div className="card-content">
                          <div className="card-meta">
                            <span 
                              className="card-category"
                              style={{ backgroundColor: category?.color + '20', color: category?.color }}
                            >
                              {category?.name}
                            </span>
                            <span className="card-date">
                              {format(new Date(post.publishedDate), 'MMM d, yyyy')}
                            </span>
                          </div>
                          <h3 className="card-title">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="card-excerpt">{post.excerpt}</p>
                          <div className="card-footer">
                            <div className="card-author">
                              {post.author.avatar && (
                                <img 
                                  src={post.author.avatar} 
                                  alt={post.author.name}
                                  className="author-avatar-small"
                                />
                              )}
                              <span className="author-name">{post.author.name}</span>
                            </div>
                            <span className="read-time">{post.readTime} min read</span>
                          </div>
                        </div>
                      </article>
                    );
                  })
                )}
              </div>

              {/* Load More / Pagination */}
              {filteredPosts.length > 9 && (
                <div className="pagination">
                  <button className="pagination-button">Load More Articles</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Immediate Pest Control Help?</h2>
            <p>Our expert technicians are available 24/7 for emergency pest situations</p>
            <div className="cta-buttons">
              <a href="tel:+447727049304" className="cta-button primary">
                Call Now: 077 2704 9304
              </a>
              <Link to="/contact" className="cta-button secondary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogNew;