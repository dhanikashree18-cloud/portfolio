export default function Certifications() {
  const achievements = [
    {
      title: "NCC 'A' & 'B' Certificate",
      org: "National Cadet Corps (India)",
      desc: "Earned both 'A' and 'B' Certificates with excellent marks. Actively trained in physical conditioning, weapon handling, drills, first aid, and disaster management. Developed high personal discipline, commitment, and national service values.",
      icon: (
        <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      color: "border-emerald-500/20 hover:border-emerald-500/50",
      glow: "hover:shadow-emerald-500/5",
      badgeColor: "text-emerald-400"
    },
    {
      title: "Overall Runner-up Award",
      org: "Intercollegiate NCC Meet 2024, Trichy",
      desc: "Outstanding team contribution and command leading to the overall runner-up position in an competitive arena containing 20+ top-tier regional institutions. Awarded for drill excellence, high field craft skills, leadership drills, and team synergy.",
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 10.628c-.134.966-.468 1.867-.982 3.172m0-3.172a4 4 0 117.965 0M9 6.75h6" />
        </svg>
      ),
      color: "border-amber-500/20 hover:border-amber-500/50",
      glow: "hover:shadow-amber-500/5",
      badgeColor: "text-amber-500"
    }
  ];

  return (
    <section id="certifications" className="py-32 bg-zinc-900/50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold font-display">Achievements</span>
            <div className="h-[2px] w-8 bg-indigo-500 mx-auto mt-1"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
            Certifications & Medals
          </h2>
        </div>

        {/* Plaques grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {achievements.map((item, idx) => (
            <div 
              key={idx}
              className={`bg-zinc-900/30 backdrop-blur-xl border ${item.color} rounded-3xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between space-y-8 ${item.glow}`}
            >
              <div className="space-y-6">
                {/* Header Badge */}
                <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-inner">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold font-display text-2xl tracking-tight text-zinc-100">{item.title}</h4>
                  <p className={`text-sm font-bold font-display uppercase tracking-wider ${item.badgeColor}`}>{item.org}</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
