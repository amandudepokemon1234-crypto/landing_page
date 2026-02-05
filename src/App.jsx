const features = [
  {
    title: 'Fast Performance',
    description: 'Optimized React code that loads quickly and feels smooth on every device.',
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first layout with Tailwind utility classes for clean and adaptive UI.',
  },
  {
    title: 'Easy Customization',
    description: 'Simple component structure so you can update text, colors, and sections quickly.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto max-w-6xl px-6 py-6">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <h1 className="text-lg font-semibold tracking-wide">BrandName</h1>
          <button className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium transition hover:bg-indigo-400">
            Get Started
          </button>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full border border-indigo-300/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
              New Launch 2026
            </p>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Build a stunning landing page with React + Tailwind CSS
            </h2>
            <p className="mt-5 max-w-xl text-slate-300">
              This template gives you a modern hero section, feature highlights, and clear call-to-action blocks
              to attract users and boost conversions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-indigo-500 px-6 py-3 font-semibold transition hover:bg-indigo-400">
                Start Free Trial
              </button>
              <button className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-slate-100 transition hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent p-8">
            <div className="rounded-xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-indigo-500/20">
              <p className="text-sm text-slate-300">Monthly Growth</p>
              <p className="mt-2 text-4xl font-bold text-indigo-300">+128%</p>
              <p className="mt-2 text-sm text-slate-400">From better landing page engagement</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-white/5 p-3 text-center">
                  <p className="text-xs text-slate-300">Visits</p>
                  <p className="text-lg font-semibold">42K</p>
                </div>
                <div className="rounded-lg bg-white/5 p-3 text-center">
                  <p className="text-xs text-slate-300">Signups</p>
                  <p className="text-lg font-semibold">7.4K</p>
                </div>
                <div className="rounded-lg bg-white/5 p-3 text-center">
                  <p className="text-xs text-slate-300">Revenue</p>
                  <p className="text-lg font-semibold">$31K</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-300/40"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-slate-300">{feature.description}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
