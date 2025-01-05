import Angular from "../images/angular.jpg";
import Bootstrap5 from "../images/bootstrap5.png";
import CSharp from "../images/ccsharp.png";
import Kompleweb from "../images/kompleweb.jpg";
import { Container, Grid2 } from "@mui/material";
import CardItem from "./CardItem";
import { CardInfo } from "../types/Types";

const cards: CardInfo[] = [
  {
    id: Math.random(),
    image: Angular,
    title: "Angular",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veniam accusantium vitae doloribus? Explicabo asperiores dolorum architecto veritatis voluptas aspernatur maxime tempore molestiae a accusamus.",
  },
  {
    id: Math.random(),
    image: Bootstrap5,
    title: "Bootstrap5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veniam accusantium vitae doloribus? Explicabo asperiores dolorum architecto veritatis voluptas aspernatur maxime tempore molestiae a accusamus.",
  },
  {
    id: Math.random(),
    image: CSharp,
    title: "CSharp",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veniam accusantium vitae doloribus? Explicabo asperiores dolorum architecto veritatis voluptas aspernatur maxime tempore molestiae a accusamus.",
  },
  {
    id: Math.random(),
    image: Kompleweb,
    title: "Kompleweb",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veniam accusantium vitae doloribus? Explicabo asperiores dolorum architecto veritatis voluptas aspernatur maxime tempore molestiae a accusamus.",
  },
];

export default function CardList() {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid2 container spacing={2}>
        {cards.map((card) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={card.id}>
            <CardItem info={card} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
