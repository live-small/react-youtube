import Filter from "@components/common/filter";
import Videos from "@components/videoItem/videos";
import { useEffect, useState } from "react";
import { VideoAndChannelType, Youtube } from "types/youtube";

export default function Landing({ youtube }: { youtube: Youtube }) {
	const [videoList, setVideoList] = useState<VideoAndChannelType[]>();

	useEffect(() => {
		youtube
			.getPopularVideo() //
			.then((list) => setVideoList(list));
	}, [youtube]);

	return (
		<>
			{videoList ? (
				<>
					<Filter onSetVideoList={setVideoList} youtube={youtube} />
					<Videos videos={videoList} />
				</>
			) : (
				<div>loading..</div>
			)}
		</>
	);
}
