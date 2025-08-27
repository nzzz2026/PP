import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogService } from '../services/blogService';
import { format } from 'date-fns';
import '../styles/BlogPostNew.scss';

const BlogPostNew: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  
  const post = slug ? blogService.getPostBySlug(slug) : undefined;
  const relatedPosts = post ? blogService.getRelatedPosts(post, 3) : [];
  const category = post ? blogService.getCategories().find(c => c.slug === post.category) : undefined;

  // SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | PestPro London Blog`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription || post.excerpt);
      }

      // Add article structured data
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.featuredImage,
        "author": {
          "@type": "Person",
          "name": post.author.name
        },
        "publisher": {
          "@type": "Organization",
          "name": "PestPro London",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.pestpro.london/logo.png"
          }
        },
        "datePublished": post.publishedDate,
        "dateModified": post.updatedDate || post.publishedDate
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [post]);

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <div className="container">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="back-to-blog">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  // Parse content sections for rich display
  const renderContent = (content: string) => {
    const sections = content.split('\n\n');
    
    return sections.map((section, index) => {
      // Handle headers
      if (section.startsWith('##')) {
        const level = section.match(/^#+/)?.[0].length || 2;
        const text = section.replace(/^#+\s/, '');
        const HeadingTag = level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';
        if (HeadingTag === 'h2') {
          return <h2 key={index} className={`content-heading h2`}>{text}</h2>;
        } else if (HeadingTag === 'h3') {
          return <h3 key={index} className={`content-heading h3`}>{text}</h3>;
        } else {
          return <h4 key={index} className={`content-heading h4`}>{text}</h4>;
        }
      }
      
      // Handle lists
      if (section.includes('\n-') || section.includes('\n*') || section.match(/\n\d+\./)) {
        const items = section.split('\n').filter(line => line.trim());
        const isOrdered = items[0].match(/^\d+\./);
        const ListTag = isOrdered ? 'ol' : 'ul';
        
        return (
          <ListTag key={index} className="content-list">
            {items.map((item, i) => (
              <li key={i}>{item.replace(/^[-*]\s|^\d+\.\s/, '')}</li>
            ))}
          </ListTag>
        );
      }
      
      // Handle bold text
      if (section.includes('**')) {
        const parts = section.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={index} className="content-paragraph">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
          </p>
        );
      }
      
      // Regular paragraphs
      return <p key={index} className="content-paragraph">{section}</p>;
    });
  };

  return (
    <div className="blog-post-new-page">
      {/* Hero Section with Featured Image */}
      <section className="post-hero">
        <div className="hero-image" style={{ backgroundImage: `url(${post.featuredImage})` }}>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <Link to="/blog">Blog</Link>
            <span className="separator">/</span>
            <span className="current">{category?.name}</span>
          </nav>

          {/* Post Header */}
          <div className="post-header">
            <div className="post-category" style={{ backgroundColor: category?.color + '20', color: category?.color }}>
              {category?.icon && `${category.icon} `}{category?.name}
            </div>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>
            
            {/* Meta Information */}
            <div className="post-meta">
              <div className="author-section">
                {post.author.avatar && (
                  <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
                )}
                <div className="author-details">
                  <p className="author-name">{post.author.name}</p>
                  <p className="author-role">{post.author.role}</p>
                </div>
              </div>
              <div className="post-info">
                <span className="post-date">
                  📅 {format(new Date(post.publishedDate), 'MMMM d, yyyy')}
                </span>
                <span className="read-time">
                  ⏱ {post.readTime} min read
                </span>
                <span className="post-views">
                  👁 {post.views || Math.floor(Math.random() * 1000 + 500)} views
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="post-content-section">
        <div className="container">
          <div className="content-wrapper">
            {/* Article Content */}
            <article className="post-article">
              {/* Table of Contents */}
              <div className="table-of-contents">
                <h3>In This Article</h3>
                <ul>
                  {post.content.match(/##\s.+/g)?.map((heading, index) => (
                    <li key={index}>
                      <a href={`#section-${index}`}>
                        {heading.replace('## ', '')}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main Content */}
              <div className="post-content">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="post-tags">
                <h3>Related Topics</h3>
                <div className="tags-list">
                  {post.tags.map(tag => (
                    <Link key={tag} to={`/blog?tag=${tag}`} className="tag-item">
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="share-section">
                <h3>Share This Article</h3>
                <div className="share-buttons">
                  <button onClick={() => handleShare('twitter')} className="share-button twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </button>
                  <button onClick={() => handleShare('facebook')} className="share-button facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </button>
                  <button onClick={() => handleShare('linkedin')} className="share-button linkedin">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </button>
                  <button onClick={() => handleShare('copy')} className={`share-button copy ${copied ? 'copied' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    {copied ? 'Copied!' : 'Copy Link'}
                  </button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="author-bio">
                <h3>About the Author</h3>
                <div className="bio-content">
                  {post.author.avatar && (
                    <img src={post.author.avatar} alt={post.author.name} className="bio-avatar" />
                  )}
                  <div className="bio-details">
                    <h4>{post.author.name}</h4>
                    <p className="bio-role">{post.author.role}</p>
                    <p className="bio-description">
                      {post.author.bio || `${post.author.name} is a ${post.author.role} at PestPro London with extensive experience in pest management and control strategies. They specialize in providing expert advice and solutions for residential and commercial properties across London.`}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="post-sidebar">
              {/* Sticky CTA */}
              <div className="sticky-cta">
                <h3>Need Pest Control?</h3>
                <p>Get expert help for your pest problems today</p>
                <a href="tel:+447727049304" className="cta-phone">
                  📞 Call: 077 2704 9304
                </a>
                <Link to="/contact" className="cta-quote">
                  Get Free Quote
                </Link>
              </div>

              {/* Related Articles */}
              <div className="related-articles">
                <h3>Related Articles</h3>
                {relatedPosts.map(related => (
                  <Link key={related.id} to={`/blog/${related.slug}`} className="related-item">
                    <div className="related-image">
                      <img src={related.thumbnailImage || related.featuredImage} alt={related.title} />
                    </div>
                    <div className="related-content">
                      <h4>{related.title}</h4>
                      <p className="related-meta">
                        {format(new Date(related.publishedDate), 'MMM d, yyyy')}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Newsletter */}
              <div className="sidebar-newsletter">
                <h3>Get Pest Control Tips</h3>
                <p>Subscribe to our newsletter for expert advice</p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Your email" required />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bottom-cta">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-item">
              <h3>Browse More Articles</h3>
              <p>Explore our complete library of pest control guides and tips</p>
              <Link to="/blog" className="cta-link">View All Articles →</Link>
            </div>
            <div className="cta-item featured">
              <h3>Professional Pest Control Services</h3>
              <p>Fast, effective solutions from certified technicians</p>
              <Link to="/services" className="cta-link">Our Services →</Link>
            </div>
            <div className="cta-item">
              <h3>Service Areas</h3>
              <p>We cover all London boroughs with same-day service</p>
              <Link to="/service-areas" className="cta-link">Find Your Area →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostNew;