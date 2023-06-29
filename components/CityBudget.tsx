import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(...registerables);

interface setCityBudget {
  cityBudget: any;
}

function CityBudget(props: setCityBudget) {

  var data = {
    labels: props.cityBudget.map((x: any) => x.department),
    datasets: [
      {
        label: "City of LA 2023 Budget",
        data: props.cityBudget.map((x: any) => x.totalBudget),
        backgroundColor: [
          "rgba(245, 233, 66, 0.8)",
          "rgb(255, 255, 255)",
          "rgba(253, 224, 71, 0.8)",
          "rgba(45, 212, 191, 0.8)",
          "rgba(125, 211, 252, 0.8)",
          "rgba(65, 255, 202, 0.8)",
          // "rgba(22, 163, 74, 0.7)",
          // "rgba(37, 99, 235, 0.7)",
          // "rgba(88, 24, 199, 0.7)",
        ],
        borderColor: [
          "#f5e942",
          "rgb(255, 255, 255)",
          "#fde047",
          "#2dd4bf",
          "#7dd3fc",
          "#41ffca",
          // "#16a34a",
          // "#2563eb",
          // "rgba(88, 24, 199, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    plugins: {
      legend: {
        display: false,
        color: "rgba(0, 0, 0, 1)",
        labels: {
          font: {
            weight: "bold",
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="mt-6">
      <h3 className="mb-2">City of LA Budget 2023</h3>
      <Pie data={data} height={400} options={options} />
    </div>
  );
}

export default CityBudget;
