import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY":"3c245bfd-6bc4-4e51-b3f8-fa2decdc1bba"
    }
})

export const Requests={
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>response.data)
    },
    follow(id){
        return instance.post(`follow/${id}`)
    },   
    unfollow(id){
        return instance.delete(`follow/${id}`)
    },
    profile(id){
        return instance.get(`profile/${id}`)
    },
    auth(){
        return instance.get(`auth/me`)
    },
    getStatus(id){
        return instance.get(`profile/status/` + id)
    },
    changeStatus(status){
        return instance.put(`profile/status`, {status:status})
    },
    login(email, password, rememberMe=false){
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe})
    },
    logOut(){
        return instance.delete(`auth/login`)
    }
}