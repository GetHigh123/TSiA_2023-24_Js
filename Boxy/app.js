function Lista1() {
    var names = ["Marcin", "Ania", "Monika", "Piotr", "Beata", "ania", "marcin", "piotr", "PIOTR", "ANIA", "MONIKA"];
    var box3 = document.getElementById("box3");
    box3.innerHTML = "<p>" + names.join("<br> ") + "</p>";
    box3.classList.add("list-container");
}
function Lista2() {
    var names = ["Marcin", "Ania", "Monika", "Piotr", "Beata", "ania", "marcin", "piotr", "PIOTR", "ANIA", "MONIKA"];
    var lowerCaseNames = names.map(function (name) {
        return name.toLowerCase();
    });
    var box3 = document.getElementById("box3");
    box3.innerHTML = "<p>" + lowerCaseNames.join("<br> ") + "</p>";
    box3.classList.add("list-container");
}
function Lista3() {
    var names = ["Marcin", "Ania", "Monika", "Piotr", "Beata", "ania", "marcin", "piotr", "PIOTR", "ANIA", "MONIKA"];
    var namesCapitalized = names.map(function (name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
    var box3 = document.getElementById("box3");
    box3.innerHTML = "<p>" + namesCapitalized.join("<br> ") + "</p>";
    box3.classList.add("list-container");
}
function Lista4() {
    var names = ["Marcin", "Ania", "Monika", "Piotr", "Beata", "ania", "marcin", "piotr", "PIOTR", "ANIA", "MONIKA"];
    var namesWithStars = names.map(function (name) {
        var stars = '*'.repeat(name.length);
        return stars;
    });
    var box3 = document.getElementById("box3");
    box3.innerHTML = "<p>" + namesWithStars.join("<br> ") + "</p>";
    box3.classList.add("list-container");
}