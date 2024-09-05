"use client";
import { useEffect, useState } from "react";
import styles from "../components/components.module.css";
import { Table, Checkbox } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import textweb from "../json/textweb.json";
import type { CheckboxProps, GetProp } from "antd";
import { gene, transcript, ensembl_transcript } from "@/types/inputType";
import { getTranscriptData } from "@/utils/getTranscriptData";

interface DataType {
  // key: React.Key;
  id: string;
  type: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Stable ID",
    dataIndex: "id",
    render: (text: string) => <a>{text}</a>,
    key: "id",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
];

const columnsTranscript: TableColumnsType<transcript> = [
  {
    title: "Stable ID",
    dataIndex: "stableId",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Start",
    dataIndex: "start",
    sorter: (a, b) => a.start - b.start,
  },
  {
    title: "End",
    dataIndex: "end",
    sorter: (a, b) => a.end - b.end,
  },
  {
    title: "Length",
    dataIndex: "lengths",
    sorter: (a, b) => a.lengths - b.lengths,
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Exons",
    dataIndex: "exons",
    sorter: (a, b) => a.exons - b.exons,
  },
  {
    title: "Version",
    dataIndex: "version",
  },
];

const dataTranscript: transcript = {
  key: "1",
  stableId: "ENST00000497488",
  start: 43044295,
  end: 43125300,
  lengths: 6335,
  name: "BRCA1-222",
  exons: 15,
  version: 2,
};
const rowSelectionT = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: transcript[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const ListGeneTranscript = (props: {
  ensemblData: gene[];
  identifier: string;
}) => {
  type TableRowSelection<T> = TableProps<T>["rowSelection"];

  const [transcriptData, setTranscriptData] = useState<ensembl_transcript>();
  const [transcriptTable, setTranscriptTable] = useState<transcript[]>([]);

  const genSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      getTranscriptData(selectedRows[0].id, setTranscriptData);
    },
  };
  useEffect(() => {
    translateTranscriptData();
    // if (transcriptData.length != 0) {
    //   console.log("dupa");
    // }
  }, [transcriptData]);

  const translateTranscriptData = () => {
    let x: transcript[] = [];
    if (transcriptData != undefined) {
      x = [
        {
          key: transcriptData.id,
          stableId: transcriptData.id,
          start: transcriptData.start,
          end: transcriptData.end,
          lengths: 2,
          name: transcriptData.display_name,
          exons: 15,
          version: transcriptData.version,
        },
      ];
    }

    // let x: transcript[] = transcriptData.map((e: ensembl_transcript) => ({
    //   key: e.id,
    //   stableId: e.id,
    //   start: e.start,
    //   end: e.end,
    //   lengths: 2,
    //   name: e.display_name,
    //   exons: 15,
    //   version: e.version,
    // }));

    setTranscriptTable(x);
  };

  return (
    <div>
      <div className={styles.backgroundCard} style={{ marginTop: "20px" }}>
        <h2 className={styles.title}>
          <span>{props.identifier}</span>
        </h2>
        <h4>Select gen/transcript</h4>
        {props.ensemblData.length != 0 ? (
          <div>
            <Table
              rowSelection={{
                type: "radio",
                ...genSelection,
              }}
              columns={columns}
              dataSource={props.ensemblData}
              rowKey={(record) => record.id}
              pagination={{ position: ["bottomCenter"] }}
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {transcriptTable?.length != 0 ? (
          <div>
            <h4>Select specific transcript</h4>
            <Table
              rowSelection={{
                type: "radio",
                ...rowSelectionT,
              }}
              columns={columnsTranscript}
              dataSource={transcriptTable}
              pagination={{ position: ["bottomCenter"] }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default ListGeneTranscript;
