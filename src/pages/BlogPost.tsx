import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import '../styles/Blog.css';

const BlogPost: React.FC = () => {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <div className="container" style={{padding: '2rem 0'}}>Article not found.</div>;
  }

  const related = blogPosts.filter(p => p.id !== post.id && p.category === post.category);

  return (
    <section className="container" style={{padding: '2rem 0'}}>
      <article className="blog-card">
        <h1>{post.title}</h1>
        <p className="text-sm" style={{color: '#4B5563'}}>{new Date(post.date).toLocaleDateString()} • {post.category}</p>
        <p style={{marginTop: '1rem', whiteSpace: 'pre-line'}}>{post.content}</p>
      </article>
      {related.length > 0 && (
        <div style={{marginTop: '2rem'}}>
          <h3>Related Articles</h3>
          <ul style={{listStyle: 'none', padding: 0, marginTop: '1rem'}}>
            {related.map(r => (
              <li key={r.id} style={{marginBottom: '0.5rem'}}>
                <Link to={`/blog/${r.id}`}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div style={{marginTop: '2rem'}}>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    </section>
  );
};

export default BlogPost;
