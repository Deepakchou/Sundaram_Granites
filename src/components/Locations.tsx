import { motion } from 'motion/react';
import { MapPin, Factory, Truck, Globe } from 'lucide-react';

const locations = [
  { id: 1, name: 'Krishnagiri, Tamil Nadu', type: 'Manufacturing Unit', top: '80%', left: '40%', delay: 0.2 },
  { id: 2, name: 'Kishangarh, Rajasthan', type: 'Manufacturing Unit', top: '35%', left: '25%', delay: 0.4 },
  { id: 3, name: 'Srikakulam, Andhra Pradesh', type: 'Manufacturing Unit', top: '65%', left: '45%', delay: 0.6 },
  { id: 4, name: 'Warangal, Telangana', type: 'Manufacturing Unit', top: '60%', left: '35%', delay: 0.8 },
  { id: 5, name: 'Jalore, Rajasthan', type: 'Manufacturing Unit', top: '40%', left: '20%', delay: 1.0 },
];

const stats = [
  { icon: Factory, value: '5', label: 'Manufacturing Units' },
  { icon: Globe, value: '25+', label: 'Countries Exported' },
  { icon: Truck, value: '450,000+', label: 'SQ.FT. Monthly Shipment' },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Nationwide Presence, <br/>
            <span className="text-brand-500 italic">Global Reach</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            With strategically located manufacturing units across India's richest granite belts, we ensure uninterrupted supply and unmatched quality control.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map Side */}
          <div className="relative aspect-square max-w-lg mx-auto w-full">
            {/* Stylized India Map SVG - Simplified representation */}
            <svg viewBox="0 0 400 450" className="w-full h-full opacity-20 drop-shadow-2xl">
              <path 
                d="M150,20 L180,10 L220,15 L250,40 L280,60 L300,90 L320,120 L350,150 L380,180 L390,220 L370,260 L350,300 L320,350 L280,400 L250,430 L220,440 L180,420 L150,380 L120,330 L90,280 L60,240 L30,200 L20,160 L40,120 L70,90 L100,60 L120,40 Z" 
                fill="currentColor" 
                className="text-slate-500"
              />
            </svg>

            {/* Location Markers */}
            {locations.map((loc) => (
              <motion.div
                key={loc.id}
                className="absolute flex flex-col items-center"
                style={{ top: loc.top, left: loc.left }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: loc.delay, type: 'spring' }}
              >
                <motion.div 
                  className="relative group cursor-pointer"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: loc.delay 
                  }}
                >
                  {/* Ripple animation */}
                  <motion.span 
                    className="absolute inset-0 rounded-full bg-brand-500"
                    animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: loc.delay
                    }}
                  />
                  {/* Marker */}
                  <div className="relative bg-brand-500 text-white p-2 rounded-full shadow-lg shadow-brand-500/50 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-max opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <div className="bg-white text-slate-900 px-4 py-2 rounded-lg shadow-xl text-sm">
                      <p className="font-bold">{loc.name}</p>
                      <p className="text-slate-500 text-xs">{loc.type}</p>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Stats Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors"
              >
                <stat.icon className="w-10 h-10 text-brand-500 mb-6" />
                <h3 className="text-4xl font-serif font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
