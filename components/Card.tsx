import Image from "next/image";

type CardProps = {
  logo: string;
  alt: string;
  title: string;
  subtitle: string;
  date: string;
};

export default function Card({ logo, alt, title, subtitle, date }: CardProps) {
  return (
    <button className="w-full text-left px-5 py-4 rounded-lg border border-zinc-800 bg-black hover:border-zinc-500 transition-colors">
      <div className="flex items-center gap-4">
        <Image
          src={logo}
          alt={alt}
          width={48}
          height={48}
          className="rounded-md shrink-0"
        />
        <div className="flex justify-between items-center flex-1">
          <div>
            <p className="font-medium text-white">{title}</p>
            <p className="text-zinc-400 text-sm mt-1">{subtitle}</p>
          </div>
          <p className="text-zinc-500 text-sm">{date}</p>
        </div>
      </div>
    </button>
  );
}