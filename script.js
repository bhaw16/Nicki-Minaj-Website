window.onload = () => {
    var back_to_top_buttons = document.getElementsByClassName("back-to-top");
    for (var i = 0; i < back_to_top_buttons.length; i++) {
        back_to_top_buttons[i].addEventListener("click", goToTop = () => {
            scrollTo(0, 0);
        })
    }
}