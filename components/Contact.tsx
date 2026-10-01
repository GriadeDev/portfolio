import Slide from "@/components/Slide";

type ContactProps = {
    title: string;
}

export default function Contact({title}: ContactProps) {
  return (
    <Slide>
      <h2>{title}</h2>
    </Slide>
  );
}
