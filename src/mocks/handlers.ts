import { EncyData } from "@/types/ency";
import { rest } from "msw";
const dummy = "테스트입니다.";
const encylist: EncyData[] = [
  {
    name: "할미꽃",
    s3_url:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_58F053194EB94368129687F3BDBF8D86.jpg",
    poison: true,
  },
  {
    name: "둥굴레",
    s3_url: "http://www.hortitimes.com/news/photo/first/201705/img_6971_1.jpg",
    poison: false,
  },
  {
    name: "데이지",
    s3_url:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_58F053194EB94368129687F3BDBF8D86.jpg",
    poison: false,
  },
];

export const handlers = [
  // 테스트 mock api
  rest.get("/test", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummy));
  }),
  rest.get("/flowers", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(encylist));
  }),
];
