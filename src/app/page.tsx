export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white selection:bg-fuchsia-500/30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.15)_0%,_transparent_70%)]" />

      <main className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Now live on the internet
        </div>

        <h1 className="max-w-2xl bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
          Aaron&apos;s Kool Website
        </h1>

        <p className="max-w-md text-lg leading-relaxed text-zinc-400">
          Built with Next.js. Deployed with SST. Kool by default.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: "⚡", label: "Fast", desc: "Edge-optimized" },
            { icon: "🧊", label: "Kool", desc: "Obviously" },
            { icon: "🚀", label: "Shipped", desc: "SST on AWS" },
          ].map((item) => (
            <div
              key={item.label}
              className="group rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm transition-all hover:border-fuchsia-500/30 hover:bg-white/10"
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="mt-2 font-semibold">{item.label}</div>
              <div className="text-sm text-zinc-500">{item.desc}</div>
            </div>
          ))}
        </div>

        <a
          href="/weather"
          className="mt-4 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all hover:border-fuchsia-500/30 hover:bg-white/10 hover:text-white"
        >
          🌤️ Weather Lookup &rarr;
        </a>
      </main>

      <footer className="absolute bottom-8 text-sm text-zinc-600">
        &copy; {new Date().getFullYear()} Aaron&apos;s Kool Website
      </footer>
    </div>
  );
}
