import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { publishedBlogPosts } from "../data/blogData";

const Insights = () => {
  const articles = publishedBlogPosts.slice(0, 3);

  return (
    <section className="py-36 md:py-52 bg-white border-t border-black/5">
      <div className="container mx-auto px-8">
        <div className="text-center mb-32">
          <div className="text-[10px] font-bold text-black/30 uppercase tracking-[0.5em] mb-8">
            Knowledge Base
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter">
            System Insights & Trends
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/thinking/${article.id}`} className="block">
                <div className="aspect-[16/10] overflow-hidden grayscale mb-8 bg-black/5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <span className="px-3 py-1 bg-black text-white text-[8px] font-bold tracking-widest uppercase">
                      {article.category}
                    </span>
                    <span className="text-[10px] font-bold text-black/30">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-black group-hover:italic transition-all leading-tight">
                    {article.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
