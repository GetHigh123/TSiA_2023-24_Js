<!DOCTYPE html>
<html>
<head>
  <title>Table</title>
  <style>
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th, td {
      padding: 5px;
      text-align: center;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <th colspan="10">Dziesięć losowych liczb całkowitych z przedziału od x do y</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th colspan="10">10 losowych liczb całkowitych z podanego zakresu</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>      
    </tr>    
    <tr>      
      <th colspan="5">Najmniejsza wylosowana liczba</th>      
      <th colspan="5">Największa wylosowana liczba</th>      
    </tr>    
    <tr>      
      <td colspan="5"></td>      
      <td colspan="5"></td>      
    </tr>    
  </table>
</body>

</html>

let x = prompt("Podaj wartość x:");
let y = prompt("Podaj wartość y:");

// Wybierz elementy tabeli
let table = document.getElementsByTagName("table")[0];
let row1 = table.rows[0];
let row2 = table.rows[1];
let row3 = table.rows[2];
let row4 = table.rows[3];

// Wpisz napis w pierwszym wierszu
row1.cells[0].innerHTML = "Dziesięć losowych liczb całkowitych z przedziału od " + x + " do " + y;

// Wygeneruj i wpisz losowe liczby w drugim wierszu
for (let i = 0; i <= 9; i++) {
  let randomNumber = Math.floor(Math.random() * (y - x + 1)) + parseInt(x);
  row2.cells[i].innerHTML = randomNumber;
}

// Znajdź najmniejszą i największą liczbę w drugim wierszu
let minNumber = Math.min.apply(null, Array.from(row2.cells).map(cell => parseInt(cell.innerHTML)));
let maxNumber = Math.max.apply(null, Array.from(row2.cells).map(cell => parseInt(cell.innerHTML)));

// Wpisz najmniejszą i największą liczbę w trzecim i czwartym wierszu
row3.cells