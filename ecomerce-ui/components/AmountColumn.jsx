import { Stack, Typography } from "@mui/material";
import React from "react";
import { currency } from "../constants/general.constant";

const AmountColumn = (props) => {
  return (
    <Stack direction="row" justifyContent="space-between" className="p-4">
      <Typography variant="h6">{props.label}</Typography>
      <div className="flex items-center">
        <Typography variant="h6" className="mr-2">
          {currency}
        </Typography>
        <Typography variant="h6">{props.amount}</Typography>
      </div>
    </Stack>
  );
};

export default AmountColumn;