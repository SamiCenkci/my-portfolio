import Image from "next/image";
import Languages from "@/components/Languages";

type CardProps = {
  logo: string;
  alt: string;
  title: string;
  subtitle: string;
  languages: string[];
};

export default function Cardbox({ logo, alt, title, subtitle, languages }: CardProps) {
  return (
    <div>
      {/* Add `relative` and `overflow-hidden`; remove padding so image fills */}
      <button className="relative w-full h-40 rounded-lg border border-zinc-800 bg-black hover:border-zinc-500 transition-colors overflow-hidden">
        <Image
          src={logo}
          alt={alt}
          fill
          className="object-cover"
        />
      </button>

      <p className="font-medium text-white mt-2 px-1">{title}</p>
      <p className="text-zinc-400 text-sm px-1">{subtitle}</p>

      <Languages languages={languages} />
    </div>
  );
}