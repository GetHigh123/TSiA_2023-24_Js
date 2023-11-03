function Wytnij1() {
    var str = document.getElementById("p1").innerHTML; 
    var result = str.slice(26, 36);
    document.getElementById("p2").innerHTML = result;
  }
  
  function Wytnij2() {
    var str = document.getElementById("p1").innerHTML; 
    var result = str.slice(-12, -5);
    document.getElementById("p3").innerHTML = result;
  }