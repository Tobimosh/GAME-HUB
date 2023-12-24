import { Heading } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'
import useGameQueryStore from '../store/useGenreStore'




const GameHeading = (
) => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data: genres } = useGenres();
  const { data: platforms} = usePlatforms();
  const platform = platforms?.results.find(p => p.id === platformId)
  const genre = genres?.results.find(g => g.id === genreId);
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading as='h1'marginY={5}>{heading}</Heading> 
  )
}

export default GameHeading