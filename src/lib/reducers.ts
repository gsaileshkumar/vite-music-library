import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const lastFmSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_LAST_FM_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTopArtists: builder.query({
      query: () => ({
        url: "",
        params: {
          format: "json",
          api_key: import.meta.env.VITE_LAST_FM_API_KEY,
          limit: 10,
          method: "chart.gettopartists",
        },
      }),
      transformResponse: (resp: any) => {
        return {
          artists: resp.artists.artist.map((artist: any) => {
            const { name, image } = artist;
            return { name, image: image[2]["#text"] };
          }),
        };
      },
    }),
    getTopAlbumsForArtist: builder.query({
      query: (artist?: string) => ({
        url: "",
        params: {
          format: "json",
          api_key: import.meta.env.VITE_LAST_FM_API_KEY,
          artist,
          method: "artist.gettopalbums",
        },
      }),
      transformResponse: (resp: any) => {
        return {
          artist: resp["topalbums"]["@attr"]["artist"],
          albums: resp["topalbums"]["album"].map((album: any) => {
            return {
              name: album.name,
              image: album.image[2]["#text"],
            };
          }),
        };
      },
    }),
    getAlbumInfo: builder.query({
      query: ({ artist, album }: { artist?: string; album?: string }) => ({
        url: "",
        params: {
          format: "json",
          api_key: import.meta.env.VITE_LAST_FM_API_KEY,
          artist,
          album,
          method: "album.getinfo",
        },
      }),
      transformResponse: (resp: any) => {
        const tracks = Array.isArray(resp?.album?.tracks?.track)
          ? resp?.album?.tracks?.track?.map((track: any) => {
              return {
                name: track.name,
              };
            })
          : [];
        return {
          artist: resp.album.artist,
          name: resp.album.name,
          playCount: resp.album.playcount,
          image: resp.album.image[2]["#text"],
          tracks,
        };
      },
    }),
  }),
});

export const {
  useGetTopArtistsQuery,
  useGetTopAlbumsForArtistQuery,
  useGetAlbumInfoQuery,
} = lastFmSlice;
