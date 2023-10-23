let lightbulb = document.querySelector("#bulb")

if (document.querySelector("#on").checked === true || document.querySelector("#isOn").checked === true ||  document.querySelector("#isOn").checked === true) {
    lightbulb.src = "zarowka.jpg"
} else {
    lightbulb.src = "zarowka1.jpg"
}

document.querySelector("#turnOn").addEventListener('click', function (){
    lightbulb.src = "zarowka.jpg"
    document.querySelector("#on").checked = true
    document.querySelector("#off").checked = false
    document.querySelector("#isOn").checked = true
})

document.querySelector("#turnOff").addEventListener('click', function (){
    lightbulb.src = "zarowka1.jpg"
    document.querySelector("#off").checked = true
    document.querySelector("#on").checked = false
    document.querySelector("#isOn").checked = false
})

document.querySelector("#on").addEventListener('click', function(){
    lightbulb.src = "zarowka.jpg"
    document.querySelector("#off").checked = false
    document.querySelector("#isOn").checked = true
})

document.querySelector("#off").addEventListener('click', function(){
    lightbulb.src = "zarowka1.jpg"
    document.querySelector("#on").checked = false
    document.querySelector("#isOn").checked = false
})

document.querySelector("#isOn").addEventListener('click', function(){
    if(document.querySelector("#isOn").checked === true) {
        lightbulb.src = "zarowka.jpg"
        document.querySelector("#on").checked = true
        document.querySelector("#off").checked = false
    } else {
        lightbulb.src = "zarowka1.jpg"
        document.querySelector("#on").checked = false
        document.querySelector("#off").checked = true
    }
})