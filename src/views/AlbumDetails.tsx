// import { useParams } from "react-router-dom";
import { FlexColumn, FlexLi, FlexUl } from "../components/FlexLayouts";
import { StyledHeading } from "../components/StyledTexts";
import { Track } from "../lib/types";
import { getImage } from "../lib/helper";
import styled from "styled-components";
import { useGetAlbumInfoQuery } from "../lib/reducers";
import { useParams } from "react-router-dom";

const Track = styled.p`
  width: 100%;
  font-style: italic;
  color: #334155;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
function AlbumDetails() {
  const { artist, album } = useParams();
  const { data, isLoading } = useGetAlbumInfoQuery({ artist, album });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (data) {
    return (
      <FlexColumn>
        <StyledHeading>{data.artist}</StyledHeading>
        <StyledHeading>{data.name}</StyledHeading>
        <img
          src={getImage(data.image)}
          alt={data.name}
          width={200}
          height={200}
        />
        <StyledHeading className="text-slate-700 font-bold">
          Album Play count: {data.playCount}
        </StyledHeading>
        <FlexUl>
          {data.tracks.map((track: Track) => {
            return (
              <FlexLi key={track.name}>
                <Track>{track.name}</Track>
              </FlexLi>
            );
          })}
        </FlexUl>
      </FlexColumn>
    );
  }
  return null;
}

export default AlbumDetails;
