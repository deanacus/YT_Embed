import { useState } from 'react';
import { Video } from './Video';
import { Poster } from './Poster';

type VideoWithPosterProps = {
  id: string;
  title: string;
  width: number | string;
  height: number | string;
  poster: string;
};

export const VideoWithPoster = ({
  id,
  title,
  width,
  height,
  poster,
}: VideoWithPosterProps) => {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <Video id={id} width={width} height={height} title={title} autoplay />
    );
  }

  return <Poster src={poster} onClick={() => setActive(true)} />;
};
