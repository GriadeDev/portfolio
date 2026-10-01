import Slide from "@/components/Slide";

type HeroProps = {
    name: string;
    title: string;
}

export default function Hero({name,title}: HeroProps) {
  return (
    <Slide>
      <h1 className="text-4xl font-bold">{name}</h1>
      <p>{title}</p>
    </Slide>
  );
}
