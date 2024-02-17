import React, { useEffect } from "react";
import Video from "./Video";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import { Loading } from "../UI/Loading";

const Videos = () => {
    const dispatch = useDispatch()
    const videosListObj = useSelector((state) => state.videos)
    const filter = useSelector((state) => state.filter)

    const {selectedTags, searchedWord} = filter || {}


    const {videos, isLoading, isError, error } = videosListObj || {}

    useEffect(() => {
        dispatch(fetchVideos({selectedTags, searchedWord}))
        console.log(selectedTags)
        console.log(searchedWord)
    }, [dispatch, selectedTags, searchedWord])

    let content = null

    if(isLoading) {<Loading />}

    if(!isLoading && isError) {
        content = error
    }

    if(!isLoading && !isError && videos?.length === 0) {
        content = "no videos found"
    }

    if(!isLoading && !isError && videos?.length > 0){
        content = videos.map((video) => <Video key={video.id} video={video} />)

    }

	return (
		<section className="pt-12">
			<section className="pt-12">
				<div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
					{/* <!-- single video --> */}
                    {content}
				</div>
			</section>
		</section>
	);
};

export default Videos;

/*
<!-- error section
<div className="col-span-12">some error happened</div> -->
*/
