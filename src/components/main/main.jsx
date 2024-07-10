import { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Category, Videos } from "../";
import { ApiService } from "../../service/api.sevice";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const selectedCategoryHandle = (category) => setSelectedCategory(category);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data?.items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [selectedCategory]);

  // console.log(videos);
  // useEffect(() => {
  //   ApiService.fetching(`search?part=snippet&q=${selectedCategory}`).then(data => setVideos(data.items))
  // }, [])

  return (
    <Stack>
      <Category
        selectedCategoryHandle={selectedCategoryHandle}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectedCategory}{" "}
            <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
