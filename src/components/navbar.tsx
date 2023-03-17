export const Navbar = () =>{
    return(
        <div className="w-full h-12 flex justify-between items-center p-2 bg-purple-500 text-white dark:bg-purple-700">
            <p>Genshin Wiki</p>
            <div className="flex gap-2">
            <button>Sobre</button>     
            <button>Personagem</button>     
            <button>Armas</button>     
            <button>Contato</button>     
            </div>
        </div>
    )
}