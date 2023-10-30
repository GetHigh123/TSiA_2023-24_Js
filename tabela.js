   var x = prompt("Podaj wartość x:");
        var y = prompt("Podaj wartość y:");

        document.querySelector("#nowyp").innerHTML = "Dziesięć losowych liczb z przedziału od " + x + " do " + y

        x = parseInt(x);
        y = parseInt(y);

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var randomNumbers = [];
        for (var i = 0; i < 10; i++) {
            var randomNumber = getRandomInt(x, y);
            randomNumbers.push(randomNumber);
        }

        // document.getElementById("randomNumbers").textContent = randomNumbers.join(", ");

        var min = Math.min.apply(null, randomNumbers);
        var max = Math.max.apply(null, randomNumbers);

        document.getElementById("minNumber").textContent = min;
        document.getElementById("maxNumber").textContent = max;

        let komorki = document.getElementsByClassName("komorka")
        console.log(komorki)

        for(let i = 0; i < 10; i ++) {
            komorki[i].innerText = randomNumbers[i]
        }