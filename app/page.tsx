import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6">
      <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-4xl w-full">
        {/* Photo on the left */}
        <div className="shrink-0">
          <Image
            src="/profile.jpeg"
            alt="My photo"
            width={240}
            height={240}
            className="rounded-full object-cover border-4 border-slate-700 shadow-2xl"
            priority
          />
        </div>

        {/* Text on the right */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Your Name
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-slate-300">
            CS Student &amp; Developer
          </p>
        </div>
      </section>
    </main>
  );
}
