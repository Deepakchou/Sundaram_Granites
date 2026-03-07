import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const slabs = [
  {
    id: 1,
    name: 'Paradise Pink',
    category: 'Premium',
    image: "/about-image.jpeg",
  },
  {
    id: 2,
    name: 'Honey Blue',
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Moon White',
    category: 'Exotic',
    image: 'https://images.unsplash.com/photo-1508330570239-ce7cabceee22?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'Maryam White',
    category: 'Premium',
    image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    name: 'Fish Black',
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1587334274328-64186a80aeee?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    name: 'Custom Finishes',
    category: 'Modern',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Showcase() {
  return (
    <section id="collection" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4"
            >
              Signature Collection
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              Explore our handpicked selection of premium granite slabs, sourced from the finest quarries and processed with precision.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 transition-colors"
          >
            View Full Catalog <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slabs.map((slab, index) => (
            <motion.div
              key={slab.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={slab.image}
                  alt={slab.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-2 block">
                  {slab.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {slab.name}
                </h3>
                <div className="w-0 h-0.5 bg-brand-500 group-hover:w-12 transition-all duration-300 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
