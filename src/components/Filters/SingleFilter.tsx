// YourComponent.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, MenuItem, Typography, Chip } from "@mui/material";

type MenuItem = {
  MenuItem: string;
};
type props = {
  menuItems: MenuItem[];
  FilterLabel: string;
};
const SingleFilter = ({ FilterLabel, menuItems }: props) => {
  const [filterOption, setFilterOption] = useState<string | undefined>();
  const [onClose, setOnClose] = useState(false);

  const handleChange = (event: any) => {
    const value = event.target.value;
    setFilterOption(value);
  };

  const handleClose = () => {
    setOnClose(true);
  };

  return (
    <div>
      <Select
        value={filterOption}
        onChange={handleChange}
        placeholder={filterOption ? filterOption : FilterLabel}
        displayEmpty
        inputProps={{ "data-testid": "single-filter-items" }}
        renderValue={(selected) => {
          if (!selected) {
            return <Typography>{FilterLabel}</Typography>;
          }
          return <Chip label={selected} onDelete={handleClose} />;
        }}
        sx={{
          minWidth: 122,
          height: 38,
          fontSize: 14,
          color: "gray",
          "&:hover": { borderColor: "gray" },
          "&:active": { borderColor: "none" },
        }}
      >
        {menuItems.map((option) => (
          <MenuItem value={option.MenuItem} sx={{ color: "gray" }}>
            {option.MenuItem}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SingleFilter;
