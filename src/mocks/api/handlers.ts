import { rest } from "msw";
import { topArtists } from "../data/topArtists";

export const handlers = [
  rest.get(import.meta.env.VITE_LAST_FM_API_BASE_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(topArtists), ctx.delay(30));
  }),
];
