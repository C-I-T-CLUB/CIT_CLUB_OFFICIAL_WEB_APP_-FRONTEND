//This files has the front end logic for event page
let newEventBtn = document.getElementById('eventBtn');
newEventBtn.addEventListener('click', newEvent);
//This function loads the new event page
function newEvent(e){
    e.preventDefault();
    window.location.href="../html/newevent.html";
}
