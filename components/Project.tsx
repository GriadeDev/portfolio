type ProjectProps = {
    title: string;
}


export default function Project({title}: ProjectProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h2>{title}</h2>
    </section>
  );
}
