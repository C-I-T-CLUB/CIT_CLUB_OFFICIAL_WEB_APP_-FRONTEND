import  Axios  from "axios";
import { useQuery } from "react-query";

const useGetInterests = () => {
    return useQuery('getInterests',()=>{
        Axios.get('/helpers/interest').then(res=>res?.data).catch(err=>err?.response?.data)
    })
}