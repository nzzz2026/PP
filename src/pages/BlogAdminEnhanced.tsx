import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BlogStorageService } from '../services/blogStorageService';
import { BlogPost, categories } from '../services/blogService';
import '../styles/BlogAdminEnhanced.scss';

const BlogAdminEnhanced: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeTab, setActiveTab] = useState<'list' | 'create' | 'edit'>('list');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    thumbnailImage: '',
    category: 'rodents',
    tags: '',
    authorName: 'James Mitchell',
    authorRole: 'Senior Pest Control Specialist',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
    featured: false,
    status: 'draft' as 'draft' | 'published' | 'archived',
    metaDescription: '',
    metaKeywords: ''
  });

  // Load posts on component mount
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    const loadedPosts = BlogStorageService.getPosts();
    setPosts(loadedPosts);
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  }, []);

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setFormData(prev => ({ ...prev, slug }));
  };

  const handleSavePost = () => {
    if (!formData.title || !formData.slug || !formData.excerpt || !formData.content) {
      showNotification('error', 'Please fill in all required fields');
      return;
    }

    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    const keywordsArray = formData.metaKeywords.split(',').map(kw => kw.trim()).filter(kw => kw);
    
    const newPost: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      slug: formData.slug,
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      featuredImage: formData.featuredImage,
      thumbnailImage: formData.thumbnailImage || formData.featuredImage,
      category: formData.category,
      tags: tagsArray,
      author: {
        id: '1',
        name: formData.authorName,
        role: formData.authorRole,
        avatar: formData.authorAvatar
      },
      publishedDate: editingPost?.publishedDate || new Date().toISOString().split('T')[0],
      updatedDate: new Date().toISOString().split('T')[0],
      readTime: Math.ceil(formData.content.split(' ').length / 200),
      featured: formData.featured,
      status: formData.status,
      metaDescription: formData.metaDescription,
      metaKeywords: keywordsArray
    };

    if (editingPost) {
      BlogStorageService.updatePost(editingPost.id, newPost);
      showNotification('success', 'Post updated successfully!');
    } else {
      BlogStorageService.addPost(newPost);
      showNotification('success', 'Post created successfully!');
    }

    loadPosts();
    resetForm();
    setActiveTab('list');
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featuredImage: post.featuredImage,
      thumbnailImage: post.thumbnailImage || '',
      category: post.category,
      tags: post.tags.join(', '),
      authorName: post.author.name,
      authorRole: post.author.role,
      authorAvatar: post.author.avatar || '',
      featured: post.featured,
      status: post.status,
      metaDescription: post.metaDescription || '',
      metaKeywords: post.metaKeywords?.join(', ') || ''
    });
    setActiveTab('edit');
  };

  const handleDeletePost = (postId: string) => {
    BlogStorageService.deletePost(postId);
    loadPosts();
    setShowDeleteConfirm(null);
    showNotification('success', 'Post deleted successfully');
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      featuredImage: '',
      thumbnailImage: '',
      category: 'rodents',
      tags: '',
      authorName: 'James Mitchell',
      authorRole: 'Senior Pest Control Specialist',
      authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
      featured: false,
      status: 'draft',
      metaDescription: '',
      metaKeywords: ''
    });
    setEditingPost(null);
  };

  const handleResetToDefaults = () => {
    if (window.confirm('This will remove all custom posts and restore the default blog posts. Are you sure?')) {
      BlogStorageService.resetToDefaults();
      loadPosts();
      showNotification('success', 'Blog posts reset to defaults');
    }
  };

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, filterCategory]);

  const renderPostForm = () => (
    <div className="post-form">
      <div className="form-header">
        <h2>{editingPost ? 'Edit Post' : 'Create New Post'}</h2>
        <button onClick={() => { resetForm(); setActiveTab('list'); }} className="cancel-btn">
          Cancel
        </button>
      </div>

      <div className="form-grid">
        <div className="form-column">
          <div className="form-group">
            <label>Post Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Complete Guide to Rat Control in London"
            />
            <button onClick={generateSlug} className="generate-btn">Generate Slug</button>
          </div>

          <div className="form-group">
            <label>URL Slug *</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              placeholder="complete-guide-rat-control-london"
            />
          </div>

          <div className="form-group">
            <label>Excerpt *</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              rows={3}
              placeholder="Brief description that appears in blog listings..."
            />
          </div>

          <div className="form-group">
            <label>Main Content *</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows={15}
              placeholder="Full article content. Use ## for headings, **bold** for emphasis, - for lists..."
            />
            <small>Markdown supported: ## Heading, **bold**, - list items</small>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category *</label>
              <select name="category" value={formData.category} onChange={handleInputChange}>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.slug}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select name="status" value={formData.status} onChange={handleInputChange}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Tags (comma-separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="rats, pest control, prevention, London"
            />
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleInputChange}
              />
              Featured Post
            </label>
          </div>
        </div>

        <div className="form-column">
          <div className="form-group">
            <label>Featured Image URL *</label>
            <input
              type="url"
              name="featuredImage"
              value={formData.featuredImage}
              onChange={handleInputChange}
              placeholder="https://images.unsplash.com/..."
            />
            {formData.featuredImage && (
              <div className="image-preview">
                <img src={formData.featuredImage} alt="Featured" />
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Thumbnail Image URL (optional)</label>
            <input
              type="url"
              name="thumbnailImage"
              value={formData.thumbnailImage}
              onChange={handleInputChange}
              placeholder="Leave empty to use featured image"
            />
          </div>

          <h3>Author Information</h3>
          <div className="form-group">
            <label>Author Name</label>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Author Role</label>
            <input
              type="text"
              name="authorRole"
              value={formData.authorRole}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Author Avatar URL</label>
            <input
              type="url"
              name="authorAvatar"
              value={formData.authorAvatar}
              onChange={handleInputChange}
            />
          </div>

          <h3>SEO Settings</h3>
          <div className="form-group">
            <label>Meta Description</label>
            <textarea
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleInputChange}
              rows={2}
              placeholder="SEO description for search engines..."
            />
          </div>

          <div className="form-group">
            <label>Meta Keywords (comma-separated)</label>
            <input
              type="text"
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleInputChange}
              placeholder="pest control, London, rats, mice"
            />
          </div>

          <button onClick={handleSavePost} className="save-post-btn">
            {editingPost ? 'Update Post' : 'Create Post'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="blog-admin-enhanced">
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <div className="admin-header">
        <h1>Blog Content Manager</h1>
        <div className="header-actions">
          {BlogStorageService.hasCustomPosts() && (
            <button onClick={handleResetToDefaults} className="reset-btn">
              Reset to Default Posts
            </button>
          )}
          <button 
            onClick={() => { resetForm(); setActiveTab('create'); }}
            className="create-btn"
          >
            + New Post
          </button>
        </div>
      </div>

      {activeTab === 'list' && (
        <div className="posts-list-section">
          <div className="list-controls">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              className="category-filter"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.slug}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="posts-table">
            <div className="table-header">
              <div>Post</div>
              <div>Category</div>
              <div>Status</div>
              <div>Date</div>
              <div>Actions</div>
            </div>
            
            {filteredPosts.length === 0 ? (
              <div className="no-posts">
                <p>No posts found</p>
                <button onClick={() => { resetForm(); setActiveTab('create'); }}>
                  Create your first post
                </button>
              </div>
            ) : (
              filteredPosts.map(post => {
                const category = categories.find(c => c.slug === post.category);
                return (
                  <div key={post.id} className="table-row">
                    <div className="post-info">
                      <img src={post.thumbnailImage || post.featuredImage} alt={post.title} />
                      <div>
                        <strong>{post.title}</strong>
                        <small>{post.slug}</small>
                      </div>
                    </div>
                    <div>
                      <span className="category-badge" style={{ backgroundColor: category?.color + '20', color: category?.color }}>
                        {category?.name}
                      </span>
                    </div>
                    <div>
                      <span className={`status-badge ${post.status}`}>
                        {post.status}
                      </span>
                    </div>
                    <div className="post-date">
                      {new Date(post.publishedDate).toLocaleDateString()}
                    </div>
                    <div className="post-actions">
                      <button 
                        onClick={() => handleEditPost(post)}
                        className="edit-btn"
                        title="Edit post"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                        className="view-btn"
                        title="View post"
                      >
                        View
                      </button>
                      <button 
                        onClick={() => setShowDeleteConfirm(post.id)}
                        className="delete-btn"
                        title="Delete post"
                      >
                        Delete
                      </button>
                    </div>

                    {showDeleteConfirm === post.id && (
                      <div className="delete-confirm">
                        <p>Are you sure you want to delete this post?</p>
                        <button onClick={() => handleDeletePost(post.id)} className="confirm-delete">
                          Yes, Delete
                        </button>
                        <button onClick={() => setShowDeleteConfirm(null)} className="cancel-delete">
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {(activeTab === 'create' || activeTab === 'edit') && renderPostForm()}
    </div>
  );
};

export default BlogAdminEnhanced;