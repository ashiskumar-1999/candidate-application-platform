import React, { useState } from "react";
import { Chip, MenuItem, Select, Stack, Typography } from "@mui/material";

type MenuItem = {
  MenuOptionName: string;
};

type prop = {
  FilterLabel: string;
  MenuItemOptions: MenuItem[];
};

const Filter = ({ FilterLabel, MenuItemOptions }: prop) => {
  const [filterItems, setFilterItems] = useState<string[]>([]);
  const handleChange = (event: any) => {
    setFilterItems(event.target.value);
  };

  return (
    <Select
      labelId="multiple-job-filter"
      id="multiple-job-filter-chip"
      multiple
      inputProps={{ "data-testid": "multiple-filter-items" }}
      value={filterItems}
      onChange={handleChange}
      renderValue={(selected) => {
        if (!selected) {
          return <Typography>{FilterLabel}</Typography>;
        } else {
          return (
            <Stack direction="row" spacing={0.5}>
              {selected.map((value: any) => (
                <Chip key={value} label={value} />
              ))}
            </Stack>
          );
        }
      }}
      sx={{
        Width: 122,
        height: 38,

        fontSize: 14,
        color: "gray",
        "&:hover": { borderColor: "gray" },
        "&:active": { borderColor: "none" },
      }}
    >
      {MenuItemOptions.map((option) => (
        <MenuItem key={option.MenuOptionName} value={option.MenuOptionName}>
          {option.MenuOptionName}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Filter;
