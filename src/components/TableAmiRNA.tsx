"use client";
import { useState, useEffect } from "react";
// import styles from "./page.module.css";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Tooltip, Collapse, Card } from "antd";
import TableSequenceResult from "@/components/TableSequenceResult";
import { Table, Tag } from "antd";
import React from "react";
import Heatmap from "@/components/Heatmap";
import result from "../json/example_result_mirarchitect.json";
import styles from "../page.module.css";
const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  strand: string;
  alignment: string;
  accession_id: string;
  region: string;
  description: string;
}

const TableAmiRNA = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let tempData: any = [];
    tempData = result.result.additional.sense_blast[1].map((el, index) => {
      return {
        key: index,
        strand: el.side,
        alignment: el.sseq,
        accession_id: el.sacc,
        region: "?",
        description: el.stitle,
      };
    });
    console.log(tempData);
    setData(tempData);
  }, []);
  return (
    <>
      <p>
        List of off-target candidates for both guide and pasenger strand. The
        alignments between each off-target candidate and the guide and passenger
        strand sequences clarifie the locations of mismatches. Hits with a
        perfect match (22/22 matches), one mismatch (21/22 matches), two
        mismatches (20/22 matches), or three mismatches (19/22 matches) are
        shown. Searches are performed for 22nt sequences of each strand of the
        siRNA duplex.
      </p>
      <Table<DataType>
        dataSource={data}
        size="middle"
        bordered
        pagination={{ position: ["bottomCenter"] }}
        scroll={{ x: true }}
      >
        <Column
          title="Accession ID"
          dataIndex="accession_id"
          key="accession_id"
        />
        <Column title="Strand" dataIndex="strand" key="strand" />
        <Column title="Alignment" dataIndex="alignment" key="alignment" />

        <Column title="Region" dataIndex="region" key="region" />

        <Column title="Description" dataIndex="description" key="description" />
      </Table>
      <div>
        <Button
          type="primary"
          style={{ width: "150x" }}
          shape="round"
          icon={<DownloadOutlined />}
          // onClick={() =>
          //   exportDataToCSV(
          //     csvData.sort((a: any, b: any) => a.key - b.key),
          //     column,
          //     "table",
          //     "residues_MCQ_value"
          //   )
          // }
        >
          Download .csv
        </Button>
      </div>
    </>
  );
};

export default TableAmiRNA;
