"use client";
import styles from "./first-scenario.module.css";
import { useState, useEffect } from "react";
import { Table, Collapse, Select, Button } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
// import { exportDataToCSV } from "../../utils/exportDataToCSV";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
  },
];

const TableSequenceResult = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Button>Export to .csv</Button>
    </>
  );
};

export default TableSequenceResult;
