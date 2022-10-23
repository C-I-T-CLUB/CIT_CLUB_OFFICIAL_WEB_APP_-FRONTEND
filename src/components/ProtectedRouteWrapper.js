import { Navigate } from "react-router-dom"
import  Auth  from "../hooks/auth"
/**
 * 
 * Wrapper to protect routes that need users to authenticated to access
 */
export const ProtectedRoute = ({children}) => {
    const auth = Auth
    return auth.isAuthenticated() ? children: <Navigate to={{pathname:"/Login"}}/>
}