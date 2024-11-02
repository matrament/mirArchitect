import { message } from "antd";
import lang from "../json/lang.json";
import { task } from "@/types/inputType";

export function getSeqFromTranscript(
  transcriptId: string,
  task: task,
  setTask: any
) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(
    "https://rest.ensembl.org/sequence/id/" +
      transcriptId +
      "?content-type=application/json&object_type=transcript&species=human&type=cds",
    requestOptions
  )
    .then((response: any) => response.json())
    .then((response: any) => {
      if (response && response.seq.length != 0) {
        setTask({ ...task, seq: response.seq });
      } else {
        message.error(lang.rcsb_error_with_name + "'" + transcriptId + "'");
      }
    });
}
