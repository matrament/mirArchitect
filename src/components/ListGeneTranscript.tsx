"use client";
import { useState } from "react";
import styles from "../components/components.module.css";
import {
  Table,
  Collapse,
  Select,
  Button,
  Tooltip,
  Checkbox,
  Divider,
} from "antd";
import type { TableColumnsType, TableProps } from "antd";
import textweb from "../json/textweb.json";
import type { CheckboxProps, GetProp } from "antd";

type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  "hsa-mir-21",
  "hsa-mir-30a",
  "hsa-mir-33a",
  "hsa-mir-122",
  "hsa-mir-135b",
  "hsa-mir-136-v1",
  "hsa-mir-155",
  "hsa-mir-203a",
];

const defaultCheckedList = [
  "hsa-mir-21",
  "hsa-mir-30a",
  "hsa-mir-33a",
  "hsa-mir-122",
  "hsa-mir-135b",
  "hsa-mir-136-v1",
  "hsa-mir-155",
  "hsa-mir-203a",
];

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

  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChang = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  return (
    <div>
      <div className={styles.backgroundCard} style={{ marginTop: "20px" }}>
        <h2 className={styles.title}>
          <span>Gene Table</span>
        </h2>

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
        <Divider />

        <h2 className={styles.title}>
          <span>Transcript Table</span>
        </h2>

        <Table
          rowSelection={{
            type: "radio",
            ...rowSelectionT,
          }}
          columns={columnsTranscript}
          dataSource={dataTranscript}
          pagination={{ position: ["bottomCenter"] }}
        />

        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            padding: "0px 20px 25px 20px",
          }}
        >
          <h1>amiRNA ID:</h1>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Check all
          </Checkbox>
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChang}
          />
        </div>
      </div>
      <div className={styles.submitButton}>
        <Button type="primary" size="large">
          Submit
        </Button>
      </div>
    </div>
  );
};
export default ListGeneTranscript;
