function compute() {
  var p = document.getElementById("principal").value;
  var n = document.getElementById("rangeInput").value;
  var r = document.getElementById("selectNumber");
  var value = r.options[r.selectedIndex].value;
  var result = document.getElementById("result");

  if (p == 0 || null) {
    alert("Please Enter Positive Number!");
    document.getElementById("principal").focus();
  }

  if (p < 0) {
    alert("Please Enter Positive Number!");
    document.getElementById("principal").focus();
  }

  result.innerHTML =
    " If you deposit " +
    `<mark>${p}</mark>` +
    ", <br/> at an interest rate of " +
    `<mark>${n}</mark>` +
    "%, <br/> You will recieve an amount of " +
    `<mark>${(p * n * value) / 100}</mark>` +
    ", <br/> in the year <mark>2025</mark>";
}
