import demo from "../images/demo.jpg";
import {
  PieChart,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Sector,
  Cell,
} from "recharts";
const data01 = [
  { name: " Mechanical Engineering", value: 23, fill: "#003399" },
  { name: "Civil Engineering", value: 20, fill: "#015100" },
  { name: "Computer Science and Engineering", value: 86, fill: "#FF6600" },
  { name: "Electrical Engineering", value: 62, fill: "#CE65DF" },
  // { name: 'Group E', value: 278, fill:'#AFCA54'},
  // { name: 'Group F', value: 189, fill:'#CE65DF'},
];
const data02 = [
  { name: " Mechanical Engineering", value: 25, fill: "#003399" },
  { name: "Civil Engineering", value: 21, fill: "#015100" },
  { name: "Computer Science and Engineering", value: 92, fill: "#FF6600" },
  { name: "Electrical Engineering", value: 51, fill: "#CE65DF" },
  { name: "Engineering Physics", value: 19, fill: "#990132" },
  { name: "Data Science and Engineering", value: 36, fill: "#7F7F7F" },
  { name: "Bio Engineering", value: 18, fill: "#FDCD00" },
];
export const Demo = (props) => {
  return (
    // <div className="acadmic container demo blue">
    //   <h2 className="homehead">Student Demographics</h2>
    //   <img src={demo} className="demoimg" alt="Demographics" />
    // </div>
    <div className="Pie">
      <h3 className="h3">
        <center>Student Demographics</center>
      </h3>
      <h3 className="h3">
        <center>Number of Students in Each Stream</center>
      </h3>
      <center>
        <PieChart
          width={1000}
          height={400}
          margin={{ top: 0, right: 10, left: 250, bottom: 0 }}
        >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#fff"
            label
          ></Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </center>
      {/* <PieChart
            width={1000}
            height={400}
            margin={{ top: 0, right: 10, left: -75, bottom: 0 }}
          >
          </PieChart> */}
      <br />
      <center>
        <PieChart
          width={1000}
          height={500}
          margin={{ top: 0, right: 10, left: 250, bottom: 0 }}
        >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data02}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#fff"
            label
          ></Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </center>
      <br />
    </div>
  );
};
