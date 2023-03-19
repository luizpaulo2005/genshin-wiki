interface CharacterProps {
  id: number;
  name: string;
  image_local: string;
}

export const Card2 = (props: CharacterProps) => {
  return (
    <div className="flex h-[300px] sm:w-full md:w-1/2 relative text-white" key={props.id}>
      <img className="w-full h-full" src={props.image_local} alt={props.name} />
      <p className="absolute bottom-2 left-2 text-2xl">{props.name}</p>
    </div>
  );
};
