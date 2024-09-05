import { message } from "antd";
import lang from "../json/lang.json";

export function getTranscriptData(
  transcriptId: string,
  setTranscriptData: any
) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(
    "https://rest.ensembl.org//lookup/id/" +
      transcriptId +
      "?species=homo_sapiens&content-type=application/json&expand=1",
    requestOptions
  )
    .then((response: any) => response.json())
    .then((response: any) => {
      if (response.length === 0) {
        // setPdbError(true);
        message.error(lang.rcsb_error_with_name + "'" + transcriptId + "'");
      } else {
        setTranscriptData(response);
        console.log(response);
      }
    });
}
