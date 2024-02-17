import axiosInstance from "../../utils/axios"


const tagsAPI = async () => {
        try {
            const response = await axiosInstance.get('/tags')
            return response.data
            //will return this promise which will be caught by the reducers and handled by extraReducers as they are fake actions
        }catch (error){
            throw error
        }
    
    
    }
    


export default tagsAPI