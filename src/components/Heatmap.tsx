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

const Heatmap = () => {
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
    "2D structure",
    "Sequence",
  ];

  const option: ReactEChartsProps["option"] = {
    tooltip: {
      position: "top",
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
        // seriesIndex: 0,
        min: -0.5,
        max: 0.5,
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: "15%",
        inRange: {
          color: ["#dd8629", "#ffff", "#3ea8a6"],
        },
      },
      {
        seriesIndex: 1,
        show: false,
        inRange: { color: "#35b779" },
      },
      {
        seriesIndex: 2,
        min: -5,
        max: 5,
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: "15%",
        inRange: {
          color: ["#dd8629", "#ffff", "#3ea8a6"],
        },
      },
    ],
    dataZoom: [{}],

    series: [
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
        name: "Δ 2D Structure",
        type: "heatmap",
        data: diffStructure,
        label: {
          show: false,
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
        name: "Sequence",
        type: "heatmap",
        data: sequence.map((el, index) => {
          return [index, 4, 0];
        }),
        label: {
          show: true,
          formatter: (param: any) => {
            return sequence[param.data[0]];
          },
        },
      },
      {
        name: "2D Structure",
        type: "heatmap",
        data: structure.map((el, index) => {
          return [index, 3, 0];
        }),
        label: {
          show: true,
          formatter: (param: any) => {
            return structure[param.data[0]];
          },
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <ReactECharts
        option={option}
        style={{ height: "40dvh", marginLeft: "30px", marginRight: "30px" }}
      />
      <Divider />
    </div>
  );
};

export default Heatmap;
