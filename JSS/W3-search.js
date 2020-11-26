function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    ul.style.display = "flex";
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (filter.split('')
      .every(x => txtValue.toUpperCase().split('').some(y => y === x))) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

