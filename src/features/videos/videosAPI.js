import axiosInstance from "../../utils/axios";

/*
api request format:
http://localhost:9000/videos?tags_like=javascript&tags_like=react&q=css

actually:
http://localhost:9000/videos?tags_like=javascript&tags_like=tips&tags_like=vscode&tags_like=css&q=react

they returns empty array []
but http://localhost:9000/videos?tags_like=javascript&tags_like=tips&tags_like=vscode&tags_like=css&q=
returns array of objects


*/

const videosAPI = async (selectedTags, searchedWord) => {
	let queryString = "";

  if(selectedTags?.length > 0){
    queryString += selectedTags.map((tag) => "tags_like=" + tag).join("&");
  }
	if(searchedWord !== ""){
    queryString += `&q=${searchedWord}`;
  }

	console.log(queryString);

	try {
		const response = await axiosInstance.get(`/videos?${queryString}`);
		return response.data;
		//will return this promise which will be caught by the reducers and handled by extraReducers as they are fake actions
	} catch (error) {
		throw error;
	}
};

export default videosAPI;
