import ApexCharts from "react-apexcharts";

type chartDataProp = {
  ranklabel: string[];
  rankdata: number[];
  chartnumber: number;
};
export default function BarChart({
  ranklabel,
  rankdata,
  chartnumber,
}: chartDataProp) {
  const dataSet = [];
  for (let n in ranklabel) {
    dataSet.push({ x: ranklabel[n], y: rankdata[n] });
  }
  const graphType = chartnumber === 1 ? "bar" : "pie";
  return (
    <ApexCharts
      type={"bar"}
      height={"250"}
      series={[
        {
          name: "검색수",
          data: dataSet,
        },
      ]}
      options={{
        theme: {
          mode: "light",
        },
        chart: {
          toolbar: {
            show: false,
          },
          height: "100%",
          background: "transparent",
          zoom: {
            enabled: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            columnWidth: " 50",
            barHeight: "100%",
            distributed: true,
          },
        },
        dataLabels: {
          style: {
            colors: ["#fff"],
          },
        },
        xaxis: {
          categories: ranklabel,
          type: "category",
          labels: {
            style: {
              colors: "#fff",
            },
          },
          title: {
            text: "Flower",
            offsetY: 140,
            offsetX: -20,
            style: {
              color: "#fff",
            },
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val + "회";
            },
            style: {
              colors: "#fff",
            },
          },
          title: {
            text: "조회수",
            rotate: 0,
            offsetY: -100,
            offsetX: 25,
            style: {
              fontSize: "12",
              color: "#fff",
            },
          },
        },
        title: {
          text: "검색랭킹",
          align: "center",
          style: {
            color: "#fff",
          },
        },
        fill: {
          colors: [
            "#4ecdc4",
            "#c7f464",
            "#f9a3a4",
            "#f46036",
            "#00b1f2",
            "#13D8AA",
          ],
        },
        stroke: {
          curve: "smooth",
          width: 1,
        },
        legend: {
          labels: {
            colors: ["#fff"],
          },
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              yaxis: {
                labels: {
                  formatter: function (val: string) {
                    return val + "회";
                  },
                  style: {
                    colors: "#fff",
                  },
                },
                title: {
                  text: "조회수",
                  rotate: 0,
                  offsetY: -80,
                  offsetX: 25,
                  style: {
                    fontSize: "12",
                    color: "#fff",
                  },
                },
              },
              Xaxis: {
                title: {
                  text: "Flower",
                  offsetY: 85,
                  offsetX: -20,
                },
              },
            },
          },
        ],
      }}
    />
  );
}
