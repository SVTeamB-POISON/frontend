import { DetailData } from "@/types/detail";
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

const detail: DetailData[] = [
  {
    id: 5,
    name: "수국",
    s3_url:
      "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/4432eed2-4ae8-42e5-a0a1-8b64df186b01",
    poison: true,
    symptom: "호흡곤란, 저혈압",
    scientific_name: "Hydrangea macrophylla",
    flower_language: "진심, 변덕, 소녀의 꿈",
    detail:
      "수국은 수국과의 갈잎떨기나무이며, 초 여름에서 무더운 여름 중순까지 피는 꽃이다.\n 본래는 중국 원산이지만, 현재 중국에서는 자생군락이 발견되지 않으며, 일본에서 품종 개량이 많이 되었다. 만화경, 미카의 물떼새 등 특이한 이름으로 판매 중.\n 시중에서 파는 수국보다 꽤 비싸지만 정말 풍성하고 아름다운 꽃이 피어 일본 수국은 항상 인기가 많다.",
  },
  {
    id: 5,
    name: "할미꽃",
    s3_url:
      "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/4432eed2-4ae8-42e5-a0a1-8b64df186b01",
    poison: true,
    symptom: "호흡곤란, 저혈압",
    scientific_name: "Hydrangea macrophylla",
    flower_language: "진심, 변덕, 소녀의 꿈",
    detail:
      "수국은 수국과의 갈잎떨기나무이며, 초 여름에서 무더운 여름 중순까지 피는 꽃이다.\n 본래는 중국 원산이지만, 현재 중국에서는 자생군락이 발견되지 않으며, 일본에서 품종 개량이 많이 되었다. 만화경, 미카의 물떼새 등 특이한 이름으로 판매 중.\n 시중에서 파는 수국보다 꽤 비싸지만 정말 풍성하고 아름다운 꽃이 피어 일본 수국은 항상 인기가 많다.",
  },
  {
    id: 5,
    name: "둥굴레",
    s3_url:
      "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/4432eed2-4ae8-42e5-a0a1-8b64df186b01",
    poison: true,
    symptom: "호흡곤란, 저혈압",
    scientific_name: "Hydrangea macrophylla",
    flower_language: "진심, 변덕, 소녀의 꿈",
    detail:
      "수국은 수국과의 갈잎떨기나무이며, 초 여름에서 무더운 여름 중순까지 피는 꽃이다.\n 본래는 중국 원산이지만, 현재 중국에서는 자생군락이 발견되지 않으며, 일본에서 품종 개량이 많이 되었다. 만화경, 미카의 물떼새 등 특이한 이름으로 판매 중.\n 시중에서 파는 수국보다 꽤 비싸지만 정말 풍성하고 아름다운 꽃이 피어 일본 수국은 항상 인기가 많다.",
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
  rest.get("/api/flowers/details", (req, res, ctx) => {
    const name = req.url.searchParams.get("name"); // QueryParameter로 name 추출
    const data = detail.filter((item) => item.name === name);
    if (data.length === 0) {
      return res(
        ctx.status(404),
        ctx.json({
          message: "데이터가 없습니다.",
        }),
      );
    }
    return res(ctx.status(200), ctx.json(data[0]));
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
