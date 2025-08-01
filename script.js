
function toggleLanguage() {
    var es = document.getElementById("content-es");
    var en = document.getElementById("content-en");
    if (es.style.display === "none") {
        es.style.display = "block";
        en.style.display = "none";
    } else {
        es.style.display = "none";
        en.style.display = "block";
    }
}
