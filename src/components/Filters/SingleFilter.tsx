import React, { useState } from "react";
import { Select, MenuItem, Typography, Chip } from "@mui/material";

//Defining the type of the MenuItem for the Filter input.
type MenuItem = {
  MenuItem: string;
};

type props = {
  menuItems: MenuItem[];
  FilterLabel: string;
};
const SingleFilter = ({ FilterLabel, menuItems }: props) => {
  const [filterOption, setFilterOption] = useState<string | undefined>();

  const handleChange = (event: any) => {
    const value = event.target.value;
    setFilterOption(value);
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
          return <Chip label={selected} />;
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
        <MenuItem>
          <Typography color="gray">{FilterLabel}</Typography>
        </MenuItem>
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
