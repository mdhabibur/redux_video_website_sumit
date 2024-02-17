import React, { useEffect } from "react";
import Tag from "./Tag";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import { Loading } from "../UI/Loading";

const Tags = () => {

	const dispatch = useDispatch()
	const tagsObjList = useSelector((state) => state.tags)
	const {tags, isLoading, isError, error} = tagsObjList || {}

	useEffect(() => {
		dispatch(fetchTags())
	}, [dispatch])


	let content = null

	if(isLoading) {
	<Loading />
	}

	if(!isLoading && isError) {
		content = error
	}

	if(!isLoading && !isError && tags?.length === 0) {
		content = "no tags found"
	}

	if(!isLoading && !isError && tags?.length > 0) {
		content = tags.map((tag) => <Tag key={tag.id} tag = {tag} />)
	}


	return (
		<section>
			<div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
				{content}
			</div>
		</section>
	);
};

export default Tags;
