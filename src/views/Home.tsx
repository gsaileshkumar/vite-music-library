import { Link } from "react-router-dom";
import { FlexColumn, FlexLi, FlexUl } from "../components/FlexLayouts";
import { StyledHeading } from "../components/StyledTexts";
import Card from "../components/Card";
import { Artist } from "../lib/types";
import { useGetTopArtistsQuery } from "../lib/reducers";

function Home() {
  const { data } = useGetTopArtistsQuery({});
  return (
    <FlexColumn>
      <StyledHeading>Top 10 Artists</StyledHeading>
      <FlexUl>
        {data?.artists.map((artist: Artist) => {
          return (
            <FlexLi key={artist.name}>
              <Link to={`/${artist.name}`}>
                <Card title={artist.name} image={artist.image} />
              </Link>
            </FlexLi>
          );
        })}
      </FlexUl>
    </FlexColumn>
  );
}

export default Home;
