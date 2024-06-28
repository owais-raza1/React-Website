import React from "react";
import { Button } from "@mui/material";

function Btn(props) {
  const { sx, variant, className, text, onClick, startIcon } = props;
  return (
    <div>
      <Button
        sx={{ sx }}
        className={className}
        variant={variant}
        onClick={onClick}
        startIcon={startIcon}
      >
        {text}
      </Button>
    </div>
  );
}

export default Btn;
