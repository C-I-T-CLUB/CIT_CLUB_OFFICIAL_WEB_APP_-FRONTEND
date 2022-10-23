import { QueryCache, QueryClient } from "react-query";
/**
 * React Query Client to make api requests
 */
const queryClient = new QueryClient({
    defaultOptions: {
        queries:{
            retry: true,
            refetchOnReconnect: true,
            refetchOnWindowFocus: true,
        }
    },
    /**
     * Caching Mechanism
     */
    queryCache: new QueryCache({
        onError:(err,_query) =>{
            console.log(err)
        }
    })
})
export default queryClient;