import { SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'
import { Game } from '../entities/Game'
import CriticScore from './CriticScore';
import DefinitionTerm from './DefinitionTerm';

interface Props{
    game: Game
}

const GameAttributes = ({game}: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionTerm term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionTerm>
      <DefinitionTerm term="Metacritic">
        <CriticScore score={game.metacritic} />
      </DefinitionTerm>
      <DefinitionTerm term="Genres">
        {game.genre?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionTerm>

      <DefinitionTerm term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionTerm>
    </SimpleGrid>
  );
}

export default GameAttributes
