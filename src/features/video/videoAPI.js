import axiosInstance from "../../utils/axios"


const videoAPI = async (id) => {
        try {
            const response = await axiosInstance.get(`/videos/${id}`)
            return response.data
            //will return this promise which will be caught by the reducers and handled by extraReducers as they are fake actions
        }catch (error){
            throw error
        }
    
    
    }
    


export default videoAPI