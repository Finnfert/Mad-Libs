document.getElementById("button1").addEventListener("click", Madlib);

function Madlib() {
  var one = document.getElementById("1st").value;
  var two = document.getElementById("2nd").value;
  var three = document.getElementById("3rd").value;
  var four = document.getElementById("4th").value;

  var output = `"There are too many ${one} on this ${two} airplane!", I screamed. "Sombody has to ${three} on the ${four} to solve this problem!"`;

  document.getElementById("result").innerHTML = output;
}
