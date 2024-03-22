import AdvancedParameters from "./AdvancedParameters";
import styles from "./components.module.css";
import { useState } from "react";
import { Input, Collapse, Button, Modal } from "antd";
import { UploadFile } from "antd/lib/upload/interface";
import UploadStructureFile from "../components/UploadStructureFile";
import { QuestionCircleOutlined } from "@ant-design/icons";
const CustomSequenceLoad = () => {
  const { TextArea } = Input;
  const [uploadStructure, setUploadStructure] = useState<
    UploadFile[] | undefined
  >(undefined);
  const infoGen = () => {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>
            Both RNA and RNA are allowed. Both whole transcript sequence, as
            well as, fragments of the transcripts (targets) could be pasted.
            Targets shorter than 21 nts are not allowed, shorter than 40 nts are
            not recommended. Moreover fasta file of the target/s could be
            uploaded.
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  const infoAdvance = () => {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>
            Optimal parameters to design amiRNA are chosen and fixed (as
            indicated below). However, if needed, any/all of them could be
            changed based on individual preferences (within the permissible
            range)
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div className={styles.backgroundCard}>
      <h3>Custom sequence</h3>
      <div onClick={infoGen}>
        <QuestionCircleOutlined />
      </div>
      <p>Sequence</p>
      <Input placeholder="Basic usage" />
      <p>Targets</p>
      <TextArea rows={4} placeholder="Basic usage" />
      Fasta file
      <UploadStructureFile
      // pdbId={pdbId}
      // setPdbId={setPdbId}
      // uploadStructure={uploadStructure}
      // setShowResult={setShowResult}
      // setUploadStructure={setUploadStructure}
      // setGetStructure={setGetStructure}
      // setIsUpload={setIsUpload}
      // setLoading={setLoading}
      // setFileName={setFileName}
      />
      <Collapse
        items={[
          {
            key: "1",
            label: (
              <>
                Advanced parameters{" "}
                <div onClick={infoAdvance}>
                  <QuestionCircleOutlined />
                </div>
              </>
            ),
            children: <AdvancedParameters />,
          },
        ]}
      />
      <Button>Submit</Button>
    </div>
  );
};

export default CustomSequenceLoad;
