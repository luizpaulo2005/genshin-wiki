interface CharacterProps {
  id: number;
  name: string;
  image_local: string;
}

export const Card7 = (props: CharacterProps) => {
  return (
    <div className="flex h-[300px] sm:w-full md:w-1/4 relative" key={props.id}>
      <img className="w-full h-full" src={props.image_local} alt={props.name} />
      <p className="absolute bottom-2 left-2 text-2xl rounded-md p-1 bg-gray-600 text-white">
        {props.name}
      </p>
    </div>
  );
};
