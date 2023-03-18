import { useState } from "react";

interface OptionProps {
  id: number;
  title: string;
  route: string;
}

export const Navbar = () => {
  const [option, setOption] = useState<OptionProps[]>([
    {
      id: 0,
      title: "Sobre",
      route: "/about",
    },
    {
      id: 1,
      title: "Personagem",
      route: "/character",
    },
    {
      id: 2,
      title: "Armas",
      route: "/weapons",
    },
    {
      id: 3,
      title: "Contato",
      route: "/contact",
    },
  ]);

  return (
    <div className="w-full h-12 flex justify-between items-center p-3 bg-purple-500 text-white dark:bg-purple-700">
      <p>Genshin Wiki</p>
      <div className="flex gap-2">
        {option.map(({ id, title, route }) => {
          return (
            <a
              key={id}
              href={route}
              className="bg-indigo-700 py-1 px-2 rounded-md transition-colors hover:bg-indigo-500"
            >
              {title}
            </a>
          );
        })}
      </div>
    </div>
  );
};
