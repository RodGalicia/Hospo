import axios from "axios";

const api = {
    login: async(user) => {
        return await axios({
            url:"/api/users/login",
            method: "post",
            data:user

        })
    }
} 
export default api;