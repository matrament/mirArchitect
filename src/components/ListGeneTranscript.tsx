"use client";
import { useEffect, useState } from "react";
import styles from "../components/components.module.css";
import { Table, Checkbox, Spin } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import textweb from "../json/textweb.json";
import { gene, transcript, ensembl_transcript, task } from "@/types/inputType";
import { getTranscriptData } from "@/utils/getTranscriptData";
import { getSeqFromTranscript } from "@/utils/getSeqFromTranscript";
import { getEnsemblData } from "@/utils/getEnsemblData";

interface DataType {
  // key: React.Key;
  id: string;
  type: string;
}

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

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
    render: (text: string) => (
      <a
        href={`https://www.ensembl.org/Homo_sapiens/Transcript/Summary?t=${text}`}
        target="_blank"
        style={{ boxShadow: "inset 0 -0.1em 0 0 #00faab" }}
      >
        {text}
      </a>
    ),
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

const ListGeneTranscript = (props: {
  identifier: string;
  task: task;
  setTask: any;
}) => {
  const [ensemblData, setEnsemblData] = useState<gene[]>([]);
  const [transcripts, setTranscripts] = useState<ensembl_transcript[]>();
  const [transcriptTable, setTranscriptTable] = useState<transcript[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getEnsemblData(props.identifier, setEnsemblData);
  }, []);

  const genOrTranscriptSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      setLoading(true);
      getTranscriptData(selectedRows[0].id, setTranscripts);
    },
  };
  const transcriptSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: transcript[]) => {
      getSeqFromTranscript(selectedRows[0].key, props.task, props.setTask);
    },
  };

  useEffect(() => {
    let x: transcript[] = [];
    if (transcripts != undefined) {
      x = transcripts.map((el) => ({
        key: el.id,
        stableId: el.id,
        start: el.start,
        end: el.end,
        lengths: el.length,
        name: el.display_name,
        exons: el.Exon.length,
        version: el.version,
      }));
    }
    setTranscriptTable(x);
  }, [transcripts]);

  return (
    <div>
      <div className={styles.backgroundCard} style={{ marginTop: "20px" }}>
        <h2 className={styles.title}>
          <span>{props.identifier}</span>
        </h2>
        <h4>Select gen/transcript</h4>
        {ensemblData.length != 0 ? (
          <div>
            <Table
              rowSelection={{
                type: "radio",
                ...genOrTranscriptSelection,
              }}
              columns={columns}
              dataSource={ensemblData}
              rowKey={(record) => record.id}
              pagination={{ position: ["bottomCenter"] }}
            />
          </div>
        ) : (
          <Spin tip="Loading" size="large">
            {content}
          </Spin>
        )}
        {transcriptTable?.length != 0 ? (
          <div>
            <h4>Select specific transcript</h4>
            <Table
              rowSelection={{
                type: "radio",
                ...transcriptSelection,
              }}
              columns={columnsTranscript}
              dataSource={transcriptTable}
              pagination={{ position: ["bottomCenter"] }}
            />
          </div>
        ) : loading ? (
          <Spin tip="Loading" size="large">
            {content}
          </Spin>
        ) : null}
      </div>
    </div>
  );
};
export default ListGeneTranscript;
