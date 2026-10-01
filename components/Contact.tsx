type ContactProps = {
    title: string;
}

export default function Contact({title}: ContactProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h2>{title}</h2>
    </section>
  );
}
