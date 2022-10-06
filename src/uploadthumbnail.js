//This file has the logic for uploading thumbnail
let eventThumbnail = document.getElementById('event_thumbnail');
eventThumbnail.addEventListener('change',onImageLoad)
//this event loads image on upload
function onImageLoad(e){
    e.preventDefault();
    let event_thumbnail_output = document.getElementById('event_thumbnail_output');
    event_thumbnail_output.src = URL.createObjectURL(e.target.files[0]);
    console.log(event_thumbnail_output.src);
}