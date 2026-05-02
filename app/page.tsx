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

        {/* ===== Selected Projects Section ===== */}
        <div className="w-full pt-4">
          <h2 className="text-lg font-bold text-white mb-2">Selected Projects</h2>
          {/* Project cards - stack on mobile, side-by-side on md+ screens */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Bachelor thesis project */}
            <a href="https://github.com/SamiCenkci/ReservoirWind.git" target="_blank" rel="noopener noreferrer">
              <Cardbox
                logo="/DynamicReservoir.jpg"
                alt="Bachelor thesis"
                title="Bachelor thesis"
                subtitle="AI electricity forecasting with Python, SQL, pandas, matplotlib, seaborn, and Plotly. Automated pipelines via Git."
                languages={["Python", "SQL", "pandas", "matplotlib", "seaborn", "Plotly", "Git"]}
              />
            </a>
            {/* Arcane fan website project */}
            <a href="https://github.com/yourusername/thesis" target="_blank" rel="noopener noreferrer">
              <Cardbox
                logo="/arcane3.jpg"
                alt="Arcane"
                title="Arcane fan site"
                subtitle="A modern website built with JavaScript, Node.js, HTML, and CSS exploring the world of Arcane."
                languages={["JavaScript", "Node.js", "HTML", "CSS"]}
              />
            </a>
          </div>
        </div>

        {/* ===== Skills Section ===== */}
        <div className="w-full pt-4 pb-8">
          <h2 className="text-lg font-bold text-white mb-2">Skills</h2>
          {/* Full list of languages/tools rendered as colored badges */}
          <Languages
            languages={[
              "Python", "SQL", "pandas", "matplotlib", "seaborn", "Plotly", "Git",
              "JavaScript", "Node.js", "HTML", "CSS", "C", "React",
              "Bootstrap", "Next.js", "Kotlin", "Maven"
            ]}
          />
        </div>

      </section>
    </main>
  );
}
