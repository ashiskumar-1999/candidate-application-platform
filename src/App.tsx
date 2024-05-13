import React, { useEffect } from "react";
import { Box, Grid, Stack } from "@mui/material";
import Card from "./components/Card";
import data from "./data/data";

function App() {
  return (
    <Box display="flex" my={10} flexDirection="column" mx={10}>
      <Grid container spacing={8} columns={24}>
        {data.map((data: any) => (
          <Grid item xs={8}>
            <Card
              key={data.jdUid}
              companyURL={data.logoUrl}
              companyName={data.companyName}
              jobDetails={data.jobDetailsFromCompany}
              jobRole={data.jobRole}
              location={data.location}
              salaryCurrencyCode={data.salaryCurrencyCode}
              minJdSalary={data.minJdSalary !== null ? data.minJdSalary : "N/A"}
              maxJdSalary={data.maxJdSalary !== null ? data.maxJdSalary : "N/A"}
              minExperience={data.minExp !== null ? data.minExp : "N/A"}
              onApply={data.jdLink}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
