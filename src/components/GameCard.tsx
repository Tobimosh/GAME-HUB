import { Game } from "../hooks/useGames";
import { Card, Image, Heading, CardBody } from "@chakra-ui/react";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
