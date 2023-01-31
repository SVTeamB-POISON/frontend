import ApexCharts from "react-apexcharts";

type chartDataProp = {
  ranklabel: string[];
  rankdata: number[];
  chartnumber: number;
};
export default function PieChart({
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
      type="pie"
      height={"250em"}
      series={rankdata}
      options={{
        chart: {
          width: "100%",
          toolbar: {
            show: false,
          },
          background: "transparent",
          zoom: {
            enabled: false,
          },
        },

        // labels: { ranklabel: string[]},
        labels: ["a", "a", "a", "a", "a"],
        plotOptions: {
          pie: {
            expandOnClick: true,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opt) {
            return val + "%";
          },
        },

        title: {
          text: "검색랭킹",
          align: "center",
          style: {
            color: "#fff",
          },
        },
      }}
    />
  );
}
