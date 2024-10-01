import React, { useState, ChangeEvent } from "react";

const FastaReader: React.FC = () => {
  const [fastaContent, setFastaContent] = useState<string>("");

  // Function to handle file reading
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the file from the input
    if (file) {
      const reader = new FileReader();

      // On file load, update the fastaContent state
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const fileContent = e.target?.result as string; // Type assertion since result is potentially null
        setFastaContent(fileContent); // Store the file content in state
      };

      reader.readAsText(file); // Read the file as text
    }
  };

  return (
    <div>
      <h2>Upload and Display .FASTA File</h2>

      {/* File input for FASTA file */}
      <input type="file" accept=".fasta" onChange={handleFileChange} />

      {/* Display the content of the .FASTA file */}
      {fastaContent && (
        <div>
          <h3>FASTA File Content:</h3>
          <pre style={{ whiteSpace: "pre-wrap" }}>{fastaContent}</pre>
        </div>
      )}
    </div>
  );
};

export default FastaReader;
