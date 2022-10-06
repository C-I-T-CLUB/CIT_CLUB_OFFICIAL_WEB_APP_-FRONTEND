/**
 * This is a javascript file that controls the actions on the side nav bar.
 * It is made of two functions:
 * funtion to open the side bar navigation : open_nav()
 * 
 * function to close the side bar navigation: close_nav()
 */
//open_nav() function begins here
function open_nav(){
    document.getElementById("side_bar__nav").style.width = "12em";
}
//end
//close_nav() function begins here
function close_nav(){
    document.getElementById("side_bar__nav").style.width ="0";
}