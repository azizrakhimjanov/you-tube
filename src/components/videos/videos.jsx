import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "../";
const Videos = ({ videos }) => {
  if (!videos.length) return <Loader />
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gap={2}
    >
      {videos?.map((item) => {
        return (
          <Box key={item?.id?.videoId}>
            {item?.id?.videoId && <VideoCard video={item} />}
            {item?.id?.channelId && <ChannelCard video={item} />}
          </Box>
        );
      })}
    </Box>
  );
};

export default Videos;
