import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { colors } from "../../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${video?.id?.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.item}
          sx={{ width: { xs: "100%", sm: "360px" }, height: "180px" }}
        />
      </Link>
      <CardContent
        sx={{
          background: colors.primary,
          width: "100%",
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/video/${video?.id?.videoId}`}>
          <Typography my={2} sx={{ opacity: ".4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: "0.6" }}>
            {video?.snippet?.desctiption}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
        <Stack
          direction={"row"}
          position={"absolute"}
          bottom={"10px"}
          alignItems={"center"}
          gap={"5px"}
          >
          <Avatar src={video?.snippet?.thumbnails?.high?.url} />
          <Typography variant="subtitle2" color={"grey"}>
            {video?.snippet?.channelTitle}
            <CheckCircle
              sx={{ fontSize: "12px", color: "gray", marginLeft: "5px" }}
              />
          </Typography>
        </Stack>
      </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
