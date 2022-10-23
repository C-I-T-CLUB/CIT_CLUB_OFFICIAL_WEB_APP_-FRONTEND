import  Axios  from "axios";
import { useMutation, useQuery } from "react-query";

export const useGetInterests = () => {
    return useQuery('getInterests',()=>{
        Axios.get('/helpers/interest').then(res=>(res?.data)).catch(err=>(err?.response?.data))
    })
}
export const useLoginMutation = () => {
    return useMutation((params)=>{
        Axios.post("/auth/login",params).then(res=>(res.data)).catch(err=>(err?.response?.data))
    })
}
export const useJoinCitMutation = () => {
    return useMutation((params)=>{
        Axios.post("/auth/member",params).then(res=>(res.data)).catch(err=>(err?.response?.data))
    })
}
export const useSignupMutation = () => {
    return useMutation(params => {
        Axios.post("/auth/signup",params).then(res=>res.data).catch(err=>err?.response?.data)
    })
}