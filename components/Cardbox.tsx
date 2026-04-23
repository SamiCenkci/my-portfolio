import Image from "next/image";
import Languages from "@/components/Languages";

type CardProps = {
  logo: string;
  alt: string;
  title: string;
  subtitle: string;
  languages: string[]; // just a string array
};

export default function Cardbox({ logo, alt, title, subtitle, languages }: CardProps) {
  return (
    <div>
      <button className="w-full h-40 rounded-lg border border-zinc-800 bg-black hover:border-zinc-500 transition-colors flex items-center justify-center p-0">
        <Image
          src={logo}
          alt={alt}
          width={200}
          height={48}
          className="max-w-full max-h-full object-contain"
        />
      </button>

      <p className="font-medium text-white mt-2 px-1">{title}</p>
      <p className="text-zinc-400 text-sm px-1">{subtitle}</p>

      {/* Use the Languages component */}
      <Languages languages={languages} />
    </div>
  );
}