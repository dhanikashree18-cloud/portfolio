export default function Skills() {
  const techSkills = [
    { 
      name: "Python", 
      level: "Proficient",
      glow: "hover:border-yellow-400/40 hover:shadow-yellow-400/5", 
      textColor: "text-yellow-400",
      icon: (
        <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18c.9 0 1.66.72 1.88 1.6l.3 1.2h2.07c.88 0 1.62.7 1.78 1.57l.38 2.05c.16.88-.42 1.74-1.3 1.9L16.2 8.97c-.88.16-1.74-.42-1.9-1.3l-.38-2.05a1.8 1.8 0 0 1 1.3-1.9l.48-.12V2.4c0-.33-.27-.6-.6-.6h-3.6c-.33 0-.6.27-.6.6v2.4c0 .33.27.6.6.6h.6v.9H11.7c-.83 0-1.5.67-1.5 1.5v3h.9v-3c0-.33.27-.6.6-.6h2.1l.3 1.2a1.8 1.8 0 0 1-1.3 1.9l-2.07.38c-.88.16-1.74-.42-1.9-1.3l-.38-2.05A1.8 1.8 0 0 1 9.4 6.07l2.07-.38.3 1.2h.9v-1.8H11.7c-.83 0-1.5-.67-1.5-1.5V1.8c0-.83.67-1.5 1.5-1.5h2.55zM9.75 23.82c-.9 0-1.66-.72-1.88-1.6l-.3-1.2H5.5c-.88 0-1.62-.7-1.78-1.57l-.38-2.05c-.16-.88.42-1.74 1.3-1.9l3.07-.56c.88-.16 1.74.42 1.9 1.3l.38 2.05c.16.88-.42 1.74-1.3 1.9l-.48.12v1.2c0 .33.27.6.6.6h3.6c.33 0.6-.27.6-.6v-2.4c0-.33-.27-.6-.6-.6h-.6v-.9h1.2c.83 0 1.5-.67 1.5-1.5v-3h-.9v3c0 .33-.27.6-.6.6h-2.1l-.3-1.2c.83-.16 1.43-.89 1.3-1.9l-.3-2.07c-.16-.88-.89-1.48-1.78-1.3l-3.07.38c-.88.16-1.48.89-1.3 1.78l.38 2.05c.16.88.89 1.48 1.78 1.3l2.07-.38-.3-1.2h-.9v1.8h1.2c.83 0 1.5.67 1.5 1.5v1.8c0 .83-.67 1.5-1.5 1.5H9.75z"/>
        </svg>
      )
    },
    { 
      name: "Java", 
      level: "Proficient",
      glow: "hover:border-red-500/40 hover:shadow-red-500/5", 
      textColor: "text-red-500",
      icon: (
        <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 15c0-3 3-4 6-4s6 1 6 4" />
          <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path d="M8 8s2-2 4-2 4 2 4 2" />
        </svg>
      )
    },
    { 
      name: "C / C++", 
      level: "Experienced",
      glow: "hover:border-blue-400/40 hover:shadow-blue-400/5", 
      textColor: "text-blue-400",
      icon: (
        <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 20c-4.418 0-8-3.582-8-8s3.582-8 8-8c2.613 0 4.93 1.253 6.39 3.19M16 20h2m-2-4h4" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      name: "React JS", 
      level: "Proficient",
      glow: "hover:border-cyan-400/40 hover:shadow-cyan-400/5", 
      textColor: "text-cyan-400",
      icon: (
        <svg className="w-8 h-8 text-cyan-400 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    { 
      name: "JavaScript", 
      level: "Proficient",
      glow: "hover:border-yellow-300/40 hover:shadow-yellow-300/5", 
      textColor: "text-yellow-300",
      icon: (
        <svg className="w-8 h-8 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm12.525 10.742c-.524-.316-1.164-.523-1.802-.523-.974 0-1.503.447-1.503 1.07 0 .72.576.994 1.573 1.41 1.344.557 2.227 1.157 2.227 2.766 0 1.636-1.272 2.667-3.076 2.667-1.42 0-2.392-.56-2.997-1.517l1.248-.823c.39.638.966.974 1.68.974.874 0 1.4-.413 1.4-1.127 0-.766-.54-1.036-1.536-1.45-1.427-.58-2.285-1.23-2.285-2.73 0-1.532 1.164-2.57 2.87-2.57.946 0 1.776.286 2.286.7l-.84 1.096c-.347-.27-.85-.45-1.446-.45-.722 0-1.163.33-1.163.902 0 .61.425.856 1.258 1.185 1.488.583 2.562 1.126 2.562 2.795-.001 1.71-1.3 2.74-3.15 2.74zM8.07 13v6h-1.5v-6h1.5zm.7-2c0-.5-.4-.9-.9-.9s-.9.4-.9.9.4.9.9.9.9-.4.9-.9z"/>
        </svg>
      )
    },
    { 
      name: "HTML & CSS", 
      level: "Proficient",
      glow: "hover:border-orange-400/40 hover:shadow-orange-400/5", 
      textColor: "text-orange-400",
      icon: (
        <svg className="w-8 h-8 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z" />
          <path d="M12 7H8v3h4v3H8v3h8V7h-4z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    { 
      name: "MySQL", 
      level: "Proficient",
      glow: "hover:border-emerald-400/40 hover:shadow-emerald-400/5", 
      textColor: "text-emerald-400",
      icon: (
        <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-32 bg-zinc-900/50 relative overflow-hidden">
      {/* Background radial light */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold font-display">Superpowers</span>
            <div className="h-[2px] w-8 bg-indigo-500 mx-auto mt-1"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
            Technical Skills
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {techSkills.map((skill, index) => (
            <div 
              key={index} 
              className={`bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 flex flex-col items-center text-center shadow-lg cursor-default ${skill.glow}`}
            >
              <div className="mb-6 p-4 bg-zinc-950 rounded-2xl border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                {skill.icon}
              </div>
              <h4 className={`font-bold font-display text-xl tracking-tight text-zinc-100`}>
                {skill.name}
              </h4>
              <span className="text-xs font-semibold text-zinc-500 mt-2 bg-zinc-950 px-3 py-1.5 rounded-full border border-zinc-900 uppercase tracking-widest">
                {skill.level}
              </span>
            </div>
          ))}
        </div>

        {/* Soft Strengths / NCC Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold font-display text-white mb-10">Additional Strengths</h3>
          <div className="flex flex-wrap justify-center gap-5">
            <span className="px-6 py-3.5 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 hover:border-emerald-500/30 text-zinc-300 hover:text-white rounded-2xl transition duration-300 flex items-center gap-3 text-sm font-semibold">
              <span className="text-emerald-400">🛡️</span> Well Disciplined NCC Cadet
            </span>
            <span className="px-6 py-3.5 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 hover:border-indigo-500/30 text-zinc-300 hover:text-white rounded-2xl transition duration-300 flex items-center gap-3 text-sm font-semibold">
              <span className="text-indigo-400">🗣️</span> Excellent Communication
            </span>
            <span className="px-6 py-3.5 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 hover:border-pink-500/30 text-zinc-300 hover:text-white rounded-2xl transition duration-300 flex items-center gap-3 text-sm font-semibold">
              <span className="text-pink-400">🤝</span> Leadership & Teamwork
            </span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
