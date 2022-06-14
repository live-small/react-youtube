import Videos from "@components/videoItem/videos";
import { useEffect, useState } from "react";
import { VideoType, Youtube } from "types/youtube";

export default function Landing({ youtube }: { youtube: Youtube }) {
	const [videoList, setVideoList] = useState<VideoType[]>();

	useEffect(() => {
		youtube.getPopularVideo().then((list) => setVideoList(list));
	}, [youtube]);

	return (
		<>
			{/* filter 
		 videoList */}
			{videoList && <Videos videos={videoList} />}
		</>
	);
}
