import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) {
    return <div>Loading...</div>;
  }
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {videos.map((items, index) => (
        <Box key={index}>
          {items.id.videoId && <VideoCard video={items} />}
          {items.id.channelId && <ChannelCard channelDetail={items} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
