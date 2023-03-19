interface CreatorProps {
  id: number;
  name: string;
  icon: string;
  linkedin: string;
  github: string;
}

export const Creator0 = (props: CreatorProps) => {
  return (
    <div key={props.id} className="relative border rounded-md p-2 h-fit dark:text-white flex flex-col justify-center gap-1">
      <img src={props.icon} className="w-[150px] h-[150px] rounded-md"/>
      <p className="text-center">{props.name}</p>
      <div className="flex justify-between gap-2">
        <a href={props.linkedin} className="text-white px-2 py-1 rounded-md bg-blue-600 transition-colors hover:bg-blue-500">LinkedIn</a>
        <a href={props.github} className="text-white px-2 py-1 rounded-md bg-gray-600 transition-colors hover:bg-gray-500">GitHub</a>
      </div>
    </div>
  );
};
