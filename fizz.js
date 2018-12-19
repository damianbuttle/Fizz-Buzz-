var list = document.getElementById("list");

var listItems = "";

var i;

for (i = 1; i < 101; i = i + 1) {

    listItems += "<li>";

    if ((i % 3 === 0) && (i % 5 === 0)) {
        listItems += "Fizzbuzz";
    }
    else if (i % 3 === 0) {
        listItems += "Fizz";
    }
    else if (i % 5 === 0) {
        listItems += "Buzz";
    }
    else {
        listItems += i;
    }
    listItems += "</li>";

}

list.innerHTML += listItems;