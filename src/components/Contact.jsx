import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Mesh light */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold font-display">Get In Touch</span>
            <div className="h-[2px] w-8 bg-indigo-500 mx-auto mt-1"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
            Let's Connect
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-md mx-auto leading-relaxed">
            Have a project, internship opportunity, or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        {/* Form and Info Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Info Side */}
          <div className="md:col-span-5 space-y-8">
            <div className="bg-zinc-900/30 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl space-y-8">
              <h3 className="text-xl font-bold font-display text-white">Contact Info</h3>
              
              <div className="space-y-6">
                {/* Email Info */}
                <div className="flex gap-4 items-center group">
                  <div className="w-11 h-11 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider font-display">Email Me</p>
                    <a href="mailto:dhanikashree18@gmail.com" className="text-sm text-zinc-300 hover:text-white transition-colors font-sans">
                      dhanikashree18@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Info */}
                <div className="flex gap-4 items-center group">
                  <div className="w-11 h-11 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider font-display">Location</p>
                    <p className="text-sm text-zinc-300 font-sans">Madurai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-col gap-3 pt-6 border-t border-zinc-800/80">
                <a 
                  href="https://www.linkedin.com/in/dhanika-shree-b3722237b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 rounded-2xl font-semibold text-sm text-zinc-300 hover:text-white flex items-center justify-center gap-2.5 transition-all"
                >
                  <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-7 bg-zinc-900/30 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-display">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe" 
                    className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800/80 focus:border-indigo-500 rounded-2xl text-sm font-sans text-white focus:outline-none transition-all placeholder:text-zinc-600 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-display">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com" 
                    className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800/80 focus:border-indigo-500 rounded-2xl text-sm font-sans text-white focus:outline-none transition-all placeholder:text-zinc-600 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-display">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hey, let's collaborate on..." 
                  className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800/80 focus:border-indigo-500 rounded-2xl text-sm font-sans text-white focus:outline-none transition-all placeholder:text-zinc-600 focus:ring-1 focus:ring-indigo-500 resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-2xl font-bold text-sm shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending Message...
                  </>
                ) : status === 'success' ? (
                  '✓ Message Sent Successfully'
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
