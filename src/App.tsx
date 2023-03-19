import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Card0 } from "./components/cards/card0";
import { Card1 } from "./components/cards/card1";
import { Card2 } from "./components/cards/card2";
import { Card3 } from "./components/cards/card3";
import { Card4 } from "./components/cards/card4";
import { Card5 } from "./components/cards/card5";
import { Creator0 } from "./components/creators/creator0";
import { Card6 } from "./components/cards/card6";
import { Card7 } from "./components/cards/card7";
import { Card8 } from "./components/cards/card8";
import { Card9 } from "./components/cards/card9";
import { Footer } from "./components/footer";

interface Character {
  id: number;
  name: string;
  image_local: string;
}

interface Creator {
  id: number;
  name: string;
  icon: string;
  linkedin: string;
  github: string;
}

export const App = () => {
  const [characters, setCharacters] = useState<Character[]>([
    {
      id: 0,
      name: "Kamisato Ayaka",
      image_local: "/characters/ayaka.png",
    },
    {
      id: 1,
      name: "Yae Miko",
      image_local: "/characters/yaeMiko.jpg",
    },
    {
      id: 2,
      name: "Ganyu",
      image_local: "/characters/ganyu.png",
    },
    {
      id: 3,
      name: "Raiden Shogun",
      image_local: "/characters/raiden.jpg",
    },
    {
      id: 4,
      name: "Yelan",
      image_local: "/characters/yelan.png",
    },
    {
      id: 5,
      name: "Keqing",
      image_local: "/characters/keqing.png",
    },
    {
      id: 6,
      name: "Sangonomiya Kokomi",
      image_local: "/characters/sangonomiya.jpg",
    },
    {
      id: 7,
      name: "Mona",
      image_local: "/characters/mona.png",
    },
  ]);

  const [creators, setCreators] = useState([
    {
      id: 0,
      name: "Luiz Paulo",
      icon: "/creatorIcon/creator0.jpeg",
      linkedin: "https://www.linkedin.com/in/luiz-paulo-rodrigues-da-silva-santos-bab0b4247/",
      github: "https://github.com/luizpaulo2005",
    }
  ]);

  return (
    <div className="w-screen min-h-screen dark:bg-gray-800 dark:text-white overflow-hidden m-0">
      <Navbar />
      <div className="flex flex-col justify-center">
        <div className="w-full py-3 px-2 text-center flex flex-col justify-center items-center bg-purple-500 dark:bg-purple-700">
          <span className="text-3xl font-semibold text-white">
            Conheça aqui os detalhes mais interessantes do jogo.
          </span>
          <img src="/paimon.webp" className="py-2" />
        </div>

        <div className="flex flex-row flex-wrap">
          <Card0 />
          <Card1
            id={characters[0].id}
            name={characters[0].name}
            image_local={characters[0].image_local}
          />
        </div>

        <div className="flex flex-row flex-wrap">
          <Card2
            id={characters[1].id}
            name={characters[1].name}
            image_local={characters[1].image_local}
          />
          <Card3 />
        </div>

        <div className="flex flex-row flex-wrap">
          <Card4
            id={characters[2].id}
            name={characters[2].name}
            image_local={characters[2].image_local}
          />
          <Card5
            id={characters[3].id}
            name={characters[3].name}
            image_local={characters[3].image_local}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center w-screen h-80 dark:bg-gray-800">
        <Creator0 id={creators[0].id} name={creators[0].name} icon={creators[0].icon} linkedin={creators[0].linkedin} github={creators[0].github}/>
      </div>

      <div className="flex flex-row flex-wrap">
        <Card6 
        id={characters[4].id}
        name={characters[4].name}
        image_local={characters[4].image_local}
        />
        <Card7 
        id={characters[5].id}
        name={characters[5].name}
        image_local={characters[5].image_local}
        />
        <Card8 
        id={characters[6].id}
        name={characters[6].name}
        image_local={characters[6].image_local}
        />
        <Card9 
        id={characters[7].id}
        name={characters[7].name}
        image_local={characters[7].image_local}
        />

      </div>

      <Footer/>

    </div>
  );
};
