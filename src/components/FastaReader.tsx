import { Button, Upload } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { gene, task } from "@/types/inputType";

const FastaReader = (props: { task: task; setTask: any }) => {
  const [sequence, setSequence] = useState<string>("");

  const handleFileRead = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e.target?.result as string;
      const lines = contents.split("\n");
      const sequenceLine = lines.find((line) => !line.startsWith(">"))?.trim();
      props.setTask({ ...props.task, seq: sequenceLine?.toUpperCase() || "" });
    };
    reader.readAsText(file);
    return false; // Prevents automatic upload
  };

  return (
    <Upload
      beforeUpload={handleFileRead}
      accept=".fasta"
      showUploadList={false} // Hide the file list
    >
      <Button icon={<UploadOutlined style={{ color: "#00faab" }} />}>
        Upload .fasta file
      </Button>
    </Upload>
  );
};

export default FastaReader;
