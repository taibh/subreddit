import {
  LocalFireDepartment,
  NewReleases,
  TrendingUp,
} from "@mui/icons-material";
import { Box, Chip } from "@mui/material";
import { common } from "@mui/material/colors";
import { FilterTypes } from "models/reddit";
import React, { useState } from "react";

interface SubredditFilterProps {
  onFilter: (values: FilterTypes) => void;
}

const SubredditFilter: React.FC<SubredditFilterProps> = ({ onFilter }) => {
  const [filterType, setFilterType] = useState<FilterTypes>(FilterTypes.HOT);

  const onFilterChange = (filterType: FilterTypes) => {
    setFilterType(filterType);
    onFilter(filterType);
  };

  return (
    <Box sx={{ bgcolor: common.white, mb: 2, py: "10px", borderRadius: 1 }}>
      <Chip
        label="Hot"
        clickable
        className={filterType === FilterTypes.HOT ? "selected" : undefined}
        icon={<LocalFireDepartment />}
        sx={{
          ml: 2,
          fontSize: 14,
          fontWeight: "bold",
          lineHeight: "17px",
          px: 2,
          bgcolor: filterType === FilterTypes.HOT ? undefined : common.white,
        }}
        onClick={() => onFilterChange(FilterTypes.HOT)}
      />
      <Chip
        label="New"
        clickable
        icon={<NewReleases />}
        className={filterType === FilterTypes.NEW ? "selected" : undefined}
        sx={{
          ml: 2,
          fontSize: 14,
          fontWeight: "bold",
          lineHeight: "17px",
          px: 2,
          bgcolor: filterType === FilterTypes.NEW ? undefined : common.white,
        }}
        onClick={() => onFilterChange(FilterTypes.NEW)}
      />
      <Chip
        label="Top"
        clickable
        icon={<TrendingUp />}
        className={filterType === FilterTypes.TOP ? "selected" : undefined}
        sx={{
          ml: 2,
          fontSize: 14,
          fontWeight: "bold",
          lineHeight: "17px",
          px: 2,
          bgcolor: filterType === FilterTypes.TOP ? undefined : common.white,
        }}
        onClick={() => onFilterChange(FilterTypes.TOP)}
      />
    </Box>
  );
};

export default SubredditFilter;
