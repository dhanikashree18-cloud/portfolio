export default function About() {
  return (
    <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Biography */}
          <div className="md:col-span-5 space-y-6">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold font-display">Who I am</span>
              <div className="h-[2px] w-8 bg-indigo-500 mt-1"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              About Me
            </h2>
            <p className="text-base md:text-lg text-zinc-400 font-sans leading-relaxed">
              Hello! I am Dhanikashree, a passionate student developer who loves crafting interactive, 
              functional, and visually striking applications.
            </p>
            <p className="text-base md:text-lg text-zinc-400 font-sans leading-relaxed">
              With a strong background in Physics and Computer Applications, combined with discipline 
              from NCC, I bring both technical excellence, critical thinking, and leadership to every project.
            </p>
          </div>

          {/* Right Column - Drivers Card Grid */}
          <div className="md:col-span-7">
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-10 shadow-xl">
              <h3 className="uppercase tracking-widest text-indigo-400 mb-8 text-xs font-semibold font-display">What drives me</h3>
              
              <div className="grid sm:grid-cols-2 gap-8">
                
                {/* Driver 1 */}
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold font-display text-lg text-zinc-200 group-hover:text-white transition-colors">Creative Solving</h4>
                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">Turning complex logical problems into elegant, smooth solutions</p>
                  </div>
                </div>

                {/* Driver 2 */}
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-pink-500/20 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096m.813 5.096a11.5 11.5 0 01-2-5.5m7.188 5.5L15 16m0 0l.813-5.096m-.813 5.096a11.5 11.5 0 002-5.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold font-display text-lg text-zinc-200 group-hover:text-white transition-colors">Beautiful Design</h4>
                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">Pixel-perfect, harmonious, and highly immersive layouts</p>
                  </div>
                </div>

                {/* Driver 3 */}
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.97 5.97 0 00-.75-2.906m-.75 2.906a30.12 30.12 0 01-13 0m0 0a5.97 5.97 0 01.75-2.906m-.75 2.906A9.094 9.094 0 013 18.241a3.004 3.004 0 014.68-2.724m0 0a5.977 5.977 0 013.32-3.235m.002 0A4.978 4.978 0 0112 12.039c1.21 0 2.327-.428 3.205-1.143m0 0a5.977 5.977 0 013.32 3.235M12 12a3 3 0 100-6 3 3 0 000 6zm7.25-1.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-10.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold font-display text-lg text-zinc-200 group-hover:text-white transition-colors">Team Collaboration</h4>
                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">Active communicator, disciplined team player, and natural leader</p>
                  </div>
                </div>

                {/* Driver 4 */}
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold font-display text-lg text-zinc-200 group-hover:text-white transition-colors">Clean Code</h4>
                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">Developing maintainable, modular, and optimized web applications</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
