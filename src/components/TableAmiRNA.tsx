"use client";
import React from "react";
import { useState, useEffect } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Table, Button } from "antd";
import { exportDataToCSV } from "@/utils/exportDataToCSV";

interface DataType {
  key: React.Key;
  strand: string;
  alignment: any;
  accession_id: string;
  region: string;
  description: string;
}
const column: any = [
  {
    title: "Accession ID",
    dataIndex: "accession_id",
    key: "accession_id",
    fixed: "left",
  },
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

const TableAmiRNA = (props: {
  resultData: {
    additional: any;
    result: any[];
  };
  miRNAcandidate: any[];
}) => {
  const [dataCandidate, setDataCandidate] = useState<any[]>([]);

  useEffect(() => {
    if (
      props.resultData.result.length != 0 &&
      props.miRNAcandidate.length != 0
    ) {
      let tempData: any = [];

      let candidateKey = props.miRNAcandidate[0]?.key;
      tempData = props.resultData.additional.sense_blast[candidateKey].map(
        (el: any, index: number) => {
          console.log(el);
          let region;
          if (el.hasOwnProperty("cdsstart") && el.hasOwnProperty("cdsend")) {
            const type_arr = [];
            if (el.sstart < el.cdsstart) {
              type_arr.push("5'-UTR");
            }
            if (el.send >= el.cdsstart && el.sstart <= el.cdsend) {
              type_arr.push("CDS");
            }
            if (el.send > el.cdsend) {
              type_arr.push("3'-UTR");
            }
            region = type_arr.join(" / ");
          } else {
            const title = el.stitle.split(",");
            region = title[title.length - 1].split(";")[0].trim();
          }
          let alignment;
          let original: string = "";

          if (el.side === "antisense") {
            original = props.resultData.result[candidateKey].amiRNA.seq.insert;
          } else {
            original = props.resultData.result[candidateKey].amiRNA.seq.insertc;
          }

          original = original.substring(
            original.length - el.qend,
            original.length - el.qstart + 1
          );

          let align = el.sseq.split("").reverse().join("").replace(/T/g, "U");

          let alignT = [<React.Fragment key={0}>{"3'- "}</React.Fragment>];
          let lineT = "    ";

          let compl = {
            A: "U",
            C: "G",
            G: "C",
            U: "A",
          };

          for (let i = 0; i < align.length; ++i) {
            if (
              align.charAt(i) ===
              compl[original.charAt(i) as keyof typeof compl]
            ) {
              lineT += "|";
              alignT.push(
                <React.Fragment key={i + 1}>{align.charAt(i)}</React.Fragment>
              );
            } else {
              lineT += " ";
              alignT.push(
                <span key={i + 1} style={{ background: "#00faab" }}>
                  {align.charAt(i)}
                </span>
              );
            }
          }

          alignT.push(
            <React.Fragment key={align.length + 1}>{" -5'"}</React.Fragment>
          );
          lineT += "    ";

          alignment = (
            <div style={{ whiteSpace: "pre", fontFamily: "monospace" }}>
              {"5'- " + original + " -3'"}
              <br />
              {lineT}
              <br />
              {alignT}
            </div>
          );

          return {
            key: index,
            strand: el.side,
            alignment: alignment,
            accession_id: el.sacc,
            region: region,
            description: el.stitle,
          };
        }
      );

      setDataCandidate(tempData);
    }
  }, [props.miRNAcandidate]);

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
        dataSource={dataCandidate}
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
            exportDataToCSV(dataCandidate, column, "table", "amiRNA")
          }
        >
          Download .csv
        </Button>
      </div>
    </>
  );
};

export default TableAmiRNA;
