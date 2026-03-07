import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Premium Quality Extraction',
  'Advanced Processing Technology',
  'Custom Cut-to-Size Options',
  'Global Export Standards',
  'Sustainable Mining Practices',
  'End-to-End Logistics',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="about-images.PNG"
                alt="Sundaram Granites Slab"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if the local image isn't found yet
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1508330570239-ce7cabceee22?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-5xl font-serif font-bold text-brand-600 mb-2">30+</p>
              <p className="text-slate-600 font-medium">Years of Excellence</p>
            </div>
          </motion.div>

          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-600 font-medium tracking-wider uppercase text-sm mb-4 block"
            >
              About Sundaram Granites
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight"
            >
              Transforming Raw Stone into Timeless Elegance
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-8"
            >
              Sundaram Granites is a trusted manufacturer and supplier of premium Indian granite slabs and tiles. We offer a wide range of natural granite colors with customized sizes and finishes to suit residential and commercial projects. With a strong focus on quality, precision processing, and timely delivery, we ensure every slab reflects durability and natural beauty. Our operations across Krishnagiri, Srikakulam, Kishangarh, and Jalore allow us to serve customers across India and international markets. At Sundaram Granites, we combine nature's finest stone with expert craftsmanship to create timeless spaces.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              href="#contact"
              className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-brand-600 transition-colors"
            >
              Discover Our Process
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
