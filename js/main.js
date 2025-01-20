/* Loader */
window.onload = () => {
    document.getElementById("loader").style.opacity = '0';
}

/* Header */

window.addEventListener("scroll", function () {
    let num = this.window.scrollY
    console.log(num)

    if (num > 0) {
        document.getElementById("header").style.animation = "fadeOut 2s";
        document.getElementById("header").style.opacity = "0";
    } else {
        document.getElementById("header").style.animation = "fadeIn 2s";
    }
})