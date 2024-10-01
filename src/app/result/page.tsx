"use client";
import { useState, useEffect } from "react";
// import styles from "./page.module.css";
import {
  Button,
  Form,
  Input,
  Space,
  Tooltip,
  Collapse,
  Card,
  Select,
} from "antd";
import { HighlightTwoTone } from "@ant-design/icons";

import TableSequenceResult from "@/components/TableSequenceResult";
import { Table, Tag } from "antd";
import React from "react";
import Heatmap from "@/components/Heatmap";
import result from "../../json/example_result_mirarchitect.json";
import styles from "../page.module.css";
import TableAmiRNA from "@/components/TableAmiRNA";
import TargetDuplex from "@/components/TargetDuplex";
const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  amirna: string;
  pri_mirna: string;
  target_seq: number;
  target_pos: string;
  score: string;
  seed_guide: number;
  seed_passenger: number;
  mismatches_guide: number;
  mismatches_passenger: number;
  indicated_guide: number;
  indicated_passenger: number;
}

const Result = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let tempData: any = [];
    tempData = result.result.result.map((el, index) => {
      return {
        key: index,
        pri_mirna: el.amiRNA.id,
        amirna: {
          which_end: el.amiRNA.which_end,
          head: el.amiRNA.seq.head,
          insert: el.amiRNA.seq.insert,
          middle: el.amiRNA.seq.middle,
          insertc: el.amiRNA.seq.insertc,
          tail: el.amiRNA.seq.tail,
        },

        score: el.amiRNA.score.toFixed(2),
        target_pos: `${el.candidate.start}-${el.candidate.end}`,
        target_seq: el.candidate.seq,
        seed_guide: Number(el.amiRNA.antisense_tm.toFixed(2)),
      };
    });
    console.log(tempData);
    setData(tempData);
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <div className={styles.mainPage}>
        <h2>Result</h2>
        <h4>Effective amiRNA candidates</h4>
        <p>
          Below, you can find the list of designed amiRNA candidates. By
          default, they are prioritize based on the score. The lower score – the
          best (the most effective) amiRNA candidate. You can also sort the
          amiRNA candidates based on the other parameters outlined in the table
          below, i.e. structure differences, Tm [°C], ends diff [kcal/mol],
          target start, target end, by clinking on the bullet point beside the
          chosen parameter.
        </p>
        <HighlightTwoTone twoToneColor="#9f2945" />
        <b style={{ color: "#9f2945", background: "#f8c3d9" }}>Guide strand</b>
        <b style={{ color: "#265191", background: "#c6d0f2" }}>
          Passenger strand
        </b>
        <Table<DataType>
          // style={{ marginLeft: "30px", marginRight: "30px" }}
          dataSource={data}
          size="middle"
          bordered
          pagination={{ position: ["bottomCenter"] }}
          scroll={{ x: true }}
        >
          <ColumnGroup title="amiRNA">
            <Column
              title="Pri-miRNA"
              dataIndex="pri_mirna"
              key="pri_mirna"
              render={(e: string) => (
                <div style={{ textWrap: "nowrap" }}>{e}</div>
              )}
            />
            <Column
              title="amiRNA sequence"
              dataIndex="amirna"
              key="amirna"
              render={(e: { [key: string]: any }) => (
                <div>
                  {e.head}
                  <b
                    style={{
                      color: `${e.which_end === 5 ? "#265191" : "#9f2945"}`,
                      background: `${
                        e.which_end === 5 ? "#c6d0f2" : "#f8c3d9"
                      }`,
                    }}
                  >
                    {e.insert}
                  </b>
                  {e.middle}
                  <b
                    style={{
                      color: `${e.which_end === 5 ? "#9f2945" : "#265191"}`,
                      background: `${
                        e.which_end === 5 ? "#f8c3d9" : "#c6d0f2"
                      }`,
                    }}
                  >
                    {e.insertc}
                  </b>
                  {e.tail}
                </div>
              )}
            />
          </ColumnGroup>
          <ColumnGroup title="Target">
            <Column
              title="Target sequence"
              dataIndex="target_seq"
              key="terget_seq"
            />
            <Column
              title="Target position (start-end)"
              dataIndex="target_pos"
              key="target_pos"
            />
          </ColumnGroup>
          <ColumnGroup title="Functionality check">
            <Column title="Score" dataIndex="score" key="score" />
          </ColumnGroup>
          <ColumnGroup title="Specificity check">
            <ColumnGroup title="Seed-duplex stability">
              <Column
                title="Guide strand"
                dataIndex="seed_guide"
                key="seed_guide"
              />
              <Column
                title="Passenger strand"
                dataIndex="seed_passenger"
                key="seed_passenger"
              />
            </ColumnGroup>
            <ColumnGroup title="Minimum number of mismatches against any off-target">
              <Column
                title="Guide strand"
                dataIndex="mismatches_guide"
                key="mismatches_guide"
              />
              <Column
                title="Passenger strand"
                dataIndex="mismatches_passenger"
                key="mismatches_passenger"
              />
            </ColumnGroup>
            <ColumnGroup title="Number of off-target hits within indicated mismatches">
              <Column
                title="Guide strand"
                dataIndex="indicated_guide"
                key="indicated_guide"
              />
              <Column
                title="Passenger strand"
                dataIndex="indicated_passenger"
                key="indicated_passenger"
              />
            </ColumnGroup>
          </ColumnGroup>
        </Table>
        <h3>Graphical view of amiRNA candidates</h3>
        <h4>amiRNA - target duplex</h4>
        <TargetDuplex />
        <h4>analysis of amiRNA functionallity</h4>
        <Heatmap />
        <h4>analysis of amiRNA specificity</h4>
        <TableAmiRNA />
      </div>
    </div>
  );
};

export default Result;
