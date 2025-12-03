// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaCalendarAlt, FaUser, FaTags, FaSearch, FaArrowRight } from 'react-icons/fa';
// // Removed react-router-dom Link as we're using one-page navigation

// const Blogs = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Sample blog data - replace with your actual blog posts
//   const blogPosts = [
//     {
//       id: 1,
//       title: 'Getting Started with React Hooks',
//       excerpt: 'Learn how to use React Hooks to simplify your functional components and manage state effectively.',
//       date: 'October 15, 2023',
//       author: 'Raj Soni',
//       category: 'React',
//       image: '/assets/blog1.jpg',
//       tags: ['React', 'Hooks', 'Frontend']
//     },
//     {
//       id: 2,
//       title: 'Mastering CSS Grid Layout',
//       excerpt: 'A comprehensive guide to CSS Grid Layout and how to create complex responsive layouts with ease.',
//       date: 'September 28, 2023',
//       author: 'Raj Soni',
//       category: 'CSS',
//       image: '/assets/blog2.jpg',
//       tags: ['CSS', 'Grid', 'Responsive Design']
//     },
//     {
//       id: 3,
//       title: 'Building RESTful APIs with Node.js',
//       excerpt: 'Learn how to create robust and scalable RESTful APIs using Node.js and Express.',
//       date: 'September 10, 2023',
//       author: 'Raj Soni',
//       category: 'Node.js',
//       image: '/assets/blog3.jpg',
//       tags: ['Node.js', 'Express', 'API']
//     },
//     {
//       id: 4,
//       title: 'Introduction to React Context API',
//       excerpt: 'Understand how to use React Context API for state management without external libraries.',
//       date: 'August 22, 2023',
//       author: 'Raj Soni',
//       category: 'React',
//       image: '/assets/blog4.jpg',
//       tags: ['React', 'Context API', 'State Management']
//     },
//     {
//       id: 5,
//       title: 'Responsive Web Design Best Practices',
//       excerpt: 'Essential techniques and best practices for creating responsive websites that work on all devices.',
//       date: 'August 5, 2023',
//       author: 'Raj Soni',
//       category: 'Web Design',
//       image: '/assets/blog5.jpg',
//       tags: ['Responsive Design', 'CSS', 'Web Development']
//     },
//     {
//       id: 6,
//       title: 'JavaScript ES6+ Features You Should Know',
//       excerpt: 'Explore the most useful ES6+ features that every JavaScript developer should be familiar with.',
//       date: 'July 18, 2023',
//       author: 'Raj Soni',
//       category: 'JavaScript',
//       image: '/assets/blog6.jpg',
//       tags: ['JavaScript', 'ES6', 'Web Development']
//     }
//   ];

//   const categories = ['All', 'React', 'JavaScript', 'Node.js', 'CSS', 'Web Design'];
//   const [activeCategory, setActiveCategory] = useState('All');

//   const filteredPosts = blogPosts.filter(post => {
//     const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <section className="blogs" id="blogs">
//       <div className="container">
//         <div className="section-title">
//           <h2>My Blogs</h2>
//           <p>Latest Articles & Tutorials</p>
//         </div>

//         <div className="blog-search">
//           <div className="search-box">
//             <input
//               type="text"
//               placeholder="Search blogs..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <FaSearch className="search-icon" />
//           </div>
//         </div>

//         <div className="blog-categories">
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`category-btn ${activeCategory === category ? 'active' : ''}`}
//               onClick={() => setActiveCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {filteredPosts.length > 0 ? (
//           <div className="blog-grid">
//             {filteredPosts.map((post, index) => (
//               <motion.article 
//                 className="blog-card" 
//                 key={post.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="blog-image">
//                   <img src={post.image} alt={post.title} />
//                   <div className="blog-category">{post.category}</div>
//                 </div>
//                 <div className="blog-content">
//                   <div className="blog-meta">
//                     <span><FaCalendarAlt /> {post.date}</span>
//                     <span><FaUser /> {post.author}</span>
//                   </div>
//                   <h3>{post.title}</h3>
//                   <p>{post.excerpt}</p>
//                   <div className="blog-tags">
//                     <FaTags />
//                     {post.tags.map((tag, i) => (
//                       <span key={i} className="tag">{tag}</span>
//                     ))}
//                   </div>
//                   <a href="#" className="read-more" onClick={(e) => {
//                     e.preventDefault();
//                     // You can add a blog detail view or scroll to a specific blog section
//                     alert('Blog detail view would open here in a full implementation');
//                   }}>
//                     Read More <FaArrowRight />
//                   </a>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         ) : (
//           <div className="no-results">
//             <h3>No blog posts found matching your search.</h3>
//             <p>Try adjusting your search or filter criteria.</p>
//           </div>
//         )}

//         {filteredPosts.length > 0 && (
//           <div className="pagination">
//             <button className="pagination-btn active">1</button>
//             <button className="pagination-btn">2</button>
//             <button className="pagination-btn">3</button>
//             <button className="pagination-btn next">Next <FaArrowRight /></button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Blogs;


import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "React", "JavaScript", "Node.js", "CSS", "Web Design"];

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
      date: "October 15, 2023",
      author: "Raj Soni",
      category: "React",
      image: "/assets/blog1.jpg",
      tags: ["React", "Hooks", "Frontend"],
    },
    {
      id: 2,
      title: "Mastering CSS Grid Layout",
      excerpt:
        "A comprehensive guide to CSS Grid Layout and how to create complex responsive layouts with ease.",
      date: "September 28, 2023",
      author: "Raj Soni",
      category: "CSS",
      image: "/assets/blog2.jpg",
      tags: ["CSS", "Grid", "Responsive Design"],
    }
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="blogs"
      className="relative py-20 bg-[#07090f] text-white overflow-hidden"
    >
      {/* Floating Neon Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-emerald-400 opacity-60 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="zoom-in">
          <h2 className="text-4xl font-bold neon-text">My Blogs</h2>
          <p className="text-gray-300">Latest Articles & Tutorials</p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 px-5 rounded-xl bg-black/40 backdrop-blur border border-emerald-400/40 focus:border-emerald-500 focus:ring-emerald-500 text-white outline-none transition-all shadow-neon"
            />
            <FaSearch className="absolute right-4 top-3 text-emerald-300 text-xl" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border border-emerald-400/40 backdrop-blur hover:bg-emerald-500/20 neon-border ${activeCategory === category ? "bg-emerald-500/20 text-emerald-300 neon-glow" : "text-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-black/40 backdrop-blur rounded-2xl border border-emerald-400/30 overflow-hidden shadow-neon hover:shadow-neon-strong transition-all group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-emerald-500/30 text-emerald-200 px-3 py-1 rounded-full text-xs uppercase font-medium backdrop-blur">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUser /> {post.author}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex items-center gap-2 text-emerald-300 text-sm mt-2 flex-wrap">
                  <FaTags />
                  {post.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-black/40 rounded-full text-xs border border-emerald-400/30">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <button className="mt-4 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-400 transition-colors">
                  Read More <FaArrowRight />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

