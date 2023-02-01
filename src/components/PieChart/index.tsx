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
        colors: [
          "#67E09C",
          "#3E8DF3",
          "#F3B344",
          "#EB5564",
          "#735EC9",
          "#F2E416",
        ],
        plotOptions: {
          pie: {
            expandOnClick: true,
          },
        },
        labels: ranklabel,
        dataLabels: {
          enabled: true,
          formatter: function (val: string) {
            const value = parseInt(val);
            val = Math.round(value).toString();
            return val + "%";
          },
        },
        legend: {
          labels: {
            colors: ["#fff"],
          },
        },
        title: {
          text: "검색랭킹",
          align: "left",
          style: {
            color: "#fff",
          },
        },
      }}
    />
  );
}
