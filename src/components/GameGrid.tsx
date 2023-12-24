import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import useGameQueryStore from "../store/useGenreStore";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";



const GameGrid = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  const fetchedGamesCount = data?.pages.reduce((total, page) => total += page.results.length, 0) || 0
  return (
    <Box padding="10px">
        <InfiniteScroll
        dataLength={fetchedGamesCount} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Spinner/>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />{" "}
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      </InfiniteScroll>
 
    
     
    </Box>
  );
};

export default GameGrid;
