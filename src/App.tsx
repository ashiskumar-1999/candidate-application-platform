import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Card from "./components/Card";
import data from "./data/data";
import SingleFilter from "./components/Filters/SingleFilter";

const experience = [
  {
    MenuItem: "0",
  },
  {
    MenuItem: "1",
  },
  {
    MenuItem: "2",
  },
  {
    MenuItem: "3",
  },
  {
    MenuItem: "4",
  },
  {
    MenuItem: "5",
  },
  {
    MenuItem: "6",
  },
  {
    MenuItem: "7",
  },
];

const techStack = [
  {
    MenuItem: "Java",
  },
  {
    MenuItem: "JavaScript",
  },
  {
    MenuItem: "React",
  },
  {
    MenuItem: "TypeScript",
  },
  {
    MenuItem: "GoLang",
  },
  {
    MenuItem: "Python",
  },
  {
    MenuItem: "Kotlin",
  },
  {
    MenuItem: "C++",
  },
];
const minimumBaseSalary = [
  {
    MenuItem: "0L",
  },
  {
    MenuItem: "10L",
  },
  {
    MenuItem: "20L",
  },
  {
    MenuItem: "30L",
  },
  {
    MenuItem: "40L",
  },
  {
    MenuItem: "50L",
  },
  {
    MenuItem: "60L",
  },
  {
    MenuItem: "70L",
  },
];
const App = () => {
  const [items, setItems] = useState(data.slice(0, 6)); // Initial load
  const [isFetching, setIsFetching] = useState(false);

  const fetchMoreItems = async () => {
    setIsFetching(true);
    // Simulate fetching data from an API
    const newItems = await new Promise<any[]>((resolve) =>
      setTimeout(() => {
        const newData = data.slice(items.length, items.length + 20);
        resolve(newData);
      }, 1000)
    );
    setItems((prevItems) => [...prevItems, ...newItems]);
    setIsFetching(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !isFetching
      ) {
        fetchMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching]);
  return (
    <Box display="flex" my={10} flexDirection="column" mx={10}>
      <Stack direction="row" spacing={4} mb={10}>
        <SingleFilter FilterLabel="Experience" menuItems={experience} />
        <SingleFilter FilterLabel="Tech Stack" menuItems={techStack} />
        <SingleFilter
          FilterLabel="Minimum Base Salary"
          menuItems={minimumBaseSalary}
        />
      </Stack>

      <Grid container spacing={8} columns={24}>
        {items.map((data: any) => (
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
        {isFetching && (
          <Box display="flex" justifyContent="center" width="100%">
            <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
              Loading more items...
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default App;
