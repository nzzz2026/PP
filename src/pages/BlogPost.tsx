import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import '../styles/Blog.css';

const BlogPost: React.FC = () => {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <div className="container" style={{ padding: '2rem 0' }}>Article not found.</div>;
  }

  const related = blogPosts.filter(p => p.id !== post.id && p.category === post.category);

  return (
    <>
      <header className="post-hero" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="overlay">
          <h1>{post.title}</h1>
          <p>{new Date(post.date).toLocaleDateString()} • {post.category}</p>
        </div>
      </header>
      <section className="container" style={{ padding: '2rem 0' }}>
        <article className="blog-card">
          <p style={{ marginTop: '1rem', whiteSpace: 'pre-line' }}>{post.content}</p>
        </article>
        {related.length > 0 && (
          <div className="related-section">
            <h3>Related Articles</h3>
            <div className="related-grid">
              {related.map(r => (
                <article key={r.id} className="related-card">
                  <div className="card-image" style={{ backgroundImage: `url(${r.image})` }} />
                  <div className="card-content">
                    <h4>{r.title}</h4>
                    <Link to={`/blog/${r.id}`} className="read-more">Read More</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
        <div style={{ marginTop: '2rem' }}>
          <Link to="/blog">← Back to Blog</Link>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
