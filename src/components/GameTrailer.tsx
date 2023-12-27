import React from "react";
import useTrailers from "../hooks/useTrailer";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;

  if (data?.results[0])
    return (
      <video
        src={data.results[0]?.data[480]}
        poster={data.results[0].preview}
        controls
      ></video>
    );
    else{
        return null;
    }
};

export default GameTrailer;
