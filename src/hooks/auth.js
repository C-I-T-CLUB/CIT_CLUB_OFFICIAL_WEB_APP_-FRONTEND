/**
 * Class to handle authentication operations
 */
class Auth {
    constructor() {
        this.authenticated=false
    }
    // Get Authentication Cookie
    getCookie(){
        return document.cookie.split(';').some((c)=>{
            return c.trim().startsWith("token=")
        })
    }
    /**
     * Method to get jwt token set in cookie if it exists
     * @returns string
     */
    getToken(){
        let cookie ={}
        document.cookie.split(';').forEach((e)=>{
            let [key,value] = e.split("=")
            cookie[key.trim()]=value
        })
        return cookie['token']
    }
    /**
     * Checks is current user is authenticated
     * @returns bool
     */
    isAuthenticated (){
        if (this.getToken() !== undefined){
            this.authenticated =true
        } return this.authenticated
    }
    /**
     * Method to logout by expiring the cookie containing the token
     */
    logout(){
        if (this.getCookie()){
            document.cookie="token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        }
        window.location.href="#/"
        this.authenticated=false
    }
    /**
     * 
     * @param {string} token 
     * Method to save jwt token to cookies
     */
    setAuthToken(token){
        const d = new Date()
        d.setTime(d.getTime()+(10*60*60*1000))
        document.cookie= `token=${token};expires=${d.toUTCString()}`
    }
}

export default new Auth()