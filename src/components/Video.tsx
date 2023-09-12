import { styled } from 'styled-components';

export const IFrame = styled.iframe`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

type VideoProps = {
  id: string;
  title: string;
  width: number | string;
  height: number | string;
  autoplay?: boolean;
};

export const Video = ({
  id,
  title,
  width,
  height,
  autoplay = false,
}: VideoProps) => {
  const params = autoplay ? '?autoplay=1' : '';

  return (
    <IFrame
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${id}${params}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};
