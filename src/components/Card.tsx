import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { getTitleCase } from "../utils/getTitleCase";

type props = {
  chipLabel?: string;
  companyURL?: string;
  companyName: string;
  jobDetails: string;
  jobRole: string;
  location: string;
  minExperience?: string;
  minJdSalary: number;
  maxJdSalary: number;
  salaryCurrencyCode: string;
  onApply: () => void;
};

const JobCard = ({
  chipLabel,
  companyURL,
  companyName,
  jobDetails,
  jobRole,
  location,
  minExperience,
  minJdSalary,
  maxJdSalary,
  salaryCurrencyCode,
  onApply,
}: props) => {
  const truncatedJobDetails = jobDetails.slice(0, 300);
  return (
    <React.Fragment>
      <Card
        sx={{
          maxWidth: 300,
          maxHeight: 500,
          borderRadius: 5,
          boxShadow: 3,
          p: 1,
        }}
      >
        <CardContent sx={{ textAlign: "left" }}>
          {chipLabel && <Chip label={chipLabel} />}

          <Stack direction="row" spacing={1}>
            <Avatar src={companyURL}> Logo</Avatar>
            <Stack direction="column">
              <Typography
                sx={{ fontSize: 14, fontWeight: "bold" }}
                color="gray"
              >
                {getTitleCase(companyName)}
              </Typography>
              <Typography
                sx={{ fontSize: 16, fontWeight: "semibold" }}
                color="black"
              >
                {getTitleCase(jobRole)}
              </Typography>
              <Typography
                sx={{ fontSize: 12, fontWeight: "medium" }}
                color="gray"
              >
                {getTitleCase(location)}
              </Typography>
            </Stack>
          </Stack>
          <Tooltip title="N/A shows for 'Not provided by Employer" arrow>
            <Typography sx={{ fontSize: 16 }} color="gray">
              Estimated Salary: {salaryCurrencyCode} {minJdSalary} -{" "}
              {maxJdSalary}
            </Typography>
          </Tooltip>
          <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
            About Role
          </Typography>
          <Typography
            sx={{
              position: "relative",
              "::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "10em", // Adjust the height to cover the last 4 lines
                background: "linear-gradient(transparent, white)", // Apply gradient to hide the blur
                zIndex: 0,
              },
            }}
          >
            {truncatedJobDetails}
          </Typography>
          <Typography sx={{ zIndex: 1, textAlign: "center", color: "blue" }}>
            show more
          </Typography>
          <Box>
            <Typography sx={{ fontSize: 16, fontWeight: "bold" }} color="gray">
              Minimum Experience
            </Typography>
            <Typography>{minExperience} Years</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontSize: 16,
              fontWeight: 700,
              bgcolor: "#55EFC4",
              color: "#000000",
              boxShadow: "none",
              "&:hover": { bgcolor: "#55EFC4", boxShadow: "none" },
            }}
            onClick={onApply}
          >
            ⚡️Easy Apply
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default JobCard;
