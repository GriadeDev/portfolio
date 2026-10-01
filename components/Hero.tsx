type HeroProps = {
    name: string;
    title: string;
}


export default function Hero({name,title}: HeroProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">{name}</h1>
      <h2>{title}</h2>
    </section>
  );
}
