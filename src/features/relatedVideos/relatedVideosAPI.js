import axiosInstance from "../../utils/axios"


/*
api request format:
http://localhost:9000/videos?tags_like=javascript&tags_like=react&id_ne=4&_limit=5

*/

const relatedVideosAPI = async (tags, currentId) => {

    let queryString = ""

    queryString += tags.map((tag) => "tags_like="+tag).join('&')
    queryString += `&id_ne=${currentId}&_limit=4`

    // console.log("query: ",queryString)

        try {
            const response = await axiosInstance.get(`/videos?${queryString}`)
            return response.data
            //will return this promise which will be caught by the reducers and handled by extraReducers as they are fake actions
        }catch (error){
            throw error
        }
    
    
    }
    


export default relatedVideosAPI