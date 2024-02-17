import React from "react";
import like from "../../assets/like.svg"
import dislike from "../../assets/unlike.svg"

const LikeUnlike = ({video}) => {
	return (
		<div className="flex gap-10 w-48">
			<div className="flex gap-1">
				<div className="shrink-0">
					<img className="w-5 block" src={like} alt="Like" />
				</div>
				<div className="text-sm leading-[1.7142857] text-slate-600">{video.likes}k</div>
			</div>
			<div className="flex gap-1">
				<div className="shrink-0">
					<img className="w-5 block" src={dislike} alt="Unlike" />
				</div>
				<div className="text-sm leading-[1.7142857] text-slate-600">{video.unlikes}k</div>
			</div>
		</div>
	);
};

export default LikeUnlike;
