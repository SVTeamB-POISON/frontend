import { ResultData } from "./../types/result";
import { EncyData } from "@/types/ency";
import { parseMutationArgs } from "@tanstack/react-query";
import { rest } from "msw";
const dummy = "테스트입니다.";
const result: ResultData[] = [
  {
    name: "할미꽃",
    s3_url:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_58F053194EB94368129687F3BDBF8D86.jpg",
    poison: true,
    symptom: "물집, 질식, 호흡곤란 등", // poision이 true면 있고 false면 없음
    scientific_name: "Pulsatilla koreana",
    flower_language: "공경, 충성, 사랑의 배신, 슬픈 추억",
    acc: 94.5,
  },
  {
    name: "둥굴레",
    s3_url: "http://www.hortitimes.com/news/photo/first/201705/img_6971_1.jpg",
    poison: false,
    symptom: null,
    scientific_name: "Polygonatum odoratum var. pluriflorum",
    flower_language: "고귀한 희생",
    acc: 34.2,
  },
  {
    name: "데이지",
    s3_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellis_perennis_white_%28aka%29.jpg/800px-Bellis_perennis_white_%28aka%29.jpg",
    poison: false,
    symptom: null,
    scientific_name: "Bellis perennis",
    flower_language: "겸손함, 아름다움, 천진난만함",
    acc: 15.6,
  },
];
const encylist: EncyData[] = [
  {
    name: "둥미꽃",
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
  rest.get("/api/test", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummy));
  }),
  rest.get("/api/result", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(result));
  }),
  rest.get("/api/flowers", (req, res, ctx) => {
    const name = req.url.searchParams.get("name");
    const regex = new RegExp(`.*${name}.*`, "g");
    const R = encylist.filter((item) => item.name.match(regex));
    return res(ctx.status(200), ctx.json(R));
  }),
  rest.post("/api/flowers/image", async (req, res, ctx) => {
    const { id } = await req.json();
    return res(ctx.status(200), ctx.delay(2000), ctx.json(result));
  }),
];
