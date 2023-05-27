import { Link, Outlet, useParams } from "react-router-dom";
import { FlexColumn, FlexLi, FlexUl } from "../components/FlexLayouts";
import { StyledHeading } from "../components/StyledTexts";
import Card from "../components/Card";
import { Album } from "../lib/types";
import { useGetTopAlbumsForArtistQuery } from "../lib/reducers";

function ArtistDetails() {
  const { artist } = useParams();
  const { data } = useGetTopAlbumsForArtistQuery(artist);
  if (data) {
    const albums = data.albums.slice();
    return (
      <FlexColumn>
        <StyledHeading>{data?.artist}</StyledHeading>
        <StyledHeading>Top Albums</StyledHeading>
        <FlexUl>
          {albums
            .sort((album1: Album, album2: Album) =>
              album1.name.localeCompare(album2.name)
            )
            .filter((album: Album) => album.name.indexOf("null") === -1)
            .map((album: Album) => {
              return (
                <FlexLi key={album.name}>
                  <Link to={`/${artist}/album/${album.name}`}>
                    <Card title={album.name} image={album.image} />
                  </Link>
                </FlexLi>
              );
            })}
        </FlexUl>
        <Outlet />
      </FlexColumn>
    );
  }
  return null;
}

export default ArtistDetails;
