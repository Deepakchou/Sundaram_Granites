import { Gem, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Gem className="w-8 h-8 text-brand-500" />
              <div className="flex flex-col">
                <span className="font-sans text-xl font-bold tracking-wider leading-none text-white">
                  SUNDARAM
                </span>
                <span className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase leading-none mt-1 text-brand-500">
                  Granites
                </span>
              </div>
            </div>
            <p className="mb-6">
              Trusted manufacturer and supplier of premium Indian granite slabs and tiles since 1993.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-brand-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-500 transition-colors">About Us</a></li>
              <li><a href="#collection" className="hover:text-brand-500 transition-colors">Our Collection</a></li>
              <li><a href="#locations" className="hover:text-brand-500 transition-colors">Manufacturing Units</a></li>
              <li><a href="#contact" className="hover:text-brand-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Collections</h4>
            <ul className="space-y-4">
              <li><a href="#collection" className="hover:text-brand-500 transition-colors">Premium Black</a></li>
              <li><a href="#collection" className="hover:text-brand-500 transition-colors">Classic Whites</a></li>
              <li><a href="#collection" className="hover:text-brand-500 transition-colors">Exotic Reds</a></li>
              <li><a href="#collection" className="hover:text-brand-500 transition-colors">Modern Greys</a></li>
              <li><a href="#collection" className="hover:text-brand-500 transition-colors">Custom Cut-to-Size</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="mb-4">Subscribe to get updates on new arrivals and offers.</p>
            <form className="flex" action="https://formspree.io/f/xwvreldd" method="POST">
              <input 
                type="email" 
                name="newsletterEmail"
                required
                placeholder="Your email" 
                className="bg-slate-900 border border-slate-800 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-brand-500 text-white"
              />
              <button type="submit" className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-r-lg font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Sundaram Granites. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
