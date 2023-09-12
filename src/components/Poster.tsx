import styled from 'styled-components';

const PosterWrapper = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const PlayButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 20%;
  margin: auto;
  padding: 0;
  width: 20%;

  & > img,
  & > svg {
    max-height: 100%;
    filter: drop-shadow(0px 50px 100px rgba(50, 50, 93, 0.25))
      drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.3));
  }
`;

type Props = {
  src: string;
  onClick: () => unknown;
};

export const Poster = ({ src, onClick }: Props) => {
  return (
    <PosterWrapper src={src}>
      <PlayButton onClick={onClick}>
        <svg
          aria-hidden="true"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
            fillRule="evenodd"
          ></path>
        </svg>
      </PlayButton>
    </PosterWrapper>
  );
};
