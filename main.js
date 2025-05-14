const cardPlace = document.querySelectorAll(".resultCard");

cardPlace.forEach(place => {
    const more = place.querySelector(".more");
    place.addEventListener('mouseenter', function(){
        more.style.opacity = "1";
    })

    place.addEventListener('mouseleave', function(){
        more.style.opacity = "0";
    })
    
});




const bmButton = document.querySelector(".bmJs");
const bmCells = document.querySelector(".bmCells")

bmButton.addEventListener("click", function(){
    bmButton.classList.toggle("bmJsActive");
    bmCells.classList.toggle("bmCellsActive");
})