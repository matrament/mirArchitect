"use client";
import { useState, useEffect } from "react";
import { ReactECharts } from "./echarts/ReactECharts";
import { ReactEChartsProps } from "./echarts/ReactECharts";
import result from "../json/example_result_mirarchitect.json";

import { DotChartOutlined, LineChartOutlined } from "@ant-design/icons";
import { Divider, Row, Space, Switch, Tooltip } from "antd";
import { useMediaQuery } from "react-responsive";

type datasetModels = {
  [key: string]: string | number;
};

const Heatmap = (props: { dataHeatmap: any }) => {
  const [freeEnergy, setFreeEnergy] = useState<number[][]>([]);
  const [shannon, setShannon] = useState<number[][]>([]);
  const [structure, setStructure] = useState<string[]>([]);
  const [diffStructure, setDiffStructure] = useState<number[][]>([]);
  const [sequence, setSequence] = useState<string[]>([]);

  useEffect(() => {
    let tempEnergy: any = [];
    let tempShannon: any = [];
    let tempSequence: string =
      result.result.result[0].amiRNA.seq.head +
      result.result.result[0].amiRNA.seq.insert +
      result.result.result[0].amiRNA.seq.insertc +
      result.result.result[0].amiRNA.seq.middle +
      result.result.result[0].amiRNA.seq.tail;
    let tempDiffStructure: any = [];
    let tempNaturalStructure: string[] =
      result.result.result[0].amiRNA.natural_structure.split("");
    let tempStructure: string[] =
      result.result.result[0].amiRNA.structure.split("");
    tempEnergy = result.result.result[0].amiRNA.free_energy.map((el, index) => {
      return [
        index,
        1,
        el - result.result.result[0].amiRNA.natural_free_energy[index],
      ];
    });
    tempShannon = result.result.result[0].amiRNA.shannon.map((el, index) => {
      return [
        index,
        2,
        el - result.result.result[0].amiRNA.natural_shannon[index],
      ];
    });
    tempDiffStructure = tempStructure.map((el, index) => {
      return [index, 0, el === tempNaturalStructure[index] ? 0 : 1];
    });
    setDiffStructure(tempDiffStructure);
    setFreeEnergy(tempEnergy);
    setShannon(tempShannon);
    setStructure(tempStructure);
    setSequence(tempSequence.split(""));
  }, []);

  const type = [
    "Δ 2D Structure",
    "Δ Free Energy",
    "Δ Shannon entropy",
    "Sequence",
  ];

  const option: ReactEChartsProps["option"] = {
    tooltip: {
      position: "top",
    },
    toolbox: {
      itemSize: 30.5,
      feature: {
        dataView: { readOnly: false },
        saveAsImage: {
          excludeComponents: ["visualMap", "toolbox", "dataZoom"],
          name: `heatmap_?`,
          title: "",
          icon: "M 512.00001,0 A 512.00001,512.00001 0 0 0 0,512.00001 512.00001,512.00001 0 0 0 512.00001,1023.9999 512.00001,512.00001 0 0 0 1024,512.00001 512.00001,512.00001 0 0 0 512.00001,0 Z m -12.20857,284.26285 h 35.20286 c 2.58136,0 4.69428,2.06417 4.69428,4.58857 v 194.15143 h 43.47428 c 3.93096,0 6.10268,4.41662 3.69716,7.4 L 521.14859,571.7 a 4.6936599,4.5898295 0 0 1 -7.3943,0 l -65.71142,-81.35427 c -2.40552,-2.9834 -0.23384,-7.40002 3.69714,-7.40002 h 43.35714 V 288.85143 c 0,-2.52441 2.11276,-4.58857 4.69429,-4.58858 z M 302.71715,551.61999 h 35.20286 c 2.58153,0 4.69428,2.0642 4.69428,4.58859 v 88.35429 h 349.67429 v -88.35429 c 0,-2.52438 2.11277,-4.58859 4.69428,-4.58859 h 35.20287 c 2.58138,0 4.69428,2.0642 4.69428,4.58859 v 113.6 c 0,10.15498 -8.3895,18.35998 -18.77428,18.35998 H 316.79715 c -10.38479,0 -18.77429,-8.20502 -18.77429,-18.35998 v -113.6 c 0,-2.52438 2.11276,-4.58859 4.69429,-4.58859 z",
          iconStyle: {
            color: "#00faab",
            borderColor: "#fff",
            borderWidth: 0.2,
          },
          emphasis: {
            iconStyle: {
              color: "#29ffb4",
              borderColor: "#fff",
              borderWidth: 0.2,
            },
          },
        },
      },
    },
    grid: {
      height: "50%",
      top: "10%",
    },
    xAxis: {
      type: "category",
      data: sequence,
      splitArea: {
        show: false,
      },
      show: false,
    },
    yAxis: {
      type: "category",
      data: type,
      splitArea: {
        show: true,
      },
    },
    visualMap: [
      {
        show: false,
        type: "piecewise",
        pieces: [
          { max: 1, color: "#fff" },
          { min: 1, color: "#00faab" },
        ],
      },
      {
        seriesIndex: 1,
        min: -5,
        max: 5,
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: "15%",
        inRange: {
          color: ["#dd8629", "#ffff", "#3ea8a6"],
        },
        show: false,
      },
      {
        seriesIndex: 2,
        min: -0.5,
        max: 0.5,
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: "15%",
        inRange: {
          color: ["#dd8629", "#ffff", "#3ea8a6"],
        },
        show: false,
      },
    ],
    dataZoom: [
      {
        type: "slider",
        xAxisIndex: [0, 1],
        // right: 10,
        start: 0,
        end: 100,
        top: "top",
        dataBackground: {
          areaStyle: { color: "#fafafa" },
        },
        selectedDataBackground: {
          areaStyle: {
            color: "#cccccc",
            opacity: 1,
          },
          lineStyle: {
            color: "#cccccc",
          },
        },
        fillerColor: "rgba(0, 250, 171, 0.1)",
        borderColor: "#dcdcdc",
        brushStyle: {
          color: "rgba(0, 250, 171, 0.1)",
        },
        moveHandleStyle: {
          color: "#00faab",
          borderColor: "#cccccc",
        },
        emphasis: {
          moveHandleStyle: {
            color: "#00faab",
          },
        },
        // labelFormatter: function (value) {
        //   return `${value + firstIndex}`;
        // },
        textStyle: {
          fontWeight: "bold",
        },
      },
    ],

    series: [
      {
        name: "Δ 2D Structure",
        type: "heatmap",
        data: diffStructure,
        label: {
          show: true,
          formatter: (param: any) => {
            return structure[param.data[0]];
          },
        },
      },
      {
        name: "Δ Free Energy",
        type: "heatmap",
        data: freeEnergy,
        label: {
          show: false,
        },
      },
      {
        name: "Δ Shannon entropy",
        type: "heatmap",
        data: shannon,
        label: {
          show: false,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
      {
        name: "Sequence",
        type: "heatmap",
        data: sequence.map((el, index) => {
          return [index, 3, 0];
        }),
        label: {
          show: true,
          formatter: (param: any) => {
            return sequence[param.data[0]];
          },
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <ReactECharts option={option} style={{ height: "40dvh" }} />
      <Divider />
    </div>
  );
};

export default Heatmap;
