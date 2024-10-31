"use client";
import React from "react";
import { useState, useEffect } from "react";
// import styles from "./page.module.css";
import { DownloadOutlined } from "@ant-design/icons";

import { Table, Button } from "antd";
import { exportDataToCSV } from "@/utils/exportDataToCSV";

interface DataType {
  key: React.Key;
  strand: string;
  alignment: string;
  accession_id: string;
  region: string;
  description: string;
}

const TableAmiRNA = (props: { dataCandidate: any[] }) => {
  const column: any = [
    {
      title: "Strand",
      dataIndex: "strand",
      key: "strand",
    },
    {
      title: "Alignment",
      dataIndex: "alignment",
      key: "alignment",
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

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
        dataSource={props.dataCandidate}
        size="middle"
        columns={column}
        bordered
        pagination={{ position: ["bottomCenter"] }}
        scroll={{ x: true }}
      ></Table>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="primary"
          style={{ width: "150x" }}
          shape="round"
          icon={<DownloadOutlined />}
          onClick={() =>
            exportDataToCSV(props.dataCandidate, column, "table", "amiRNA")
          }
        >
          Download .csv
        </Button>
      </div>
    </>
  );
};

export default TableAmiRNA;
