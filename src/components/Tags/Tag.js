import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedTags, removeSelectedTags } from "../../features/filter/filterSlice";

const Tag = ({tag}) => {
	const selectedTags = useSelector((state) => state.filter.selectedTags)
	const dispatch = useDispatch()

	const {title: presentTag} = tag

	const style = selectedTags.includes(presentTag) ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"


	const handleTagSelect = () => {
		// console.log(tag.title)

		if(selectedTags.includes(presentTag)){
			dispatch(removeSelectedTags(presentTag))
		}else {
			dispatch(addSelectedTags(presentTag))
		}

	}

	return (
		<div className={style}
		onClick={handleTagSelect}
		>
			{presentTag}
		</div>
	);
};

export default Tag;

/*

// <!-- selected Tag -->

<div
    className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
    redux
</div>

*/
