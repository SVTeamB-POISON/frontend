import { DetailData } from "@/types/detail";
import { ResultData } from "./../types/result";
import { EncyData, EncyResponse } from "@/types/ency";
import { rest } from "msw";
import { Rank } from "@/types/rank";
const dummy = "테스트입니다.";
const result: ResultData[] = [
  {
    name: "할미꽃",
    s3_url:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_58F053194EB94368129687F3BDBF8D86.jpg",
    poison: true,
    symptom: "물집, 질식, 호흡곤란 등", // poision이 true면 있고 false면 없음
    scientific_name: "Pulsatilla koreana",
    flower_language:
      "공경, 충성, 사랑의 배신, 슬픈 추억공경, 충성, 사랑의 배신, 슬픈 추억공경, 충성, 사랑의 배신, 슬픈 추억공경, 충성, 사랑의 배신, 슬픈 추억",
    acc: 94.5,
  },
  {
    name: "둥굴레",
    s3_url: "http://www.hortitimes.com/news/photo/first/201705/img_6971_1.jpg",
    poison: false,
    symptom: null,
    scientific_name: "Polygonatum odoratum var. pluriflorum",
    flower_language: "고귀한 희생",
    acc: 3.5,
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

const encySearch: EncyResponse = {
  hasNextPage: true,
  hasPrevPage: false,
  nextPage: null,
  prevPage: null,
  data: [
    {
      name: "무궁화",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/ec77f951-52e6-49fb-ae3f-b7f312ca0e14",
      poison: false,
    },
    {
      name: "고사리",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/81584ad5-9a27-4173-abb8-27ab77caa387",
      poison: true,
    },
  ],
};
const encyPage1: EncyResponse = {
  hasNextPage: true,
  hasPrevPage: false,
  nextPage: "/flowers?page=2",
  prevPage: null,
  data: [
    {
      name: "개나리",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/ec77f951-52e6-49fb-ae3f-b7f312ca0e14",
      poison: false,
    },
    {
      name: "국화",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/81584ad5-9a27-4173-abb8-27ab77caa387",
      poison: true,
    },
    {
      name: "데이지",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/9d514828-d5a1-43c6-9f70-405eed7565f0",
      poison: false,
    },
    {
      name: "독당근",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/454c9693-a8b4-4e08-bbe2-213f2bef09b0",
      poison: true,
    },
    {
      name: "독말풀",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/31ff2ee8-5d97-4045-97c4-39e46339bc38",
      poison: true,
    },
    {
      name: "민들래",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/65cd70f5-2ef0-45cc-a1cf-67c2be67f37f",
      poison: false,
    },
  ],
};
const encyPage2: EncyResponse = {
  hasNextPage: true,
  hasPrevPage: true,
  nextPage: "/flowers?page=3",
  prevPage: "/flowers?page=1",
  data: [
    {
      name: "수국",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/4432eed2-4ae8-42e5-a0a1-8b64df186b01",
      poison: true,
    },
    {
      name: "장미",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/9baacd40-d17f-404b-8029-fff7bbe2c808",
      poison: false,
    },
    {
      name: "진달래",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/78b245a4-947b-48fb-96ff-c9bcf60bc8be",
      poison: false,
    },
    {
      name: "투구꽃",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/cf333676-b98a-4543-8ba1-48f57be57d01",
      poison: true,
    },
    {
      name: "튤립",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/8d114fbf-efcb-45ba-8e3b-9ac74ea06833",
      poison: false,
    },
    {
      name: "해바라기",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/5cc8dab0-c801-4a9a-9de6-ca91a25e1415",
      poison: false,
    },
  ],
};
const encyPage3: EncyResponse = {
  hasNextPage: false,
  hasPrevPage: true,
  nextPage: null,
  prevPage: "/flowers?page=2",
  data: [
    {
      name: "해바라기",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/5cc8dab0-c801-4a9a-9de6-ca91a25e1415",
      poison: false,
    },
    {
      name: "협죽도",
      s3_url:
        "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/4adff758-1c40-4ca0-ba4c-868c0c29f84a",
      poison: true,
    },
  ],
};

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
  {
    id: 6,
    name: "데이지",
    s3_url:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_58F053194EB94368129687F3BDBF8D86.jpg",
    poison: false,
    scientific_name: "Hydrangea macrophylla",
    flower_language: "진심, 변덕, 소녀의 꿈",
    detail:
      "수국은 수국과의 갈잎떨기나무이며, 초 여름에서 무더운 여름 중순까지 피는 꽃이다.\n 본래는 중국 원산이지만, 현재 중국에서는 자생군락이 발견되지 않으며, 일본에서 품종 개량이 많이 되었다. 만화경, 미카의 물떼새 등 특이한 이름으로 판매 중.\n 시중에서 파는 수국보다 꽤 비싸지만 정말 풍성하고 아름다운 꽃이 피어 일본 수국은 항상 인기가 많다.",
  },
];

const rank: Rank[] = [
  {
    name: "협죽도",
    s3_url:
      "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/4adff758-1c40-4ca0-ba4c-868c0c29f84a",
    poison: true,
    count: 10,
  },
  {
    name: "민들레",
    s3_url:
      "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/65cd70f5-2ef0-45cc-a1cf-67c2be67f37f",
    poison: false,
    count: 3,
  },
  {
    name: "독당근",
    s3_url:
      "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/454c9693-a8b4-4e08-bbe2-213f2bef09b0",
    poison: true,
    count: 30,
  },
  {
    name: "튤립",
    s3_url:
      "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/8d114fbf-efcb-45ba-8e3b-9ac74ea06833",
    poison: false,
    count: 20,
  },
  {
    name: "튤립",
    s3_url:
      "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/8d114fbf-efcb-45ba-8e3b-9ac74ea06833",
    poison: false,
    count: 20,
  },
  {
    name: "장미",
    s3_url:
      "https://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/9baacd40-d17f-404b-8029-fff7bbe2c808",
    poison: false,
    count: 230,
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
  rest.post("/api/flowers/image", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(2000), ctx.json(result));
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
    return res(ctx.status(200), ctx.delay(1000), ctx.json(data[0]));
  }),
  rest.get("/api/flowers", (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const name = req.url.searchParams.get("name");
    if (name && name !== "") {
      return res(ctx.status(200), ctx.delay(500), ctx.json(encySearch));
    } else if (!name && (page === "1" || page === null)) {
      return res(ctx.status(200), ctx.delay(500), ctx.json(encyPage1));
    } else if (!name && page === "2") {
      return res(ctx.status(200), ctx.delay(500), ctx.json(encyPage2));
    } else if (!name && page === "3") {
      return res(ctx.status(200), ctx.delay(500), ctx.json(encyPage3));
    }
  }),
  rest.get("/api/flowers/hour-ranking", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(rank));
  }),
];
