const themeButton = document.getElementById("theme");

themeButton.addEventListener("click", (e)=> {
    console.log(e.target, "pihtas");
    if(e.target.classList.contains("btn-dark")) {
        e.target.classList.replace("btn-dark", "btn-light")
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    else {
        e.target.classList.replace("btn-light", "btn-dark")
        e.target.col
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
});
