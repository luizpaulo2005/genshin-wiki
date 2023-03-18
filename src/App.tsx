import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Card0 } from "./components/cards/card0";
import { Card1 } from "./components/cards/card1";
import { Card2 } from "./components/cards/card2";
import { Card3 } from "./components/cards/card3";
import { Card4 } from "./components/cards/card4";
import { Card5 } from "./components/cards/card5";

interface Character {
  id: number;
  name: string;
  image_local: string;
}

export const App = () => {
  const [characters, setCharacters] = useState<Character[]>([
    {
      id: 0,
      name: "Kamisato Ayaka",
      image_local: "/kamisato-ayaka.webp",
    },
    {
      id: 1,
      name: "Yae Miko",
      image_local: "/yae-miko.webp",
    },
    {
      id: 2,
      name: "Ganyu",
      image_local: "/ganyu.webp",
    },
    { id: 3, name: "Raiden Shogun", image_local: "/raiden-shogun.webp" },
    {
      id: 4,
      name: "Yelan",
      image_local: "/yelan.webp",
    },
    {
      id: 5,
      name: "Keqing",
      image_local: "/keqing.webp",
    },
    {
      id: 6,
      name: "Sangonomiya Kokomi",
      image_local: "/sangonomiya-kokomi.webp",
    },
    {
      id: 7,
      name: "Mona",
      image_local: "/mona.webp",
    },
  ]);

  return (
    <div className="w-screen min-h-screen dark:bg-gray-800 dark:text-white overflow-hidden m-0">
      <Navbar />
      <div className="flex flex-col justify-center">
        <div className="w-full py-3 px-2 text-center flex flex-col justify-center items-center bg-purple-600 dark:bg-purple-700">
          <span className="text-3xl font-semibold text-white">
            Conheça aqui os detalhes mais interessantes do jogo.
          </span>
          <img src="/paimon.webp" className="py-2" />
        </div>
        
        <div className="flex flex-row flex-wrap">
          <Card0/>
          <Card1 id={characters[0].id} name={characters[0].name} image_local={characters[0].image_local}/>
        </div>

        <div className="flex flex-row flex-wrap">
        <Card2 id={characters[1].id} name={characters[1].name} image_local={characters[1].image_local}/>
        <Card3/>
        </div>

        <div className="flex flex-row flex-wrap">
        <Card4 id={characters[2].id} name={characters[2].name} image_local={characters[2].image_local}/>
        <Card5 id={characters[3].id} name={characters[3].name} image_local={characters[3].image_local}/>
        </div>

      </div>
    </div>
  );
};
