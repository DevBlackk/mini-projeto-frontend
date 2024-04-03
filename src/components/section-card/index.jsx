import { CardArtist } from "../cardArtist";
import { CardMusic } from "../cardMusic";
import { CardUser } from "../cardUser";
import "./style.css";

export function SectionCard() {
  return (
    <section className="section-card">
      <CardArtist content="Artist" />
      <CardMusic content="Music" />
      <CardUser content="User" />
    </section>
  );
}
