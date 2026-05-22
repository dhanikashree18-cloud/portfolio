import { useEffect, useState } from 'react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('react');

  return (
    <section className="min-h-screen flex items-center pt-24 relative overflow-hidden bg-zinc-950">
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[130px] pointer-events-none animate-pulse-slow"></div>
      
      {/* Fine Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center relative z-10 w-full py-12">
        {/* Left Column: Headline & Actions */}
        <div className="space-y-8 md:col-span-6">
          <div className="inline-flex items-center gap-3 bg-zinc-900/60 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border border-zinc-800/80 text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to Internships & Opportunities
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold font-display leading-tight tracking-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dhanikashree
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 font-sans leading-relaxed max-w-lg">
              Student developer who loves crafting <span className="text-zinc-200 font-semibold">interactive</span>,{' '}
              <span className="text-indigo-400 font-semibold">functional</span>, and{' '}
              <span className="text-pink-400 font-semibold">visually stunning</span> applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" 
               className="px-6 py-3.5 bg-white text-zinc-950 font-bold rounded-2xl flex items-center gap-2 hover:bg-zinc-100 hover:scale-[1.02] active:scale-98 transition-all shadow-xl shadow-white/5">
              Explore My Work <span>→</span>
            </a>
            
            <a href="/resume.pdf" 
               target="_blank"
               className="px-6 py-3.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800/50 rounded-2xl font-medium transition-all hover:scale-[1.02] active:scale-98 flex items-center gap-2 text-sm text-zinc-300">
              <span>📄</span> Resume
            </a>

            <a href="#contact" 
               className="px-6 py-3.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800/50 rounded-2xl font-medium transition-all hover:scale-[1.02] active:scale-98 flex items-center gap-2 text-sm text-zinc-300">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Column: Code IDE Mockup */}
        <div className="flex justify-center md:col-span-6 w-full animate-float">
          <div className="w-full max-w-[480px] bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/5">
            {/* Top Bar */}
            <div className="bg-zinc-950/80 px-6 py-3.5 flex items-center justify-between border-b border-zinc-900">
              <div className="flex gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></span>
              </div>
              <div className="flex gap-3 text-[11px] font-semibold text-zinc-500 uppercase tracking-widest font-display">
                <button 
                  onClick={() => setActiveTab('react')} 
                  className={`transition-colors hover:text-indigo-400 ${activeTab === 'react' ? 'text-indigo-400 font-bold border-b border-indigo-500' : ''}`}
                >
                  developer.jsx
                </button>
                <button 
                  onClick={() => setActiveTab('ncc')} 
                  className={`transition-colors hover:text-emerald-400 ${activeTab === 'ncc' ? 'text-emerald-400 font-bold border-b border-emerald-500' : ''}`}
                >
                  ncc-cadet.json
                </button>
              </div>
            </div>

            {/* Code Workspace */}
            <div className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-zinc-400 bg-zinc-900/30">
              {activeTab === 'react' ? (
                <div>
                  <p><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-emerald-300">'react'</span>;</p>
                  <br />
                  <p><span className="text-purple-400">const</span> Developer = () =&gt; &#123;</p>
                  <p className="pl-4"><span className="text-purple-400">const</span> name = <span className="text-emerald-300">"Dhanikashree"</span>;</p>
                  <p className="pl-4"><span className="text-purple-400">const</span> fields = [<span className="text-emerald-300">"Physics"</span>, <span className="text-emerald-300">"CompApps"</span>];</p>
                  <p className="pl-4"><span className="text-purple-400">const</span> skills = [</p>
                  <p className="pl-8"><span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"Java"</span>, <span className="text-emerald-300">"MySQL"</span></p>
                  <p className="pl-4">];</p>
                  <br />
                  <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                  <p className="pl-8 text-zinc-500">&lt;<span className="text-pink-400">Portfolio</span>&gt;</p>
                  <p className="pl-12 text-zinc-500">&lt;<span className="text-indigo-400">CodeEditor</span> <span className="text-yellow-300">status</span>=<span className="text-emerald-300">"stunning"</span> /&gt;</p>
                  <p className="pl-8 text-zinc-500">&lt;/<span className="text-pink-400">Portfolio</span>&gt;</p>
                  <p className="pl-4">);</p>
                  <p>&#125;;</p>
                  <br />
                  <p><span className="text-purple-400">export default</span> Developer;</p>
                </div>
              ) : (
                <div>
                  <p>&#123;</p>
                  <p className="pl-4"><span className="text-pink-400">"cadetName"</span>: <span className="text-emerald-300">"Dhanikashree"</span>,</p>
                  <p className="pl-4"><span className="text-pink-400">"certificates"</span>: [<span className="text-emerald-300">"Certificate 'A'"</span>, <span className="text-emerald-300">"Certificate 'B'"</span>],</p>
                  <p className="pl-4"><span className="text-pink-400">"meet"</span>: <span className="text-emerald-300">"Intercollegiate NCC Meet 2024"</span>,</p>
                  <p className="pl-4"><span className="text-pink-400">"rank"</span>: <span className="text-emerald-300">"Overall Runner-up, Trichy"</span>,</p>
                  <p className="pl-4"><span className="text-pink-400">"strengths"</span>: [</p>
                  <p className="pl-8"><span className="text-emerald-300">"Discipline"</span>,</p>
                  <p className="pl-8"><span className="text-emerald-300">"Team Leadership"</span>,</p>
                  <p className="pl-8"><span className="text-emerald-300">"Critical Thinking"</span></p>
                  <p className="pl-4">]</p>
                  <p>&#125;</p>
                </div>
              )}
            </div>
            {/* Mockup Status Bar */}
            <div className="bg-zinc-950/80 border-t border-zinc-900/80 px-6 py-2 flex items-center justify-between text-xs text-zinc-500 font-sans">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Ready</span>
              </div>
              <div>UTF-8</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
