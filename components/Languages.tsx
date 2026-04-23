const colors = [
  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
];

const getColorForLanguage = (language: string) => {
  const hash = language.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

type LanguagesProps = {
  languages: string[];
};

export default function Languages({ languages }: LanguagesProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-3 px-1 pb-8">
      {languages.map((lang) => (
        <span
          key={lang}
          className={`inline-flex items-center rounded-full px-4 py-0.5 text-xs font-medium ${getColorForLanguage(lang)}`}
        >
          {lang}
        </span>
      ))}
    </div>
  );
}