import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Digital Innovation',
      excerpt: 'Discover the latest trends shaping the digital landscape...',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80',
      date: 'Mar 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'Maximizing Business Growth',
      excerpt: 'Learn effective strategies for scaling your business...',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80',
      date: 'Mar 12, 2024',
      readTime: '4 min read'
    },
    {
      title: 'Technology Trends for 2024',
      excerpt: 'Stay ahead of the curve with these emerging technologies...',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80',
      date: 'Mar 10, 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with our latest insights and news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;