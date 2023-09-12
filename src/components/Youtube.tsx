import styled from 'styled-components';
import { Video } from './Video';
import { VideoWithPoster } from './VideoWithPoster';

const Container = styled.div<{ aspectRatio: number }>`
  display: flex;
  height: 0;
  position: relative;
  width: 100%;
  padding-bottom: ${({ aspectRatio }) => `${100 / aspectRatio}%`};
`;

type Props = {
  id: string;
  title: string;
  width: number | string;
  height: number | string;
  autoplay?: boolean;
  poster?: string;
};

const YoutubeEmbed = ({
  id,
  title,
  width,
  height,
  poster,
  autoplay = false,
}: Props) => {
  const aspectRatio = parseFloat(`${width}`) / parseFloat(`${height}`);

  return (
    <Container aspectRatio={aspectRatio}>
      {poster ? (
        <VideoWithPoster
          id={id}
          width={width}
          height={height}
          title={title}
          poster={poster}
        />
      ) : (
        <Video
          id={id}
          width={width}
          height={height}
          title={title}
          autoplay={autoplay}
        />
      )}
    </Container>
  );
};

export default YoutubeEmbed;
