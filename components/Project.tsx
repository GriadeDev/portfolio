import Slide from "@/components/Slide";

type ProjectProps = {
    title: string;
}


export default function Project({title}: ProjectProps) {
  return (
    <Slide>
      <h2>{title}</h2>
    </Slide>
  );
}
