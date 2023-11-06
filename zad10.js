       function Dodaj(tekst, id) {
            var p = document.getElementById('p1');
            p.innerHTML += ' , ' + tekst;
            var button = document.getElementById(id);
            button.disabled = true;
       }