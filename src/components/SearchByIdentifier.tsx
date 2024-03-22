import { Button, Form, Input, Space, Tooltip, Modal } from "antd";
import textweb from "../json/textweb.json";
import { QuestionCircleOutlined } from "@ant-design/icons";
import styles from "./components.module.css";
const SearchByIdentifier = () => {
  const infoGen = () => {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>
            If more than one transcript is identified, the list of transcripts
            are presented. One of them should be chosen for further analysis.
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div className={styles.backgroundCard}>
      <h3>Gene/Transcript identifier</h3>
      <div onClick={infoGen}>
        <QuestionCircleOutlined />
      </div>

      <p>From example collection:</p>
      <Space.Compact>
        <Tooltip title={textweb.example_search.example_first}>
          <Button onClick={() => {}}>TMPRSS2</Button>
        </Tooltip>
        <Tooltip title={textweb.example_search.example_second}>
          <Button onClick={() => {}}>...</Button>
        </Tooltip>
        <Tooltip title={textweb.example_search.example_third}>
          <Button onClick={() => {}}>...</Button>
        </Tooltip>
      </Space.Compact>
      <Input placeholder="Basic usage" />
      <Button>Search</Button>
    </div>
  );
};

export default SearchByIdentifier;
