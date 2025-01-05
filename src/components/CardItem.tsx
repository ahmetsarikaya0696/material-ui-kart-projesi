import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardItemProps } from "../types/Types";

export default function CardItem({ info }: CardItemProps) {
  const { image, title, content } = info;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
