import React, { useEffect } from "react";
import SingleRelatedVideo from "./SingleRelatedVideo";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import {Loading} from "../UI/Loading"

const RelatedVideos = ({video}) => {
	const relatedVideosObj = useSelector((state) => state.relatedVideos)

	const {videos: relatedVideos, isLoading, isError, error} = relatedVideosObj

	const dispatch = useDispatch()
	const {tags, id:currentId} = video || {}

	useEffect(() => {
		dispatch(fetchRelatedVideos({tags, currentId}))
	},[dispatch, tags, currentId])

	let content = null

	if(isLoading) <Loading />
	if(!isLoading && isError) {
		content = error
	}
	if(!isLoading && !isError && relatedVideos?.length === 0){
		content = "no related videos"
	}
	if(!isLoading && !isError && relatedVideos?.length > 0){
		content = relatedVideos.map((relatedVideo) => <SingleRelatedVideo key={relatedVideo.id} relatedVideo={relatedVideo} />)
	}

	return (
		<div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
			{/* <!-- single related video --> */}
			{content}
		</div>
	);
};

export default RelatedVideos;
