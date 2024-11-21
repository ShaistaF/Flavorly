import React, { useState, useEffect } from 'react';
import api from '../services/api';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await api.getBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold">Blog Posts</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id} className="border-b py-2">
            <h3 className="font-bold">{blog.title}</h3>
            <p>{blog.content.substring(0, 100)}...</p>
            <small>By {blog.author}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
