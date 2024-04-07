"use client";
import styles from "../components/components.module.css";
import { Table, Collapse, Select, Button } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import AdvancedParameters from "./AdvancedParameters";

interface DataType {
  key: React.Key;
  stableId: string;
  type: string;
}

interface Transcript {
  key: React.Key;
  stableId: string;
  start: number;
  end: number;
  lengths: number;
  name: string;
  exons: number;
  version: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Stable ID",
    dataIndex: "stableId",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Type",
    dataIndex: "type",
  },
];

const data: DataType[] = [
  {
    key: "1",
    stableId: "ENSG00000012048",
    type: "gene",
  },
  {
    key: "2",
    stableId: "LRG_292",
    type: "gene",
  },
];

const columnsTranscript: TableColumnsType<Transcript> = [
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

const dataTranscript: Transcript[] = [
  {
    key: "1",
    stableId: "ENST00000497488",
    start: 43044295,
    end: 43125300,
    lengths: 6335,
    name: "BRCA1-222",
    exons: 15,
    version: 2,
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const rowSelectionT = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: Transcript[]) => {
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

const ListGeneTranscript = () => {
  type TableRowSelection<T> = TableProps<T>["rowSelection"];
  return (
    <div className={styles.backgroundCard} style={{ marginTop: "20px" }}>
      <h2 className={styles.title}>Gene Table</h2>

      <div>
        <Table
          rowSelection={{
            type: "radio",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          pagination={{ position: ["bottomCenter"] }}
        />
      </div>
      <div
        style={{
          borderTop: "1px #ddd solid",
          width: "100%",
          margin: "10px 0 10px 0",
        }}
      ></div>

      <h2 className={styles.title}>Transcript Table</h2>

      <Table
        rowSelection={{
          type: "radio",
          ...rowSelectionT,
        }}
        columns={columnsTranscript}
        dataSource={dataTranscript}
        pagination={{ position: ["bottomCenter"] }}
      />

      <div style={{ marginTop: "5px" }}>
        <Collapse
          items={[
            {
              key: "1",
              label: <>Advanced parameters</>,
              children: <AdvancedParameters />,
            },
          ]}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
      >
        <Button type="primary" size="large">
          Submit
        </Button>
      </div>
    </div>
  );
};
export default ListGeneTranscript;
