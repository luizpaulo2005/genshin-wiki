interface CharacterProps {
    id: number;
    name: string;
    image_local: string;
}

export const Card4 = (props: CharacterProps) => {
    return (
        <div className="flex h-[300px] sm:w-full md:w-1/2" key={props.id}>
          <img src={props.image_local} alt={props.name} />
          <p>{props.name}</p>
        </div>
    )
}