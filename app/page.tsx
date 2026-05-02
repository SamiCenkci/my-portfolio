import Image from "next/image";
import Card from "@/components/Card";
import Cardbox from "@/components/Cardbox";
import Languages from "@/components/Languages";

export default function Home() {
  return (
    // Main wrapper - centers content horizontally, adds top padding
    <main className="min-h-screen flex justify-center bg-zinc pt-20">
      {/* Inner section - max width container with vertical gap between sections */}
      <section className="flex flex-col items-center max-w-2xl w-full gap-5 px-4">

        {/* ===== Header Row: Profile photo + Name/Title ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          {/* Profile photo - circular, priority loaded */}
          <a href="https://github.com/SamiCenkci" target="_blank" rel="noopener noreferrer">
            <Image
              src="/profile1.jpeg"
              alt="My photo"
              width={160}
              height={160}
              className="aspect-square object-cover rounded-full shrink-0"
              priority
            />
          </a>
          {/* Name and role */}
          <div className="text-left">
            <h1 className="text-xl font-medium text-black dark:text-white">Sami Cenkci</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-500">CS Student & Developer</p>
          </div>
        </div>

        {/* ===== Intro / Bio paragraph ===== */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 text-left">
          CS student at the University of OsloMet passionate about building clean, modern applications. Hands-on experience across the full stack from Spring Boot and SQL to React solutions and cloud deployment. I enjoy turning ideas into products that actually work.
        </p>

        {/* ===== Education Section ===== */}
        <div className="w-full pt-4">
          <h2 className="text-lg font-bold text-white mb-2">Education</h2>
          {/* Single education card - OsloMet Bachelor's */}
           <a href="https://www.oslomet.no/studier/tkd/informasjonsteknologi" target="_blank" rel="noopener noreferrer">
            <Card
              logo="/Oslomet.png"
              alt="OsloMet"
              title="Bachelor's · Computer Science"
              subtitle="OsloMet"
              date="2023 – 2025"
            />
          </a>
        </div>

        {/* ===== Experience Section ===== */}
        <div className="w-full pt-4">
          <h2 className="text-lg font-bold text-white mb-2">Experience</h2>
          {/* Vertical list of experience cards */}
          <div className="flex flex-col gap-2">
            {/* Sintef - Software Developer role */}
            <a href="https://www.sintef.no/en/digital/master-students/" target="_blank" rel="noopener noreferrer">
              <Card
                logo="/Sintef3.png"
                alt="Sintef"
                title="Software Developer"
                subtitle="Sintef"
                date="2024 – 2025"
              />
            </a>
            {/* Reitan - Support role */}
            <a href="https://reitan.no/no" target="_blank" rel="noopener noreferrer">
              <Card
                logo="/reitan1.png"
                alt="Reitan Convenience Norway AS"
                title="1. linje Support, Servicedesk"
                subtitle="Reitan Convenience Norway AS"
                date="2026 – Now"
              />
            </a>
            {/* Easypick - current Tech Support role */}
             <a href="https://www.easypick.app/no/" target="_blank" rel="noopener noreferrer">
              <Card
                logo="/easypick.png"
                alt="Easypick"
                title="Tech Support"
                subtitle="Easypick AS"
                date="2025 – 2026"
              />
            </a>
          </div>
        </div>

        {/* ===== Outside of Code (Hobbies) ===== */}
        <div className="w-full pt-4">
          <h2 className="text-lg font-bold text-white mb-3">Outside of Code</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "📚", label: "Reading" },
              { icon: "💰", label: "Finn.no Flipping" },
              { icon: "🎮", label: "Gaming" },
              { icon: "⚽", label: "Football" },
            ].map((hobby) => (
              <div
                key={hobby.label}
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 hover:bg-zinc-900 transition-all hover:-translate-y-0.5 cursor-default"
              >
                <span className="text-2xl mb-1">{hobby.icon}</span>
                <span className="text-xs text-zinc-400">{hobby.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Selected Projects Section ===== */}
        <div className="w-full pt-4">
          <h2 className="text-lg font-bold text-white mb-2">Selected Projects</h2>
          {/* Project cards - stack on mobile, side-by-side on md+ screens */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Bachelor thesis project */}
            <a href="https://github.com/SamiCenkci/ReservoirWind.git" target="_blank" rel="noopener noreferrer">
              <Cardbox
                logo="/DynamicReservoir_wide.jpg"
                alt="Bachelor thesis"
                title="Bachelor thesis"
                subtitle="AI electricity forecasting with Python, SQL, pandas, matplotlib, seaborn, and Plotly. Automated pipelines via Git."
                languages={["Python", "SQL", "pandas", "matplotlib", "seaborn", "Plotly", "Git"]}
              />
            </a>
            {/* Arcane fan website project */}
            <a href="https://github.com/SamiCenkci/ArcaneWebSite.git" target="_blank" rel="noopener noreferrer">
              <Cardbox
                logo="/arcane2.jpg"
                alt="Arcane"
                title="Arcane fan site"
                subtitle="A modern website built with JavaScript, Node.js, HTML, and CSS exploring the world of Arcane."
                languages={["JavaScript", "Node.js", "HTML", "CSS"]}
              />
            </a>
          </div>
        </div>

        {/* ===== Daily Routine ===== */}
        <div className="w-full pt-4">
          <h2 className="text-lg font-bold text-white mb-3">A Day in My Life</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ===== Weekdays ===== */}
            <div>
              <div className="flex gap-2 mb-3">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Weekdays</span>
                <span className="text-xs text-zinc-600">Mon – Fri</span>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-zinc-800" />

                {[
                  { time: "07:00", icon: "🥐", title: "Breakfast", desc: "Easy start to the day" },
                  { time: "07:30", icon: "📚", title: "Reading", desc: "About 30 minutes of reading" },
                  { time: "08:00", icon: "💼", title: "Work at Reitan AD", desc: "On the job from 9 to 16" },
                  { time: "17:00", icon: "🍽️", title: "Eat & Recharge", desc: "Dinner and a short rest" },
                  { time: "19:00", icon: "💻", title: "Project Time", desc: "Coding and building (~1.5 h)" },
                  { time: "20:30", icon: "🎮", title: "Gaming", desc: "About an hour before bed" },
                  { time: "22:00", icon: "🌙", title: "Sleep", desc: "Wind down and rest" },
                ].map((item, idx) => (
                  <div key={idx} className="relative mb-4 last:mb-0 group">
                    <div className="absolute -left-[1.85rem] top-1 w-6 h-6 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-sm group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                      {item.icon}
                    </div>
                    <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/30 group-hover:bg-zinc-900/60 group-hover:border-zinc-700 transition-all">
                      <div className="flex items-baseline justify-between mb-1">
                        <p className="text-sm font-medium text-white">{item.title}</p>
                        <span className="text-xs text-zinc-500 font-mono">{item.time}</span>
                      </div>
                      <p className="text-xs text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== Weekend ===== */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Weekend</span>
                <span className="text-xs text-zinc-600">Sat – Sun</span>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-pink-500 via-orange-500 to-zinc-800" />

                {[
                  { time: "08:30", icon: "🥐", title: "Slow Breakfast", desc: "Later start, relaxed morning" },
                  { time: "09:30", icon: "📚", title: "Reading", desc: "About 1 hour of reading" },
                  { time: "10:30", icon: "💻", title: "Project Time", desc: "Deep work for 1–3 hours" },
                  { time: "13:00", icon: "🤝", title: "Volunteer Mentor", desc: "4 hours mentoring (Sat only)" },
                  { time: "18:00", icon: "⚽", title: "Football Group", desc: "Playing with the friends (~3 h)" },
                  { time: "21:30", icon: "🍕", title: "Dinner Out", desc: "Eating with friends" },
                  { time: "00:00", icon: "🌙", title: "Sleep", desc: "Home and rest" },
                ].map((item, idx) => (
                  <div key={idx} className="relative mb-4 last:mb-0 group">
                    <div className="absolute -left-[1.85rem] top-1 w-6 h-6 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-sm group-hover:border-pink-500 group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all">
                      {item.icon}
                    </div>
                    <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/30 group-hover:bg-zinc-900/60 group-hover:border-zinc-700 transition-all">
                      <div className="flex items-baseline justify-between mb-1">
                        <p className="text-sm font-medium text-white">{item.title}</p>
                        <span className="text-xs text-zinc-500 font-mono">{item.time}</span>
                      </div>
                      <p className="text-xs text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ===== Languages Spoken ===== */}
        <div className="w-full pt-4">
          <h2 className="text-lg font-bold text-white mb-3">Languages</h2>
          <div className="flex flex-col gap-3">
            {[
              { flag: "🇳🇴", name: "Norwegian", level: "Fluent", percent: 90 },
              { flag: "🇹🇷", name: "Turkish", level: "Native", percent: 100 },
              { flag: "🇬🇧", name: "English", level: "Fluent", percent: 90 },
            ].map((lang) => (
              <div key={lang.name} className="flex items-center gap-3">
                <span className="text-xl">{lang.flag}</span>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-zinc-300">{lang.name}</span>
                    <span className="text-zinc-500 text-xs">{lang.level}</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Footer & Get in touch ===== */}
        <div className="w-full pt-4 pb-8 border-t border-zinc-800">
          <h2 className="text-lg font-bold text-white mb-2">Get in touch</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="mailto:samicenkci02@gmail.com" className="text-zinc-400 hover:text-white">
              Email
            </a>
            <a href="https://github.com/SamiCenkci" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sami-cenkci-81620625b/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
              LinkedIn
            </a>
            <a href="/Sami_Cenkci_CV.pdf" target="_blank" rel="noopener noreferrer" download className="text-zinc-400 hover:text-white">
              CV / Resume
            </a>
          </div>
        </div>

        <footer className="w-full text-center text-xs text-zinc-600 pt-8">
          © {new Date().getFullYear()} Sami Cenkci · Built with Next.js & Tailwind
        </footer>

      </section>
    </main>
  );
}
