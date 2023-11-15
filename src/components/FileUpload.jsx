import React, { useRef, useState } from "react";
import { CloudUpload } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const FileUploadButton = () => {
  const [selectedFileName, setSelectedFileName] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const allowedExtensions = [".pdf", ".doc", ".docx"];
      const isValid = allowedExtensions.some((ext) =>
        selectedFile.name.toLowerCase().endsWith(ext)
      );

      if (isValid) {
        setSelectedFileName(selectedFile.name);
      } else {
        setSelectedFileName("Not Valid File");
        fileInputRef.current.value = "";
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Box>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
      <Box>
        <Button
          variant="contained"
          startIcon={<CloudUpload />}
          onClick={handleButtonClick}
        >
          Upload CV
        </Button>
        <Typography fontSize="12px" mt={1} variant="body2" color="red">
          must be (.pdf , .doc , docx)
        </Typography>
      </Box>
      <Typography mt={2} variant="body2">
        {selectedFileName}
      </Typography>
    </Box>
  );
};

export default FileUploadButton;
