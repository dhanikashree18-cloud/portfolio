import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/75 backdrop-blur-xl border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-xl font-extrabold text-white shadow-lg shadow-indigo-500/20">
            D
          </div>
          <h1 className="text-2xl font-bold font-display tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Dhanikashree
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium font-display">
          <a href="#about" className="text-zinc-400 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">About</a>
          <a href="#education" className="text-zinc-400 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Education</a>
          <a href="#skills" className="text-zinc-400 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Skills</a>
          <a href="#projects" className="text-zinc-400 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Projects</a>
          <a href="#certifications" className="text-zinc-400 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Achievements</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/resume.pdf" 
             target="_blank"
             className="px-5 py-2.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800/50 rounded-2xl font-medium transition-all flex items-center gap-2 text-sm text-zinc-200">
            <span>📄</span> Resume
          </a>
          <a href="#contact" 
             className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-2xl font-semibold text-sm transition-all duration-300 shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/25 active:scale-98">
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-zinc-200 hover:text-white text-2xl focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950/95 border-t border-zinc-900 py-8 absolute top-[73px] left-0 right-0 backdrop-blur-2xl shadow-2xl">
          <div className="flex flex-col items-center gap-6 text-base font-semibold font-display">
            <a href="#about" onClick={closeMenu} className="text-zinc-300 hover:text-white transition-colors">About</a>
            <a href="#education" onClick={closeMenu} className="text-zinc-300 hover:text-white transition-colors">Education</a>
            <a href="#skills" onClick={closeMenu} className="text-zinc-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" onClick={closeMenu} className="text-zinc-300 hover:text-white transition-colors">Projects</a>
            <a href="#certifications" onClick={closeMenu} className="text-zinc-300 hover:text-white transition-colors">Achievements</a>
            
            <div className="w-4/5 h-[1px] bg-zinc-900 my-2"></div>

            <a href="/resume.pdf" 
               target="_blank"
               onClick={closeMenu}
               className="w-4/5 py-3 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800/50 rounded-2xl font-semibold flex items-center justify-center gap-2 text-sm text-zinc-200">
              <span>📄</span> Download Resume
            </a>
            
            <a href="#contact" 
               onClick={closeMenu}
               className="w-4/5 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-2xl font-bold flex items-center justify-center text-sm shadow-md shadow-indigo-500/10">
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
