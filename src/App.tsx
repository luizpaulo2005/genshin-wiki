import { Navbar } from "./components/navbar"

export const App = () => {

  return (
    <div className="w-screen min-h-screen text-white">
      <Navbar/>
      <div className="flex">
        <div className="w-full py-3 px-2 text-center flex flex-col justify-center items-center bg-purple-600 dark:bg-purple-700">
          <span className="text-3xl font-semibold">Conheça aqui os detalhes mais interessantes do jogo.</span>
          <img src="/paimon.webp" className="py-2"/>
        </div>
      </div>
    </div>
  )
}