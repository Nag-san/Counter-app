var count = 0;

function revcount() {
    count = count - 1;
    document.getElementById("counter").innerHTML = count;
}

function reset() {
    count = 0;
    document.getElementById("counter").innerHTML = 0;
}

function countt() {
    count = count + 1;
    document.getElementById("counter").innerHTML = count;
}

