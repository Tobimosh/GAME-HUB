import { Game } from "../hooks/useGames";
import { Card, Image, Heading, CardBody, Text } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIcon platforms={game.parent_platforms.map(p => p.platform)}/>
      </CardBody>
    </Card>
  );
};
