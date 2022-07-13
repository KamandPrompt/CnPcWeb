// import demo from "../images/demo.jpg";
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
  Label,
} from "recharts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-elastic-carousel";
// import styled from "styled-components";
import Item from "./Item";
import { useEffect, useState } from "react";
const data00 = [
  { name: " Mechanical Engineering", value: 29, fill: "#003399" },
  { name: "Civil Engineering", value: 25, fill: "#015100" },
  { name: "Computer Science and Engineering", value: 106, fill: "#FF6600" },
  { name: "Electrical Engineering", value: 67, fill: "#CE65DF" },
  { name: "Data Science and Engineering", value: 43, fill: "#AFCA54" },
  { name: "Engineering Physics", value: 20, fill: "#990132" },
  { name: "Bio-Engineering", value: 15, fill: "#ed1727" },
];
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
  { name: "Bio Engineering", value: 18, fill: "#ed1727" },
];
const data03 = [
  { name: "Bio Technology", value: 16, fill: "#003399" },
  { name: "STE", value: 13, fill: "#015100" },
  { name: "PED", value: 16, fill: "#FF6600" },
  { name: "CSP", value: 3, fill: "#CE65DF" },
  { name: "MES", value: 10, fill: "#990132" },
  { name: "VLSI", value: 14, fill: "#7F7F7F" },
  { name: "EEM", value: 12, fill: "#ed1727" },
];
const data07 = [
  { name: "Bio Technology", value: 18, fill: "#003399" },
  { name: "STE", value: 10, fill: "#115408" },
  { name: "FTE", value: 4, fill: "#715501" },
  { name: "CSE", value: 11, fill: "#445170" },
  { name: "PED", value: 12, fill: "#FF6600" },
  { name: "CSP", value: 17, fill: "#CE65DF" },
  { name: "MES", value: 10, fill: "#990132" },
  { name: "VLSI", value: 16, fill: "#7F7F7F" },
  { name: "MEE", value: 17, fill: "#ed1727" },
];
const data04 = [
  { name: "Chemistry", value: 48, fill: "#003399" },
  { name: "Physics", value: 36, fill: "#015100" },
  { name: "Maths", value: 45, fill: "#FF6600" },
  // { name: "CSP", value: 3, fill: "#CE65DF" },
  // { name: "MES", value: 10, fill: "#990132" },
  // { name: "VLSI", value: 14, fill: "#7F7F7F" },
  // { name: "MS", value: 62, fill: "#ed1727" },
];
const data05 = [{ name: "MA", value: 13, fill: "#ed1727" }];
const data06 = [
  { name: "Chemistry", value: 42, fill: "#003399" },
  { name: "Physics", value: 27, fill: "#7F7F7F" },
  { name: "Applied Maths", value: 34, fill: "#ed1727" },
];
export const Demo = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <div className="acadmic container demo blue">
    //   <h2 className="homehead">Student Demographics</h2>
    //   <img src={demo} className="demoimg" alt="Demographics" />
    // </div>
    <div id="demographics" className="Pie">
      <div>
        <hr className="left-lg" />
        <h3 className="homeHead homeHead-lg">Student Demographics</h3>
        <hr className="right-lg" />
      </div>
      {/* <h3 className="h3">
        <center>Number of Students in Each Stream</center>
      </h3> */}
      <div className="homeSlider2">
        <Slider {...settings}>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{ fontSize: "15px" }}>B.Tech(2018-2022)</h3>
              <center>
                <PieChart
                  width={450}
                  height={300}
                  margin={{ top: 0, right: 0, left: 10, bottom: 0 }}
                >
                  {width > 640 ? (
                    <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data00}
                    cx={100}
                    cy={160}
                    outerRadius={75}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  ) : (
                    
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data00}
                    cx={230}
                    cy={130}
                    outerRadius={80}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  )}
                  <Tooltip />
                  {width > 640 ? (
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                    />
                  ) : (
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="left"
                    />
                  )}
                </PieChart>
              </center>
            </div>
          </div>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{ fontSize: "15px" }}>B.Tech(2019-2023)</h3>
              <center>
                <PieChart
                  width={450}
                  height={300}
                  margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
                >
                  {width > 640 ? (
                    <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data01}
                    cx={100}
                    cy={160}
                    outerRadius={75}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  ) : (
                    
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data01}
                    cx={230}
                    cy={110}
                    outerRadius={80}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  )}
                  <Tooltip />
                  {width > 640 ? (
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                    />
                  ) : (
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="left"
                    />
                  )}
                </PieChart>
              </center>
            </div>
          </div>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{ fontSize: "15px" }}>B.Tech(2020-2024)</h3>
              <center>
                <PieChart
                  width={450}
                  height={300}
                  margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
                >
                  {width > 640 ? (
                    <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data02}
                    cx={90}
                    cy={160}
                    outerRadius={75}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  ) : (
                    
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data02}
                    cx={230}
                    cy={130}
                    outerRadius={80}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  )}
                  <Tooltip />
                  {width > 640 ? (
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                    />
                  ) : (
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="left"
                    />
                  )}
                </PieChart>
              </center>
            </div>
          </div>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{ fontSize: "15px" }}>M.Tech(2021-2023)</h3>
              <center>
                <PieChart
                  width={450}
                  height={300}
                  margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
                >
                  {width > 640 ? (
                    <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data03}
                    cx={140}
                    cy={160}
                    outerRadius={75}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  ) : (
                    
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data03}
                    cx={230}
                    cy={130}
                    outerRadius={80}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  )}
                  <Tooltip />
                  {width > 640 ? (
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                    />
                  ) : (
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="left"
                    />
                  )}
                </PieChart>
              </center>
            </div>
          </div>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{ fontSize: "15px" }}>M.Tech (2018-2022)</h3>
              <center>
                <PieChart
                  width={450}
                  height={300}
                  margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
                >
                  {width > 640 ? (
                    <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data04}
                    cx={150}
                    cy={160}
                    outerRadius={75}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  ) : (
                    
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data04}
                    cx={230}
                    cy={130}
                    outerRadius={80}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  )}
                  <Tooltip />
                  {width > 640 ? (
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                    />
                  ) : (
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="left"
                    />
                  )}
                </PieChart>
              </center>
            </div>
          </div>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{ fontSize: "15px" }}>M.Sc.(2021-2023)</h3>
              <center>
                <PieChart
                  width={450}
                  height={300}
                  margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
                >
                  {width > 640 ? (
                    <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data05}
                    cx={150}
                    cy={160}
                    outerRadius={75}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  ) : (
                    
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data05}
                    cx={230}
                    cy={130}
                    outerRadius={80}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  )}
                  <Tooltip />
                  {width > 640 ? (
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                    />
                  ) : (
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="left"
                    />
                  )}
                </PieChart>
              </center>
            </div>
          </div>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{ fontSize: "15px" }}>MA(2021-2023)</h3>
              <center>
                <PieChart
                  width={450}
                  height={300}
                  margin={{ top: 0, right: 0, left: 10, bottom: 0 }}
                >
                  {width > 640 ? (
                    <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data06}
                    cx={160}
                    cy={160}
                    outerRadius={75}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  ) : (
                    
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data06}
                    cx={230}
                    cy={130}
                    outerRadius={80}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  )}
                  <Tooltip />
                  {width > 640 ? (
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                    />
                  ) : (
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="left"
                    />
                  )}
                </PieChart>
              </center>
            </div>
          </div>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{ fontSize: "15px" }}>MSc</h3>
              <center>
                <PieChart
                  width={450}
                  height={300}
                  margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
                >
                  {width > 640 ? (
                    <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data07}
                    cx={160}
                    cy={160}
                    outerRadius={75}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  ) : (
                    
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data07}
                    cx={230}
                    cy={130}
                    outerRadius={80}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  )}
                  <Tooltip />
                  {width > 640 ? (
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                    />
                  ) : (
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="left"
                    />
                  )}
                </PieChart>
              </center>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
