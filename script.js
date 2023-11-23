var number = 0;
var diff = 0;

function revcount() {
    let number_rev = document.getElementById("revnum").value;
    diff = diff + 1;
    number_rev = number_rev - diff;
    if ( number_rev >= 0 )
    document.getElementById("counter").innerHTML = number_rev;

}

revcount();

function reset() {
    number = 0;
    number_rev = 0;
    diff = 0;
    document.getElementById("counter").innerHTML = "Let's go!";
}

reset(); 

function count() {
    number = number + 1;
    var text = document.getElementById("counter");
    text.innerHTML = number;
}

count();