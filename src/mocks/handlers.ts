import { rest } from "msw";

const dummy = "테스트입니다.";

export const handlers = [
  // 테스트 mock api
  rest.get("/test", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummy));
  }),
];
