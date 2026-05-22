export default function Projects() {
  const projects = [
    {
      title: "Social Media Platform",
      desc: "An attractive, interactive, and fully responsive social media website featuring real-time feed updates, custom interactive likes, comments, and profile customization.",
      tags: ["React JS", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      icon: "🌐",
      color: "from-indigo-600 to-purple-600",
      glow: "hover:border-indigo-500/40 hover:shadow-indigo-500/5",
      github: "https://github.com",
      live: "https://github.com",
      mockup: (
        <div className="w-full h-full flex flex-col justify-end p-6 bg-zinc-950/60 font-sans">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 space-y-3 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400"></div>
              <div>
                <h5 className="text-xs font-bold text-white">Shree_Dev</h5>
                <p className="text-[10px] text-zinc-500">2 hours ago</p>
              </div>
            </div>
            <p className="text-[11px] text-zinc-300">Just launched my new React platform! React 19 is amazing! 🚀✨</p>
            <div className="flex gap-4 pt-1 text-[10px] text-zinc-500 font-semibold border-t border-zinc-800/80">
              <span className="text-pink-400">❤️ 42 Likes</span>
              <span>💬 12 Comments</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Creative Portfolio",
      desc: "A beautiful, premium, and modern developer portfolio highlighting software capabilities, timelines, skills and certifications with a fully responsive layout.",
      tags: ["React JS", "Tailwind CSS", "Vite", "Plus Jakarta Sans"],
      icon: "✨",
      color: "from-pink-600 to-violet-600",
      glow: "hover:border-pink-500/40 hover:shadow-pink-500/5",
      github: "https://github.com",
      live: "https://github.com",
      mockup: (
        <div className="w-full h-full flex items-center justify-center p-6 bg-zinc-950/60 font-display">
          <div className="w-4/5 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-2xl space-y-3 text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-violet-500 mx-auto flex items-center justify-center font-bold text-white text-lg">D</div>
            <div>
              <h5 className="text-xs font-bold text-white">Dhanikashree</h5>
              <p className="text-[9px] text-pink-400 uppercase tracking-widest font-semibold mt-1">Student Developer</p>
            </div>
            <div className="h-[2px] w-8 bg-pink-500 mx-auto"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="projects" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold font-display">My Creations</span>
            <div className="h-[2px] w-8 bg-indigo-500 mx-auto mt-1"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
            Featured Projects
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`group bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col h-full shadow-xl ${project.glow}`}
            >
              {/* Mockup Showcase Header */}
              <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-end`}>
                <div className="absolute inset-0 bg-black/10 z-0"></div>
                {/* Custom Mockup Layer */}
                <div className="absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105">
                  {project.mockup}
                </div>
                {/* Floating Icon */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center text-xl z-20 border border-white/10">
                  {project.icon}
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    {project.desc}
                  </p>
                </div>

                {/* Badges & Actions */}
                <div className="space-y-6 pt-4 border-t border-zinc-800/80">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[11px] font-semibold text-zinc-400 bg-zinc-950/80 px-2.5 py-1.5 rounded-lg border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 hover:bg-zinc-800/30 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white transition-all flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      GitHub
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl text-xs font-semibold shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all flex items-center gap-1.5"
                    >
                      Live Demo
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
