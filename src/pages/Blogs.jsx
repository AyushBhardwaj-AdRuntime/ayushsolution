import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useDocumentSEO from "../hooks/useDocumentSEO";
import { publishedBlogPosts, categories } from "../data/blogData";

const Blogs = () => {
  useDocumentSEO({
    title: "Technical Thought Hub — Ayush Bhardwaj",
    description: "Explore deep dives into system architecture, AI engineering, and software design principles.",
  });

  const [featuredPost, ...otherPosts] = publishedBlogPosts;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#F8F9FA] pt-32 md:pt-40 pb-20 selection:bg-black selection:text-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="text-[10px] font-black text-black/20 uppercase tracking-[0.8em] block mb-4 ml-2">
              Engineering Hub . 2026
            </span>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-black uppercase leading-[0.8]">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black/20">Thought</span> <br />
              <span className="italic font-normal opacity-10">Archive.</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-3 max-w-md md:justify-end">
            {categories.map((category) => (
              <span
                key={category}
                className="bg-white border border-black/10 px-4 py-2 text-[9px] font-black uppercase tracking-widest"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {featuredPost && (
          <article className="mb-8">
            <Link
              to={`/thinking/${featuredPost.id}`}
              className="group grid grid-cols-1 lg:grid-cols-2 min-h-[560px] bg-black overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full min-h-[320px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-between text-white">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                  Featured . {featuredPost.category} . {featuredPost.date}
                </div>
                <div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8 group-hover:italic transition-all">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/60 font-medium leading-relaxed max-w-xl">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D8F1A0]">
                  Read article &rarr;
                </span>
              </div>
            </Link>
          </article>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Link to={`/thinking/${post.id}`} className="group block bg-white border border-black/10 h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                <div className="p-10">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-6">
                    {post.category} . {post.date}
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6 group-hover:italic transition-all">
                    {post.title}
                  </h2>
                  <p className="text-sm font-medium text-black/50 leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;
