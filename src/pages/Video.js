import React, { useEffect } from "react";
import Player from "../components/VideoDescription/Player";
import Description from "../components/VideoDescription/Description";
import RelatedVideos from "../components/RelatedVideos/RelatedVideos";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../features/video/videoSlice";

const Video = () => {
	const {videoId : id} = useParams()
	const dispatch = useDispatch()
	const videoObj = useSelector((state) => state.video)

	const {video, isLoading, isError, error} = videoObj || {}

	useEffect(() => {
		dispatch(fetchVideo(id))
	}, [dispatch, id])

	return (
		<section className="pt-6 pb-20">
			<div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
				<div className="grid grid-cols-3 gap-2 lg:gap-8">
					<div className="col-span-full w-full space-y-8 lg:col-span-2">
						{/* <!-- video player --> */}
						<Player video = {video} />

						{/* <!-- video description --> */}
						<Description video = {video} />
					</div>

					{/* <!-- related videos --> */}
					<RelatedVideos video = {video} />
				</div>
			</div>
		</section>
	);
};

export default Video;
