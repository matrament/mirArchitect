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
      if (!response) {
        message.error(lang.rcsb_error_with_name + "'" + transcriptId + "'");
      } else {
        if (response.object_type === "Transcript") {
          setTranscriptData([response]);
        } else if (response.object_type === "Gene") {
          setTranscriptData(response.Transcript);
          console.log(response.Transcript);
        }
      }
    });
}
