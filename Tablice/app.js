const animals = ['Shrek', 'Osioł', 'Kot w Butach', 'Smoczyca', 'Fiona', 'Ciastek'];
let list = document.getElementById("D1");

function createListItem(text, type) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    li.type = type;
    return li;
}

function Lista1() {
    list.innerHTML = "";
    for (let i = 0; i < animals.length; i++) {
        list.appendChild(createListItem(animals[i], "1"));
    }
}

function Lista2() {
    list.innerHTML = "";
    let i = 1;
    for (let animal of animals) {
        list.appendChild(createListItem(animal, "a"));
        i++;
    }
}

function Lista3() {
    list.innerHTML = "";
    animals.forEach(function(animal) {
        list.appendChild(createListItem(animal, "I"));
    });
}