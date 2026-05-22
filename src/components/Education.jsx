export default function Education() {
  const steps = [
    {
      id: 1,
      title: "B.Sc Physics with Computer Applications",
      institution: "Lady Doak College, Madurai",
      period: "2024 – 2027",
      color: "border-indigo-500/30 hover:border-indigo-500",
      dotColor: "bg-indigo-500 shadow-indigo-500/50",
      themeColor: "text-indigo-400",
      desc: "An intensive undergraduate program integrating Core Physics principles with modern Practical Computer Applications, software engineering basics, and computational modeling."
    },
    {
      id: 2,
      title: "HSC - Computer Mathematics",
      institution: "CEOA Matriculation Higher Secondary School, Madurai",
      period: "2022 – 2024",
      color: "border-amber-500/30 hover:border-amber-500",
      dotColor: "bg-amber-500 shadow-amber-500/50",
      themeColor: "text-amber-400",
      desc: "Completed higher secondary education focusing heavily on Computer Science, Advanced Mathematics, Physics, and Chemistry."
    }
  ];

  return (
    <section id="education" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-indigo-500/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold font-display">My Journey</span>
            <div className="h-[2px] w-8 bg-indigo-500 mx-auto mt-1"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
            Education
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={step.id} className="relative flex flex-col md:flex-row items-start md:items-center">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
                  <div className={`w-4 h-4 rounded-full ${step.dotColor} shadow-[0_0_12px_2px] animate-pulse`}></div>
                </div>

                {/* Timeline Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ml-10 md:ml-0 ${idx % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:pl-8'}`}>
                  <div className={`bg-zinc-900/40 backdrop-blur-xl border ${step.color} p-8 rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/2`}>
                    <span className="text-xs font-semibold tracking-wider text-zinc-500 font-display">{step.period}</span>
                    <h3 className="text-2xl font-bold font-display text-white mt-2 leading-snug">{step.title}</h3>
                    <p className={`text-base font-semibold font-display ${step.themeColor} mt-1`}>{step.institution}</p>
                    <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-sans">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
