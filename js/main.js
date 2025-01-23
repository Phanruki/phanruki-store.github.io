/* Loader */
window.onload = async () => {
    document.getElementById("loader").style.animation = "fadeOut 2s";
    setTimeout(() => {
        document.getElementById("loader").style.visibility = 'hidden';
    },2000);
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
        document.getElementById("header").style.opacity = "1";
    }
})