//this file will be used for shortcuts that are used outside the popup.
document.addEventListener('keydown',(event)=>{
    if(event.ctrlKey && event.shiftKey && event.key === 'N'){
        alert("shortcut pressed")
    }
})