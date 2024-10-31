"use client";
import styles from "./components.module.css";
import { useState } from "react";
import { Table, Button, Card, Col, Row } from "antd";
import type { TableProps } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
const { Column, ColumnGroup } = Table;
import { exportDataToCSV } from "@/utils/exportDataToCSV";

type TableRowSelection<T> = TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const column: any = [
  {
    title: "Pri-miRNA",
    dataIndex: "pri_mirna",
    key: "pri_mirna",
  },
  {
    title: "amiRNA sequence",
    dataIndex: "amirna",
    key: "amirna",
  },
  {
    title: "Target sequence",
    dataIndex: "target_seq",
    key: "terget_seq",
  },
  {
    title: "Target position (start-end)",
    dataIndex: "target_pos",
    key: "target_pos",
  },
  { title: "Score", dataIndex: "score", key: "score" },

  { title: "Guide strand", dataIndex: "seed_guide", key: "seed_guide" },

  {
    title: "Passenger strand",
    dataIndex: "seed_passenger",
    key: "seed_passenger",
  },
  {
    title: "Guide strand",
    dataIndex: "mismatches_guide",
    key: "mismatches_guide",
  },

  {
    title: "Passenger strand",
    dataIndex: "mismatches_passenger",
    key: "mismatches_passenger",
  },

  {
    title: "Guide strand",
    dataIndex: "indicated_guide",
    key: "indicated_guide",
  },

  {
    title: "Passenger strand",
    dataIndex: "indicated_passenger",
    key: "indicated_passenger",
  },
];

const TableAmiRNACandidates = (props: {
  data: any;
  setMiRNAcandidate: any;
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const handleOnChange = (
    newSelectedRowKeys: React.Key[],
    selectedRows: any
  ) => {
    setSelectedRowKeys(newSelectedRowKeys);
    props.setMiRNAcandidate(selectedRows);
  };

  const rowSelection: TableRowSelection<any> = {
    columnWidth: "10px",
    selectedRowKeys,
    fixed: "left",
    onChange: handleOnChange,
  };

  return (
    <>
      <Row wrap={false} style={{ marginBottom: "20px" }}>
        <Col flex="auto">
          <p
            style={{
              marginRight: "20px",
              paddingRight: "20px",
              borderRight: "1px solid #dddddd",
            }}
          >
            Below, you can find the list of designed amiRNA candidates. By
            default, they are prioritize based on the score. The lower score –
            the best (the most effective) amiRNA candidate. You can also sort
            the amiRNA candidates based on the other parameters outlined in the
            table below, i.e. structure differences, Tm [°C], ends diff
            [kcal/mol], target start, target end, by clinking on the bullet
            point beside the chosen parameter.
          </p>
        </Col>
        <Col flex="250px">
          <Card title="Legend" bordered={true} size="small">
            {/* <HighlightTwoTone twoToneColor="#9f2945" /> */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <b style={{ color: "#9f2945", background: "#f8c3d9" }}>
                Guide strand
              </b>
              <b style={{ color: "#265191", background: "#c6d0f2" }}>
                Passenger strand
              </b>
            </div>
          </Card>
        </Col>
      </Row>

      <Table<DataType>
        // style={{ marginLeft: "30px", marginRight: "30px" }}
        dataSource={props.data}
        size="middle"
        bordered
        pagination={{ position: ["bottomCenter"] }}
        scroll={{ x: true }}
        rowSelection={{ type: "radio", ...rowSelection }}
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
                    color: `${e.which_end === 5 ? "#9f2945" : "#265191"}`,
                    background: `${e.which_end === 5 ? "#f8c3d9" : "#c6d0f2"}`,
                  }}
                >
                  {e.insert}
                </b>
                {e.middle}
                <b
                  style={{
                    color: `${e.which_end === 5 ? "#265191" : "#9f2945"}`,
                    background: `${e.which_end === 5 ? "#c6d0f2" : "#f8c3d9"}`,
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
          <Column
            title="Score"
            dataIndex="score"
            key="score"
            defaultSortOrder="descend"
            sorter={{ compare: (a: any, b: any) => a.score - b.score }}
          />
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="primary"
          style={{ width: "150x" }}
          shape="round"
          icon={<DownloadOutlined />}
          onClick={() =>
            exportDataToCSV(props.data, column, "table", "amiRNA_candidates")
          }
        >
          Download .csv
        </Button>
      </div>
    </>
  );
};

export default TableAmiRNACandidates;
