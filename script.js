window.onload = () => {
    var back_to_top_buttons = Array.from(document.getElementsByClassName("back-to-top"));
    back_to_top_buttons.push(document.getElementById("no-underline"));
    for (var i = 0; i < back_to_top_buttons.length; i++) {
        back_to_top_buttons[i].addEventListener("click", goToTop = () => {
            scrollTo(0, 0);
        })
    }
}