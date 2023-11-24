var number = 0;
var diff = 0;
var add = 0;

function revcount() {
    let number_rev = document.getElementById("revnum").value;
    diff = diff + 1;
    number_rev = number_rev - diff;
    if ( number_rev >= 0 )
    document.getElementById("counter").innerHTML = number_rev;

}

function reset() {
    number = 0;
    number_rev = 0;
    diff = 0;
    add = 0;
    document.getElementById("counter").innerHTML = "Let's go!";
}

function count() {
    let number = document.getElementById("revnum").value;
    add = add + 1;
    if (add <= number)
    document.getElementById("counter").innerHTML = add;
}

